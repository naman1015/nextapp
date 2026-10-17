import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Health Check",
};

export const dynamic = "force-dynamic";

type FetchedProbeResult = {
  ok: boolean;
  statusCode: number;
  latencyMs: number;
  endpoint: string;
  checkedAt: string;
  payload: unknown;
};

async function fetchUpstreamHealth(): Promise<FetchedProbeResult> {
  const endpoint = env.healthCheckApiUrl;
  const start = performance.now();
  const checkedAt = new Date().toISOString();

  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(5000),
    });
    const latencyMs = Math.round(performance.now() - start);
    const payload = await response.json();

    return {
      ok: response.ok,
      statusCode: response.status,
      latencyMs,
      endpoint,
      checkedAt,
      payload,
    };
  } catch (error) {
    const latencyMs = Math.round(performance.now() - start);
    return {
      ok: false,
      statusCode: 503,
      latencyMs,
      endpoint,
      checkedAt,
      payload: {
        fallback: true,
        message:
          error instanceof Error
            ? error.message
            : "Upstream probe unreachable; fallback response rendered.",
      },
    };
  }
}

export default async function HealthCheckPage() {
  const probe = await fetchUpstreamHealth();

  return (
    <PageContainer>
      <PageHeader
        title="System Health Check"
        description="Server Component diagnostic page that fetches live upstream data on every request and verifies environment configuration."
      />

      {/* Top status summary cards — responsive 1 col at 375px, 4 cols at 1280px */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            System Status
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                probe.ok ? "bg-success" : "bg-warning"
              }`}
            />
            <span className="text-lg font-semibold text-foreground">
              {probe.ok ? "Operational" : "Degraded (Fallback)"}
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Upstream HTTP Status
          </p>
          <p className="mt-2 font-mono text-lg font-semibold text-foreground">
            {probe.statusCode} ({probe.latencyMs} ms)
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Environment
          </p>
          <p className="mt-2 font-mono text-lg font-semibold text-foreground">
            {env.appEnv}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Render Mode
          </p>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Async Server Component
          </p>
        </div>
      </div>

      {/* Fetched Data Payload Card */}
      <section className="mt-6 rounded-lg border border-border bg-surface p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Live Fetched Data Payload
            </h2>
            <p className="mt-1 break-all font-mono text-xs text-muted">
              GET {probe.endpoint}
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-surface-muted px-3 py-1 font-mono text-xs text-muted">
            Checked: {probe.checkedAt}
          </span>
        </div>

        <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-surface-muted p-4 font-mono text-xs leading-relaxed text-foreground">
          {JSON.stringify(probe.payload, null, 2)}
        </pre>
      </section>

      {/* Environment Variable Structure Verification (No Secrets Exposed) */}
      <section className="mt-6 rounded-lg border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-base font-semibold text-foreground">
          Environment Variable Structure Check
        </h2>
        <p className="mt-1 text-sm text-muted">
          Confirms required environment keys are resolved without exposing secret values.
        </p>

        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-md border border-border px-4 py-3">
            <dt className="font-mono text-xs text-muted">NEXT_PUBLIC_APP_NAME</dt>
            <dd className="mt-1 font-medium text-foreground">{env.appName}</dd>
          </div>
          <div className="rounded-md border border-border px-4 py-3">
            <dt className="font-mono text-xs text-muted">NEXT_PUBLIC_APP_ENV</dt>
            <dd className="mt-1 font-medium text-foreground">{env.appEnv}</dd>
          </div>
          <div className="rounded-md border border-border px-4 py-3">
            <dt className="font-mono text-xs text-muted">HEALTH_CHECK_API_URL</dt>
            <dd className="mt-1 font-medium text-success">
              Configured (Server-Only)
            </dd>
          </div>
        </dl>
      </section>
    </PageContainer>
  );
}
