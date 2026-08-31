import { createFileRoute } from "@tanstack/react-router";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — DriveOS" },
      {
        name: "description",
        content:
          "Today's appointments, stock, enquiries, deliveries, revenue, loans, leaderboard and activity for your dealership.",
      },
      { property: "og:title", content: "Dashboard — DriveOS" },
      {
        property: "og:description",
        content: "One live view of your dealership: appointments, stock, enquiries, deliveries, revenue and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardView,
});
