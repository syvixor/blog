// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@storyblok/nuxt"],
    devtools: { enabled: false },
    future: { compatibilityVersion: 4 },
    colorMode: { preference: "dark" },
    css: ["~/assets/css/global.css"],
    ui: { fonts: false },
    storyblok: { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }
});