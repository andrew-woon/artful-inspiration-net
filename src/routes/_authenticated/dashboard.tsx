import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — DriveOS" },
      { name: "description", content: "Overview of your dealership operations across sales, workshop, and finance." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <ModulePlaceholder
      title="Dashboard"
      description="A unified overview of your dealership — inventory health, active leads, sales velocity, and workshop load — all in one place."
      icon={LayoutDashboard}
    />
  );
}
