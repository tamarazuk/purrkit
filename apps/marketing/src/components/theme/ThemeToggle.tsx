"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <label
      className="swap swap-rotate btn btn-ghost btn-circle btn-sm"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <Sun className="swap-on h-5 w-5" />
      <Moon className="swap-off h-5 w-5" />
    </label>
  );
}
