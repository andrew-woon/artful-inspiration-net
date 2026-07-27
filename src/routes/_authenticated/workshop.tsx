import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/workshop")({
  head: () => ({
    meta: [
      { title: "Workshop — DriveOS" },
      { name: "description", content: "Manage service jobs, technician schedules, and reconditioning work in one place." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Workshop"
      description="Schedule technicians, track reconditioning and service jobs, and keep every vehicle moving through the workshop on time."
      icon={Wrench}
    />
  ),
});
