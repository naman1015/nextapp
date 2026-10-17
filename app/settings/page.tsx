import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Settings"
        description="Routed placeholder screen for workspace preferences, alert thresholds, and environment configuration."
      />

      <div className="space-y-6">
        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-base font-semibold text-foreground">
            Workspace Preferences (Placeholder)
          </h2>
          <p className="mt-1 text-sm text-muted">
            Interactive preference forms will be wired up as Client Components in the next phase.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-surface-muted p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Default Environment
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Preview (Branch Deployments)
              </p>
            </div>
            <div className="rounded-md border border-border bg-surface-muted p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Health Probe Interval
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                On-Demand Server Render (60s SLA)
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
          <h2 className="text-base font-semibold text-foreground">
            Notification Channels (Placeholder)
          </h2>
          <p className="mt-1 text-sm text-muted">
            Configure email and webhook alerts when health checks report degraded latency.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}
