import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { sampleData, RowData } from "../data/mockData";
import { useState } from "react";

const columns: ColumnDef<RowData>[] = [
  { header: "Job Request", accessorKey: "jobRequest" },
  { header: "Submitted", accessorKey: "submitted" },
  {
    header: "Status",
    accessorKey: "status",
    cell: (info) => {
      const value = info.getValue() as RowData["status"];
      const badgeColor = {
        "In-process": "bg-yellow-100 text-yellow-800",
        "Need to start": "bg-orange-100 text-orange-800",
        "Complete": "bg-green-100 text-green-800",
        "Blocked": "bg-red-100 text-red-800",
      }[value];
      return (
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${badgeColor}`}>
          {value}
        </span>
      );
    },
  },
  { header: "Submitter", accessorKey: "submitter" },
  {
    header: "URL",
    accessorKey: "url",
    cell: (info) => {
      const url = info.getValue() as string;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {url.replace("https://www.", "").split(".")[0]}
        </a>
      );
    },
  },
  { header: "Assigned", accessorKey: "assigned" },
  {
    header: "Priority",
    accessorKey: "priority",
    cell: (info) => {
      const value = info.getValue() as RowData["priority"];
      const color =
        value === "High"
          ? "text-red-600"
          : value === "Medium"
          ? "text-yellow-600"
          : "text-blue-600";
      return <span className={`font-medium ${color}`}>{value}</span>;
    },
  },
  { header: "Due Date", accessorKey: "dueDate" },
  { header: "Est. Value", accessorKey: "value" },
];

export default function Spreadsheet() {
  const [data] = useState<RowData[]>(sampleData);
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="p-4">

      {/* Top Toolbar Row */}
      <div className="flex justify-between items-center mb-4">
        {/* Left toolbar buttons */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-sm text-gray-700">Toolbar</span>
          {["Hide Fields", "Sort", "Filter", "Cell view"].map((btn) => (
            <button
              key={btn}
              className="text-sm px-3 py-1 rounded hover:bg-gray-100 border text-gray-600"
              onClick={() => console.log(`${btn} clicked`)}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Right action buttons */}
        <div className="flex space-x-3">
          {["Import", "Export", "Share", "New Action"].map((btn) => (
            <button
              key={btn}
              className="text-sm px-4 py-2 border rounded hover:bg-gray-100"
              onClick={() => console.log(`${btn} clicked`)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            {/* Group header row */}
            <tr>
              <th className="bg-white"></th>
              <th colSpan={5} className="text-left px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold border-b">
                📘 Q3 Financial Overview
              </th>
              <th colSpan={1} className="text-left px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold border-b">
                ✅ ABC
              </th>
              <th colSpan={2} className="text-left px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold border-b">
                🔷 Answer a question
              </th>
              <th colSpan={1} className="text-left px-4 py-2 bg-orange-50 text-orange-700 text-sm font-semibold border-b">
                🟧 Extract
              </th>
            </tr>

            {/* Actual column titles */}
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b text-gray-500 w-10">#</th>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 border-b text-gray-700 font-medium"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-gray-500 text-center">
                  {index + 1}
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom tab bar */}
      <div className="flex space-x-4 mt-4 border-t pt-4">
        {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab) => (
          <button
            key={tab}
            className="text-sm px-4 py-2 rounded hover:bg-gray-100 border text-gray-700"
            onClick={() => console.log(`Tab clicked: ${tab}`)}
          >
            {tab}
          </button>
        ))}
        <button
          className="text-xl px-4 py-2 rounded border hover:bg-gray-100"
          onClick={() => console.log("Add tab clicked")}
        >
          +
        </button>
      </div>
    </div>
  );
}
