import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { UserMenu } from "./UserMenu";
import { GlobalSearch } from "./GlobalSearch";
import { NotificationCenter } from "./NotificationCenter";
import { CommandPalette } from "./CommandPalette";
import { NAV_ITEMS } from "./nav-items";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [paletteOpen, setPaletteOpen] = useState(false);

  const active = NAV_ITEMS.find((i) => pathname.startsWith(i.url));

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-sm">
            <div className="flex min-w-0 items-center gap-3">
              <SidebarTrigger />
              <div className="hidden h-4 w-px bg-border sm:block" />
              <nav aria-label="Breadcrumb" className="hidden min-w-0 items-center gap-1.5 text-sm sm:flex">
                {active && (
                  <>
                    <span className="text-muted-foreground">{active.group}</span>
                    <span className="text-muted-foreground/50">/</span>
                    <span className="truncate font-semibold tracking-tight text-foreground">
                      {active.title}
                    </span>
                  </>
                )}
              </nav>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <GlobalSearch onOpen={() => setPaletteOpen(true)} />
              <NotificationCenter />
              <div className="h-4 w-px bg-border" />
              <UserMenu />
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </div>
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </SidebarProvider>
  );
}
