export default defineNuxtConfig({
  modules: ["nuxt-schema-org", "@nuxtjs/i18n"],
  site: {
    url: "https://example.com",
    name: "Repro",
    description: "Reproduction for self-referential i18n workTranslation.",
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Repro",
    },
  },
  i18n: {
    baseUrl: "https://example.com",
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: false,
    locales: [
      { code: "en", language: "en-US", file: "en.ts" },
      { code: "fr", language: "fr-FR", file: "fr.ts" },
    ],
    langDir: "locales",
  },
  compatibilityDate: "2026-10-14",
});