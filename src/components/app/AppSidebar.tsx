import { Link, useRouterState } from "@tanstack/react-router";
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
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type NavItem = { title: string; url: string; icon: React.ComponentType<{ className?: string }> };

const overview: NavItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
];

const sales: NavItem[] = [
  { title: "Inventory", url: "/inventory", icon: Car },
  { title: "Leads", url: "/leads", icon: UserPlus },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Pipeline", url: "/pipeline", icon: GitBranch },
];

const operations: NavItem[] = [
  { title: "Workshop", url: "/workshop", icon: Wrench },
  { title: "Finance", url: "/finance", icon: Wallet },
];

const insights: NavItem[] = [
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (url: string) => pathname === url;

  const renderGroup = (label: string, items: NavItem[]) => (
    <SidebarGroup>
      {!collapsed && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                <Link to={item.url as any} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link
          to="/dashboard"
          className="flex items-center gap-2 px-2 py-1.5"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-foreground text-background text-[11px] font-bold tracking-tight">
            D
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold tracking-tight text-foreground">
              DriveOS
            </span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {renderGroup("Overview", overview)}
        {renderGroup("Sales", sales)}
        {renderGroup("Operations", operations)}
        {renderGroup("Insights", insights)}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")} tooltip="Settings">
              <Link to="/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
