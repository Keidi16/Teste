import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "PT-ao",
      },
      title: "REX - Rampart Exploitation",
    },
  },
  alias: {
    "@docs": resolve(__dirname, "./docs"),
    "@types": resolve(__dirname, "./types"),
    "@utils": resolve(__dirname, "./utils"),
    "@stores": resolve(__dirname, "./stores"),
    "@styles": resolve(__dirname, "./styles"),
    "@images": resolve(__dirname, "./images"),
    "@locales": resolve(__dirname, "./locales"),
    "@constants": resolve(__dirname, "./constants"),
    "@composables": resolve(__dirname, "./composables"),
    "@service-worker": resolve(__dirname, "./service-worker"),
  },
  routeRules: {
    "/": { redirect: "/app" },
  },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-security",
    "nuxt-primevue",
    "nuxt-primevue",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  runtimeConfig: {
    APY_KEY: "",
    BASE_URL: "",
    public: {
      baseURL: "http://localhost:4000/api/v1",
    },
  },
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "../styles/main.css",
  ],
  security: {
    headers: {
      xXSSProtection: "1",
      contentSecurityPolicy: {
        "connect-src": [
          "'self'",
          "http://localhost:4000/",
          "https://api.unisvg.com/",
          "https://api.simplesvg.com/",
          "https://api.iconify.design/",
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://ugxrutmbdnievlqtuyng.supabase.co/storage/v1/object/public/uploads/",
        ],
      },
    },
  },
  googleFonts: {
    preload: true,
    preconnect: true,
    families: {
      Poppins: [300, 400, 500, 600, 700, 800],
    },
  },
});
