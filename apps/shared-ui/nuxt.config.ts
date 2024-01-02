// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/devtools",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },

  alias: { "@": resolve("./") },
  components: [{ path: "@/components", prefix: "Ui" }],
});
