import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/customers")({
  head: () => ({
    meta: [
      { title: "Customers — DriveOS" },
      { name: "description", content: "A single record for every customer — purchases, service history, and communications." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Customers"
      description="One source of truth for every buyer — purchase history, service records, and every conversation your team has had."
      icon={Users}
    />
  ),
});
