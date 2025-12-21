import type React from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PurrKit Generator - Create Your Rescue Website in Minutes',
  description:
    'Build a beautiful website for your cat rescue organization in minutes. No coding required.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
