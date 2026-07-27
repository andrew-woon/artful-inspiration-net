import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/reports")({
  head: () => ({
    meta: [
      { title: "Reports — DriveOS" },
      { name: "description", content: "Sales, inventory, and workshop analytics for dealership managers." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Reports"
      description="Understand what's really happening in the business — sales performance, stock turn, workshop utilisation, and more."
      icon={BarChart3}
    />
  ),
});
