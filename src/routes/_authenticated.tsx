import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";

// Auth gate temporarily disabled while we build out the app shell and modules.
// Re-enable by restoring the beforeLoad redirect below.
export const Route = createFileRoute("/_authenticated")({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
});
