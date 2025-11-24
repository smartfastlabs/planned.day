import { defineConfig } from "@solidjs/start/config";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  middleware: "./src/middleware.ts",
  server: {
    // https: {
    //   cert: "./.certs/master-bedroom.local.pem",
    //   key: "./.certs/master-bedroom.local-key.pem",
    // },
  },
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate", // SW auto-updates in background

        // This can be minimal; you probably already have a manifest.json/webmanifest,
        // but you can also let the plugin generate one:
        manifest: {
          name: "My Solid PWA",
          short_name: "SolidPWA",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },

        // This makes sure all built JS/CSS/HTML are included in the cache:
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
          navigateFallback: "/",
          runtimeCaching: [
            {
              // Handle page navigations (including /)
              urlPattern: ({ request }) => request.mode === "navigate",
              handler: "NetworkFirst",
              options: {
                cacheName: "pages",
                networkTimeoutSeconds: 5,
              },
            },
            {
              // Example: static assets from your own origin
              urlPattern: ({ request, url }) =>
                request.destination === "script" ||
                request.destination === "style" ||
                request.destination === "image",
              handler: "StaleWhileRevalidate",
              options: {
                cacheName: "static-resources",
              },
            },
          ],
        },
      }),
    ],
    server: {
      allowedHosts: ["master-bedroom.local"],
    },
  },
});
