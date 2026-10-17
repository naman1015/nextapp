export type NavItem = {
  href: string;
  label: string;
  description: string;
  badge?: string;
};

export const navLinks: readonly NavItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Application overview, screen directory, and architecture status.",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    description: "Key operational metrics, active workflows, and recent activity feed.",
  },
  {
    href: "/profile",
    label: "Profile",
    description: "User identity, role permissions, and connected integrations.",
  },
  {
    href: "/settings",
    label: "Settings",
    description: "Workspace preferences, notification rules, and environment config.",
  },
  {
    href: "/about",
    label: "About",
    description: "Product specification, design token catalog, and architecture notes.",
  },
  {
    href: "/health",
    label: "Health Check",
    description: "Live server-side data fetching diagnostic and system status.",
    badge: "Live SSR",
  },
] as const;
