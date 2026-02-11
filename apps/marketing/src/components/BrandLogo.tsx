"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function BrandLogo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span style={{ visibility: mounted ? "visible" : "hidden" }} suppressHydrationWarning>
      <Image
        src={
          theme === "dark"
            ? "/assets/purrkit-logo-dark-bg.svg"
            : "/assets/purrkit-logo-light-bg.svg"
        }
        alt="PurrKit"
        width={150}
        height={36}
        priority
        className="h-10 w-auto"
      />
    </span>
  );
}
