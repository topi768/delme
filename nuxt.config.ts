import { log } from 'console';

// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['reka-ui/nuxt', 'vue-yandex-maps/nuxt'],

  // поддержка глобальных scss-переменных
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

  // конфигурация модуля vue-yandex-maps
  yandexMaps: {
    // на стороне сервера можно читать через process.env:
    // apikey: process.env.YANDEX_MAPS_API_KEY,
    // но на клиенте — через import.meta.env
    apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY,
  },

  // если вам нужно пробросить ключ в runtimeConfig:
  runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.VITE_YANDEX_MAPS_API_KEY,
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
});
