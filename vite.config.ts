import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: "autoUpdate",
    base: "/",
    srcDir: "src",
    filename: 'sw.ts',
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    manifest: {
      name: 'WordleLike',
      short_name: 'Game of Wordle',
      description: 'Play wordle on different level',
      theme_color: '#ffffff',
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: 'images/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',

        },
        {
          src: 'images/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'images/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: 'images/apple-touch-icon.png',
          type: 'image/png',
        },
        {
          src: 'images/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: 'images/safari-pinned-tab.png',
          type: 'image/png',
        },
      ]
    },
    injectManifest: {
      globPatterns: ['**.{html, js, css, svg, json}', '**'],
      globIgnores: ['**/node_modules/**/*'],
      maximumFileSizeToCacheInBytes: 3000000,
    },
  })]
})
