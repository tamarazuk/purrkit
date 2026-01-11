import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createRequire } from "module";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { imagetools } from "vite-imagetools";
import imagemin from "unplugin-imagemin/vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig(async ({ command }) => {
  const isBuild = command === "build";
  const siteUrl = process.env.SITE_URL || "https://example.com";
  const enablePrerender = isBuild && process.env.PRERENDER === "true";
  const require = createRequire(import.meta.url);
  const vitePrerender = enablePrerender ? require("vite-plugin-prerender") : null;

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      imagetools(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer(),
            ),
            await import("@replit/vite-plugin-dev-banner").then((m) =>
              m.devBanner(),
            ),
          ]
        : []),
      ...(isBuild
        ? [
            imagemin(),
            Sitemap({
              hostname: siteUrl,
            }),
            ...(enablePrerender
              ? [
                  vitePrerender({
                    staticDir: path.resolve(import.meta.dirname, "dist"),
                    routes: ["/"],
                  }),
                ]
              : []),
          ]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    build: {
      outDir: path.resolve(import.meta.dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
