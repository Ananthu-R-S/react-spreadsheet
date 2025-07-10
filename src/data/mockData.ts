export type RowData = {
  jobRequest: string;
  submitted: string;
  status: "In-process" | "Need to start" | "Complete" | "Blocked";
  submitter: string;
  url: string;
  assigned: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  value: string;
};

export const sampleData: RowData[] = [
  {
    jobRequest: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "https://www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    value: "6,200,000",
  },
  {
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "https://www.irfankhan.pro",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    value: "3,500,000",
  },
  {
    jobRequest: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "https://www.markjohnson.me",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    value: "4,750,000",
  },
  {
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "https://www.emilygreen.dev",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-02-2025",
    value: "5,900,000",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "https://www.jessicabrown.biz",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    value: "2,800,000",
  },
];

