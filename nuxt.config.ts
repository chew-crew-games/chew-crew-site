// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      title: "chew crew",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons/css/boxicons.min.css",
        },
      ],
      script: [
        {
          src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxthq/studio", "@vueuse/nuxt"],
  nitro: {
    preset: "netlify-static",
  },
  typescript: {
    shim: false,
    strict: true,
  },
  vite: {
    server: {
      strictPort: true,
    },
    resolve: {
      alias: {
        "@assets": resolve(__dirname, "assets"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/_globals.scss" as *;',
          charset: false,
        },
      },
    },
  },
});
