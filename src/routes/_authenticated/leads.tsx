import { createFileRoute } from "@tanstack/react-router";
import { UserPlus } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/leads")({
  head: () => ({
    meta: [
      { title: "Leads — DriveOS" },
      { name: "description", content: "Capture, assign, and follow up on every dealership lead in one workflow." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Leads"
      description="Capture inbound enquiries from every channel, assign them to consultants, and never let a hot lead go cold."
      icon={UserPlus}
    />
  ),
});
