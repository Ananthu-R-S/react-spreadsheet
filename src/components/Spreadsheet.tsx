import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { sampleData, RowData } from "../data/mockData";
import { useState } from "react";

const columns: ColumnDef<RowData>[] = [
  { header: "Name", accessorKey: "name" },
  { header: "Owner", accessorKey: "owner" },
  { header: "Type", accessorKey: "type" },
  { header: "Updated", accessorKey: "updated" },
  {
    header: "Tags",
    accessorKey: "tags",
    cell: (info) => (info.getValue() as string[]).join(", "),
  },
];

export default function Spreadsheet() {
  const [data] = useState<RowData[]>(sampleData);
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {["View", "Automations", "Sharing", "Tools"].map((tab) => (
          <button
            key={tab}
            className="text-sm px-4 py-2 border rounded hover:bg-gray-100"
            onClick={() => console.log(`Tab clicked: ${tab}`)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 border-b text-left font-medium"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
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

      <div className="flex space-x-2 mt-4">
        {["Filter", "Group", "Sort", "Color"].map((btn) => (
          <button
            key={btn}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
            onClick={() => console.log(`Button clicked: ${btn}`)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
