import { log } from 'console';

export default defineNuxtConfig({
  modules: ['reka-ui/nuxt', 'vue-yandex-maps/nuxt'],

  css: ['@/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },

  yandexMaps: {
    apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY,
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
});
