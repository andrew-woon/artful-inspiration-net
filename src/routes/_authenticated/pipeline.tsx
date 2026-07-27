import { createFileRoute } from "@tanstack/react-router";
import { GitBranch } from "lucide-react";
import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/pipeline")({
  head: () => ({
    meta: [
      { title: "Sales Pipeline — DriveOS" },
      { name: "description", content: "Visualise every deal from test drive to delivery with a clean sales pipeline." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Sales Pipeline"
      description="A visual pipeline from first test drive to delivery — so nothing stalls, and every consultant knows what to work on next."
      icon={GitBranch}
    />
  ),
});
