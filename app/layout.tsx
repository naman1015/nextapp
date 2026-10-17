import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { env } from "@/lib/env";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${env.appName} — Phase: Foundations`,
    template: `%s | ${env.appName}`,
  },
  description:
    "Next.js App Router foundation with Server Components, Tailwind CSS design tokens, and live health check.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-surface py-4">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-xs text-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <span>
              {env.appName} · Next.js App Router Foundation (Server Components by
              default)
            </span>
            <span className="font-mono">
              env: {env.appEnv} · build: {env.vercelGitCommitSha}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
