import { useRouterState } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { UserMenu } from "./UserMenu";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/inventory": "Inventory",
  "/leads": "Leads",
  "/customers": "Customers",
  "/pipeline": "Sales Pipeline",
  "/workshop": "Workshop",
  "/finance": "Finance",
  "/reports": "Reports",
  "/settings": "Settings",
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const title = PAGE_TITLES[pathname] ?? "";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="h-4 w-px bg-border" />
              <h1 className="text-sm font-semibold tracking-tight text-foreground">{title}</h1>
            </div>
            <UserMenu />
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
