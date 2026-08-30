import {
  LayoutDashboard,
  Car,
  UserPlus,
  Users,
  GitBranch,
  Wrench,
  Wallet,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  group: string;
  keywords?: string[];
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard, group: "Overview", keywords: ["home", "overview"] },
  { title: "Inventory", url: "/inventory", icon: Car, group: "Sales", keywords: ["stock", "cars", "vehicles"] },
  { title: "Leads", url: "/leads", icon: UserPlus, group: "Sales", keywords: ["enquiries", "prospects"] },
  { title: "Customers", url: "/customers", icon: Users, group: "Sales", keywords: ["clients", "buyers"] },
  { title: "Sales", url: "/pipeline", icon: GitBranch, group: "Sales", keywords: ["pipeline", "deals"] },
  { title: "Workshop", url: "/workshop", icon: Wrench, group: "Operations", keywords: ["service", "repairs", "detailing"] },
  { title: "Finance", url: "/finance", icon: Wallet, group: "Operations", keywords: ["loans", "payments", "invoices"] },
  { title: "Reports", url: "/reports", icon: BarChart3, group: "Insights", keywords: ["analytics", "kpi"] },
  { title: "Settings", url: "/settings", icon: Settings, group: "Workspace", keywords: ["team", "preferences"] },
];

export const NAV_GROUPS = ["Overview", "Sales", "Operations", "Insights"] as const;
