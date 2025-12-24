# Whiskers Cat Rescue

A beautiful, modern website template for cat rescue organizations, built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

Generated with love by [PurrKit](https://github.com/tamarazuk/purrkit) - empowering cat rescue organizations with professional tools.

## Features

- ✅ **Next.js 16** with App Router for optimal performance
- ✅ **React 19** with latest features
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS v4** with custom color system using OKLCH
- ✅ **Fully Responsive** - looks great on all devices
- ✅ **SEO Optimized** with proper meta tags and structure
- ✅ **Accessible** with semantic HTML and ARIA labels
- ✅ **Easy to Customize** - change colors, content, and structure in minutes

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website!

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Customization Guide

This template is designed to be easily customizable. Here's how to make it your own:

### 1. Update Site Information

**File: `config/site.ts`**

This is the most important file to customize. It contains all your rescue's basic information:

```typescript
export const siteConfig = {
  name: "Your Rescue Name",              // UPDATE: Your rescue's name
  description: "Your rescue description", // UPDATE: Brief description
  email: "your@email.com",               // UPDATE: Contact email
  phone: "(555) 123-4567",               // UPDATE: Phone number
  address: "Your address",               // UPDATE: Physical address
  social: {
    facebook: "https://facebook.com/...", // UPDATE: Social media links
    instagram: "https://instagram.com/...",
    twitter: "https://twitter.com/..."
  },
  navigation: [                           // UPDATE: Add/remove pages as needed
    { name: "About", href: "/about" },
    { name: "Adoptable Cats", href: "/cats" },
    // ... more pages
  ]
};
```

### 2. Customize Colors

**File: `app/globals.css`**

All colors are defined as CSS variables at the top of the file. Simply change the values to match your brand:

```css
:root {
  /* Brand Colors - UPDATE these! */
  --cream: 0.988 0.004 85.82;           /* Background color */
  --primary: 0.55 0.07 145;             /* Primary brand color - default: Sage Green */
  --primary-light: 0.92 0.03 145;       /* Light variant of primary */
  --secondary: 0.62 0.12 35;            /* Secondary/accent color - default: Terracotta */
  --charcoal: 0.294 0.012 264.05;       /* Text color */
}
```

**Color Picker Tool:** Use [OKLCH Color Picker](https://oklch.com/) to find your colors in OKLCH format.

### 3. Add Your Cats

**File: `data/cats.ts`**

Add, edit, or remove cats from your adoptable list:

```typescript
export const cats: Cat[] = [
  {
    id: "1",                                    // Unique ID
    name: "Whiskers",                           // Cat's name
    age: "2 years",                             // Age
    gender: "Male",                             // "Male" or "Female"
    description: "Friendly and playful...",     // Description
    image: "https://placekitten.com/400/400",  // Image URL or path
    traits: ["Playful", "Good with kids"],      // Personality traits
    featured: true                              // Show on homepage?
  },
  // Add more cats...
];
```

**Image Tips:**
- Upload cat photos to the `public/cats/` folder
- Reference them as `/cats/your-photo.jpg`
- Or use external URLs (like from your photo hosting service)

### 4. Update Content

**Mission Statement** - `content/mission.ts`
```typescript
export const mission = {
  title: "Our Mission",
  statement: "Your mission statement...",
  values: [...],  // Your core values
  stats: [...]    // Statistics to display
};
```

**Foster Information** - `content/foster-info.ts`
```typescript
export const fosterInfo = {
  hero: { title: "...", description: "..." },
  benefits: [...],  // Benefits of fostering
  process: [...],   // How to become a foster
  faq: [...]        // Common questions
};
```

**Donation Information** - `content/donation-tiers.ts`
```typescript
export const donationInfo = {
  tiers: [...],        // Donation amounts and benefits
  impact: {...},       // How donations are used
  otherWays: [...]     // Other ways to help
};
```

### 5. Customize Pages

All page files are in the `app/` directory:

- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/cats/page.tsx` - Cat listings
- `app/cats/[id]/page.tsx` - Individual cat details
- `app/foster/page.tsx` - Foster program
- `app/donate/page.tsx` - Donations
- `app/contact/page.tsx` - Contact form

Look for `// UPDATE:` comments throughout the code for customization hints!

### 6. Add Your Logo

1. Save your logo as `public/logo.png` (or .jpg, .svg)
2. Update the navigation in `components/nav.tsx` to include your logo:

```typescript
<Link href="/" className="flex items-center gap-2">
  <Image src="/logo.png" alt={siteConfig.name} width={40} height={40} />
  <span className="text-xl font-bold">{siteConfig.name}</span>
</Link>
```

### 7. Setup Contact Form

The contact form in `components/contact-form.tsx` currently just shows a success message. To make it functional:

**Option 1: Use a form service (easiest)**
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

**Option 2: Build your own API**
- Create an API route in `app/api/contact/route.ts`
- Use a service like SendGrid or Resend to send emails

**Option 3: Use mailto (simple but not ideal)**
```typescript
<form action={`mailto:${siteConfig.email}`} method="post" enctype="text/plain">
```

### 8. Setup Donations

The donate page has placeholder buttons. To accept donations:

**Option 1: Payment processor**
- [Stripe](https://stripe.com/) - Most popular, full-featured
- [PayPal](https://www.paypal.com/donate) - Easy to setup
- [Square](https://squareup.com/us/en/donate) - Good for nonprofits

**Option 2: Donation platforms**
- [Donorbox](https://donorbox.org/)
- [GiveWP](https://givewp.com/) (WordPress)
- [Kindful](https://www.kindful.com/)

Add your payment buttons/forms in `app/donate/page.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub (optional - you can upload a zip file directly)
2. Import your repository in Vercel
3. Click Deploy!

Vercel is free for personal and non-profit sites.

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Hosting Options

This is a standard Next.js app and can be deployed to:
- Railway
- Render
- Fly.io
- AWS
- DigitalOcean
- Any Node.js hosting

## File Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with nav & footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── cats/              # Cat listings and details
│   ├── foster/            # Foster program
│   ├── donate/            # Donations
│   ├── contact/           # Contact form
│   └── globals.css        # Global styles & CSS variables
├── components/            # Reusable React components
│   ├── nav.tsx           # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── button.tsx        # Button component
│   ├── cat-card.tsx      # Cat card component
│   └── contact-form.tsx  # Contact form
├── config/
│   └── site.ts           # Site configuration (CUSTOMIZE THIS!)
├── data/
│   └── cats.ts           # Cat data (CUSTOMIZE THIS!)
├── content/              # Content files
│   ├── mission.ts
│   ├── foster-info.ts
│   └── donation-tiers.ts
└── public/               # Static files (images, etc.)
```

## Customization Tips

### Changing Fonts

The template uses Inter by default. To change:

1. Update `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

2. Apply to body:
```typescript
<body className={yourFont.className}>
```

Browse fonts at [Google Fonts](https://fonts.google.com/).

### Adding New Pages

1. Create a new folder in `app/`, e.g., `app/volunteer/`
2. Add a `page.tsx` file inside
3. Add to navigation in `config/site.ts`

### Removing Pages

1. Delete the page folder from `app/`
2. Remove from navigation in `config/site.ts`

### Dark Mode

The template includes dark mode color variables but doesn't have a toggle by default. To add:

1. Install `next-themes`:
```bash
npm install next-themes
```

2. Follow the [Next.js dark mode guide](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)

## SEO Tips

1. **Update metadata** in each page file:
   - Title
   - Description
   - Keywords

2. **Add your logo** to `public/` folder

3. **Create a favicon**:
   - Add `favicon.ico` to `public/`
   - Or create `app/icon.png` (Next.js will auto-generate)

4. **Submit to Google**: Use [Google Search Console](https://search.google.com/search-console)

5. **Generate a sitemap**: Next.js can auto-generate - see [docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

## Troubleshooting

### Images not loading
- Make sure images are in the `public/` folder
- Check that paths start with `/` (e.g., `/cats/image.jpg`)
- For external images, add domains to `next.config.js`

### TypeScript errors
```bash
npm run lint
```

### Build fails
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling issues
- Check that Tailwind classes are spelled correctly
- CSS variables must be defined in `globals.css`

## Support

- **Questions?** Open an issue on [GitHub](https://github.com/tamarazuk/purrkit)
- **Found a bug?** Please report it!
- **Need help?** Check the [Next.js docs](https://nextjs.org/docs) or [Tailwind docs](https://tailwindcss.com/docs)

## Contributing

Found something that could be better? PRs are welcome!

## License

This template is part of PurrKit and is available under the MIT License.

---

**Built with PurrKit** - Empowering cat rescue organizations with professional tools, because every cat deserves a chance.

Made with ❤️ for the rescue community
