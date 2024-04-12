import type { SettingItem } from "~/types";

const INFO_SETTING_ITEMS: Array<SettingItem> = [
  {
    index: 1,
    name: "Criar conta",
    icon: "heroicons:user-plus",
    path: "/app/settings/create-account",
    roles: ["admin", "super"],
  },
  {
    index: 2,
    name: "Editar conta",
    icon: "heroicons:user-circle",
    path: "/app/settings/edit-profile",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    index: 3,
    name: "Alterar palavra-passe",
    icon: "heroicons:lock-open",
    path: "/app/settings/change-password",
    roles: ["super", "admin", "analista", "auditor"],
  },
];

const COMPANY_INFO: Array<SettingItem> = [
  {
    index: 1,
    name: "Criar organização",
    icon: "heroicons:building-office-2",
    path: "/app/settings/company",
    roles: ["super", "admin"],
  },
  {
    index: 2,
    name: "Editar organização",
    icon: "heroicons:building-office-2",
    path: "/app/settings/company/edit",
    roles: ["super", "admin", "analista"],
  },
  {
    index: 3,
    name: "Criar administrador",
    icon: "heroicons:user-plus",
    path: "/app/settings/company/create-admin",
    roles: ["super"],
  },
];

const ACCESS_SETTING_ITEMS: Array<SettingItem> = [
  {
    index: 1,
    name: "Preferências",
    icon: "heroicons:adjustments-horizontal",
    path: "/app/settings/preferences",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    index: 2,
    name: "Som de alerta",
    icon: "heroicons:bell-alert",
    path: "/app/settings/alert-sounds",
    roles: ["super", "admin", "analista"],
  },
  {
    index: 3,
    name: "Agendar pentest",
    icon: "heroicons:clock",
    path: "/app/settings/schedule-pentest",
    roles: ["super", "admin", "analista", "auditor"],
  },
  {
    index: 4,
    name: "Lista de agendamentos",
    icon: "heroicons:calendar-days",
    path: "/app/settings/schedule-list",
    roles: ["super", "admin", "analista"],
  },
  {
    index: 5,
    name: "Actualizações",
    icon: "heroicons:arrow-path-20-solid",
    path: "/app/settings/updates",
    roles: ["super", "admin"],
  },
];

export { INFO_SETTING_ITEMS, ACCESS_SETTING_ITEMS, COMPANY_INFO };
