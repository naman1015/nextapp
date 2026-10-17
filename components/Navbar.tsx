"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            P
          </span>
          <span>PulseOps</span>
        </Link>

        {/* Desktop navigation (visible at md / 1280px) */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface-muted text-primary"
                    : "text-muted hover:bg-surface-muted hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                {link.badge ? (
                  <span className="rounded-full bg-success-bg px-1.5 py-0.5 text-[10px] font-semibold text-success">
                    {link.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button (visible at 375px) */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors hover:bg-surface-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile collapsible drawer (375px viewport friendly) */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-surface md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium ${
                    active
                      ? "bg-surface-muted text-primary"
                      : "text-muted hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge ? (
                    <span className="rounded-full bg-success-bg px-2 py-0.5 text-[10px] font-semibold text-success">
                      {link.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
