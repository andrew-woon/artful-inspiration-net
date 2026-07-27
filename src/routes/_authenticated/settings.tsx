import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({
    meta: [
      { title: "Settings — DriveOS" },
      { name: "description", content: "Manage your dealership workspace, team, and integrations." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Settings"
      description="Manage your dealership workspace, invite your team, configure integrations, and control access."
      icon={Settings}
    />
  ),
});
