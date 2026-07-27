import { createFileRoute } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/finance")({
  head: () => ({
    meta: [
      { title: "Finance — DriveOS" },
      { name: "description", content: "Track deal financials, loan submissions, commissions, and dealership cashflow." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Finance"
      description="Deal margins, loan submissions, commissions, and cashflow — every number a dealership manager needs to run the business."
      icon={Wallet}
    />
  ),
});
