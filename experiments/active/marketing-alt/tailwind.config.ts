import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["League Spartan", "sans-serif"],
      },
      colors: {
        border: "oklch(var(--nc) / 0.2)",
        input: "oklch(var(--bc) / 0.2)",
        ring: "oklch(var(--p) / <alpha-value>)",
        background: "oklch(var(--b1) / <alpha-value>)",
        foreground: "oklch(var(--bc) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--p) / <alpha-value>)",
          foreground: "oklch(var(--pc) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--s) / <alpha-value>)",
          foreground: "oklch(var(--sc) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--er) / <alpha-value>)",
          foreground: "oklch(var(--erc) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--b2) / <alpha-value>)",
          foreground: "oklch(var(--bc) / 0.6)",
        },
        accent: {
          DEFAULT: "oklch(var(--a) / <alpha-value>)",
          foreground: "oklch(var(--ac) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--b1) / <alpha-value>)",
          foreground: "oklch(var(--bc) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--b1) / <alpha-value>)",
          foreground: "oklch(var(--bc) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        purrkitlight: {
          "primary": "#0F766E", // Teal
          "primary-content": "#FFFFFF",
          "secondary": "#EA8230", // Orange
          "secondary-content": "#FFFFFF",
          "accent": "#EA8230",
          "accent-content": "#FFFFFF",
          "neutral": "#1F2937",
          "neutral-content": "#FAFAF8",
          "base-100": "#FAFAF8",
          "base-200": "#f2f2f0",
          "base-300": "#e5e5e3",
          "base-content": "#1F2937",
          "info": "#0369A1",
          "info-content": "#FFFFFF",
          "success": "#059669",
          "success-content": "#FFFFFF",
          "warning": "#D97706",
          "warning-content": "#FFFFFF",
          "error": "#DC2626",
          "error-content": "#FFFFFF",
        },
        purrkitdark: {
          "primary": "#0F766E", // Teal
          "primary-content": "#FFFFFF",
          "secondary": "#EA8230", // Orange
          "secondary-content": "#FFFFFF",
          "accent": "#EA8230",
          "accent-content": "#FFFFFF",
          "neutral": "#FAFAF8",
          "neutral-content": "#1F2937",
          "base-100": "#1F2937",
          "base-200": "#161d27",
          "base-300": "#0d1117",
          "base-content": "#FAFAF8",
          "info": "#3B82F6",
          "info-content": "#FFFFFF",
          "success": "#10B981",
          "success-content": "#FFFFFF",
          "warning": "#F59E0B",
          "warning-content": "#1F2937",
          "error": "#EF4444",
          "error-content": "#FFFFFF",
        },
      },
    ],
    darkTheme: "purrkitdark",
  },
} satisfies Config;
