import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
};

const tokens = [
  { name: "--background", value: "#f8fafc", usage: "Page canvas background" },
  { name: "--surface", value: "#ffffff", usage: "Card and navbar surface" },
  { name: "--surface-muted", value: "#f1f5f9", usage: "Secondary blocks & code" },
  { name: "--foreground", value: "#0f172a", usage: "Primary body and heading text" },
  { name: "--muted", value: "#64748b", usage: "Secondary labels and captions" },
  { name: "--primary", value: "#2563eb", usage: "Brand accent and active links" },
  { name: "--border", value: "#e2e8f0", usage: "Hairline structural dividers" },
  { name: "--success", value: "#16a34a", usage: "Healthy diagnostic states" },
];

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader
        title="About & Design Tokens"
        description="Specification overview, component rendering strategy, and base Tailwind CSS design tokens."
      />

      <section className="rounded-lg border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-base font-semibold text-foreground">
          Base Design Token Catalog
        </h2>
        <p className="mt-1 text-sm text-muted">
          Defined in <code className="font-mono text-xs">app/globals.css</code>{" "}
          and exposed to Tailwind utility classes via{" "}
          <code className="font-mono text-xs">@theme inline</code>.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tokens.map((token) => (
            <div
              key={token.name}
              className="rounded-md border border-border p-3"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-4 w-4 shrink-0 rounded border border-border"
                  style={{ backgroundColor: token.value }}
                />
                <span className="font-mono text-xs font-semibold text-foreground">
                  {token.name}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{token.value}</p>
              <p className="mt-1 text-xs text-muted">{token.usage}</p>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
