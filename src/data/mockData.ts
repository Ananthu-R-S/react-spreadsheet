export type RowData = {
  name: string;
  owner: string;
  type: string;
  updated: string;
  tags: string[];
};

export const sampleData: RowData[] = [
  {
    name: "Website Redesign",
    owner: "Jane Doe",
    type: "Project",
    updated: "2024-07-05",
    tags: ["Design", "UX"],
  },
  {
    name: "User Research",
    owner: "John Smith",
    type: "Task",
    updated: "2024-07-01",
    tags: ["Research"],
  },
  {
    name: "Q3 Planning",
    owner: "Alice Johnson",
    type: "Meeting",
    updated: "2024-07-07",
    tags: ["Strategy"],
  },
];
