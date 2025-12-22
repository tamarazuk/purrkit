// UPDATE: Customize this file with your rescue's information
export const siteConfig = {
  name: "Whiskers Cat Rescue",
  description: "Saving cats in Toronto since 2015. We provide shelter, medical care, and loving homes for cats in need.",
  email: "info@whiskersrescue.org",
  phone: "(555) 123-4567",
  address: "123 Main St, Toronto, ON M5H 2N2",
  social: {
    facebook: "https://facebook.com/whiskersrescue",
    instagram: "https://instagram.com/whiskersrescue",
    x: "https://x.com/whiskersrescue"
  },
  navigation: [
    { name: "About", href: "/about" },
    { name: "Adoptable Cats", href: "/cats" },
    { name: "Foster", href: "/foster" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" }
  ]
} as const;
