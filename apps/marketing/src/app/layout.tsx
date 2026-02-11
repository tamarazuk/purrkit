import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/theme/ThemeScript";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "PurrKit - Websites & ops for cat rescues",
  description:
    "Launch a beautiful website, then keep cats, forms, and updates organized in one friendly portal. No tech skills required.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "PurrKit - Websites & ops for cat rescues",
    description:
      "Launch a beautiful website, then keep cats, forms, and updates organized in one friendly portal. No tech skills required.",
    url: siteUrl,
    siteName: "PurrKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurrKit - Websites & ops for cat rescues",
    description:
      "Launch a beautiful website, then keep cats, forms, and updates organized in one friendly portal. No tech skills required.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${plusJakarta.variable} antialiased bg-base-100 text-base-content`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
