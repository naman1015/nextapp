import type { Metadata } from "next";
import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { navLinks } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader
        title="PulseOps Foundation"
        description="Day-one Next.js App Router scaffold with Server Components by default, base Tailwind CSS design tokens, and live preview deployment architecture."
      />

      {/* Screen Specification Directory */}
      <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Routed Screens in Spec
          </h2>
          <span className="text-xs text-muted">
            {navLinks.length} total routes · Server Components by default
          </span>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex h-full flex-col justify-between rounded-lg border border-border bg-background/50 p-4 transition-colors hover:border-primary hover:bg-surface-muted"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-foreground">
                      {link.label}
                    </span>
                    <span className="rounded bg-surface-muted px-2 py-0.5 font-mono text-xs text-muted">
                      {link.href}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {link.description}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center text-xs font-medium text-primary">
                  Open screen &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Architecture Highlights (Responsive 1 col at 375px, 3 cols at 1280px) */}
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold text-foreground">
            Server-First Rendering
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            All route pages and layouts are React Server Components by default.
            Only the interactive mobile navigation bar uses a Client Component boundary.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold text-foreground">
            Tailwind Design Tokens
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            Semantic CSS custom properties mapped via Tailwind v4{" "}
            <code className="font-mono">@theme inline</code> for consistent
            surfaces, typography, borders, and status colors.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="text-sm font-semibold text-foreground">
            Responsive 375px &ndash; 1280px
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            Mobile-first fluid containers and adaptive grids tested at 375px
            mobile viewports and 1280px desktop screens without horizontal overflow.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
