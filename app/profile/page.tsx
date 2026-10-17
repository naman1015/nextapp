import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Profile"
        description="Routed placeholder screen for user identity, role permissions, and connected integrations."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground">
              NS
            </div>
            <div className="min-w-0">
              <h2 className="truncate text-base font-semibold text-foreground">
                Namandeep Singh
              </h2>
              <p className="truncate text-xs text-muted">
                Lead Engineer · Workspace Owner
              </p>
            </div>
          </div>
          <dl className="mt-6 space-y-3 border-t border-border pt-4 text-sm">
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Role</dt>
              <dd className="font-medium text-foreground">Admin</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Timezone</dt>
              <dd className="font-mono text-xs text-foreground">Asia/Kolkata</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Auth Status</dt>
              <dd className="font-medium text-success">Verified</dd>
            </div>
          </dl>
        </section>

        <section className="rounded-lg border border-border bg-surface p-5 sm:p-6 lg:col-span-2">
          <h2 className="text-base font-semibold text-foreground">
            Connected Integrations (Placeholder)
          </h2>
          <p className="mt-1 text-sm text-muted">
            Git provider and deployment webhook bindings will be managed on this screen.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border border-border p-4">
              <p className="text-sm font-semibold text-foreground">GitHub</p>
              <p className="mt-1 text-xs text-muted">
                Repository push webhooks &amp; PR branch checks
              </p>
            </div>
            <div className="rounded-md border border-border p-4">
              <p className="text-sm font-semibold text-foreground">Vercel</p>
              <p className="mt-1 text-xs text-muted">
                Automatic preview URLs on every commit
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
