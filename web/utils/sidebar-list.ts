import type { SidebarItem } from "~/types";

export const SIDEBARLIST: Array<SidebarItem> = [
  {
    name: "Dashboard",
    icon: "heroicons:squares-2x2",
    to: "/app/",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    name: "Penetration",
    icon: "heroicons:exclamation-triangle",
    to: "/app/penetration",
    roles: ["super", "admin", "analista"],
  },
  {
    name: "Users",
    icon: "heroicons:users",
    to: "/app/users",
    roles: ["super", "admin", "auditor"],
  },
  {
    name: "Logs",
    icon: "heroicons:document-text",
    to: "/app/logs",
    roles: ["super", "admin", "auditor"],
  },
  {
    name: "Reports",
    icon: "heroicons:clipboard-document-list",
    to: "/app/reports",
    roles: ["super", "admin", "auditor"],
  },
  {
    name: "Terminal",
    icon: "heroicons:command-line",
    to: "/app/terminal",
    roles: ["super", "admin", "analista"],
  },
  {
    name: "Configurações",
    icon: "heroicons:cog-8-tooth",
    to: "/app/settings",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    name: "Sobre nós",
    icon: "heroicons:information-circle",
    to: "/app/about-us",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    name: "Manual",
    icon: "heroicons:book-open",
    to: "/app/docs",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    name: "Exit",
    icon: "heroicons:arrow-right-start-on-rectangle-20-solid",
    to: "#",
    roles: ["super", "admin", "analista", "auditor"],
  },
];
