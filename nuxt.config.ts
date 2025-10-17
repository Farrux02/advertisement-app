// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  devServer: {
    port: 3001
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Nuxt App',
      short_name: 'NuxtApp',
      description: 'Best Nuxt app in the world!',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/your-api-domain\.com\/.*$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24,
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  },
})