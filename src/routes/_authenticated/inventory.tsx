import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — DriveOS" },
      { name: "description", content: "Track every unit in your yard: stock aging, costs, listings, and reconditioning status." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Inventory"
      description="Manage every vehicle in your yard — stock aging, cost basis, listings, and reconditioning status in one clean view."
      icon={Car}
    />
  ),
});
