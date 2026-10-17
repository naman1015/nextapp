import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Dashboard",
};

const placeholderMetrics = [
  { label: "Active Workflows", value: "12", delta: "+2 today" },
  { label: "Deployments (24h)", value: "38", delta: "100% passing" },
  { label: "Avg Response Time", value: "142 ms", delta: "-18 ms vs last week" },
  { label: "Open Alerts", value: "0", delta: "All systems healthy" },
];

export default function DashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Routed placeholder screen for operational metrics, workflow status, and recent deployment activity."
      />

      {/* KPI Grid: 1 col at 375px, 2 cols on tablet, 4 cols at 1280px */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {placeholderMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-border bg-surface p-4"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {metric.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-muted">{metric.delta}</p>
          </div>
        ))}
      </div>

      {/* Main Content + Activity Sidebar Placeholder */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-foreground">
            Throughput Overview (Placeholder)
          </h2>
          <p className="mt-1 text-sm text-muted">
            Chart and time-series visualization module will be mounted here in Phase 2.
          </p>
          <div className="mt-4 flex h-48 items-center justify-center rounded-md border border-dashed border-border bg-surface-muted text-xs text-muted">
            [Time-Series Telemetry Chart Placeholder]
          </div>
        </section>

        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-base font-semibold text-foreground">
            Recent Activity Feed
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="rounded-md border border-border px-3 py-2.5">
              <p className="font-medium text-foreground">Preview build #104</p>
              <p className="text-xs text-muted">Deployed cleanly · 5m ago</p>
            </li>
            <li className="rounded-md border border-border px-3 py-2.5">
              <p className="font-medium text-foreground">Health probe verified</p>
              <p className="text-xs text-muted">HTTP 200 OK · 12m ago</p>
            </li>
            <li className="rounded-md border border-border px-3 py-2.5">
              <p className="font-medium text-foreground">Design tokens synced</p>
              <p className="text-xs text-muted">Tailwind v4 theme · 1h ago</p>
            </li>
          </ul>
        </section>
      </div>
    </PageContainer>
  );
}
