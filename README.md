# PurrKit

> **Empowering cat rescue organizations with professional tools — no technical expertise required.**

PurrKit is an open-source platform designed to help cat rescue organizations create professional websites and manage their operations efficiently, without expensive software subscriptions or technical knowledge.

---

## 🎯 What is PurrKit?

Cat rescues do incredible work, but many struggle with basic digital infrastructure. After founding [Purrfect Paths Rescue](https://purrfectpathsrescue.com), I quickly realized that most small, volunteer-run rescues face significant barriers without technical experience: expensive custom websites, clunky website builders that aren't rescue-specific, and no easy way to keep adoptable cat listings current.

PurrKit solves this by providing:

- **Website Generator** - Create a professional, customized website in minutes
- **Multi-Tenant CMS** - Update cats, photos, and content without touching code
- **No Code Required** - Fill out a simple form, download your site
- **Free Hosting Options** - Deploy to Vercel/Netlify or use *.purrkit.org subdomains
- **Complete Ownership** - You get the full source code, host it anywhere
- **Open Source** - Free forever, built by the community

We're starting with the website generator and CMS, but the vision extends to a full suite of tools including foster coordination, adoption application tracking, and a unified operations dashboard. Check out our [roadmap](./ROADMAP.md) to see where we're headed!

---

## 🏗️ Architecture

*As this is project is in development, the following architecture is subject to change as we iterate and refine our design.*

```
┌─────────────────────────────────────┐
│  Rescue's Generated Website         │
│  (Next.js - Static/ISR)             │
│  • Fetches from Payload REST API    │
│  • No database management needed    │
│  • Free hosting (Vercel/Netlify)    │
└──────────────┬──────────────────────┘
               │
               ↓ REST API
┌─────────────────────────────────────┐
│  Multi-Tenant Payload CMS           │
│  (Cloudflare Workers)               │
│  • Paid for by PurrKit              │
│  • Custom content types (Cats)      │
│  • User-friendly admin UI           │
└─────────────────────────────────────┘
```

**Key Design Decisions:**
- **Multi-tenant CMS architecture** - One Payload CMS instance serves all rescues, scaling to hundreds of organizations for $5/month currently.
- **Static sites with ISR** - Fast, free hosting with automatic content updates via Incremental Static Regeneration.
- **API-driven content** - Rescues can switch hosting providers anytime without losing data.
- **Minimal setup** - Simple form generates a complete, professional website that can be hosted for free on Vercel, Netlify or similar providers.

---

# 🚀 Current Status

**MVP Website Generator & CMS** under active development!

**What works now:**
- ✅ Beautiful, responsive form to collect rescue information
- ✅ Logo upload with automatic color extraction
- ✅ Dark mode support
- ✅ Customizable colors and branding
- ✅ Professional template design (homepage, cats grid, donation CTAs)

**In progress:**
- 🔄 Backend API for ZIP generation
- 🔄 Payload CMS multi-tenant configuration
   - 🔄 Cats collection schema (name, age, bio, photos, traits, status)
   - 🔄 API integration (template ↔ CMS)
   - 🔄 CMS API implementation in default template for automatic content updates

**Coming soon:**
- 📋 Deployment instructions (Vercel/Netlify)
- 📋 Video tutorial for rescues
- 📋 Beta testing with 2-3 rescues
- 📋 AI-generated content suggestions (OpenAI API)

**Target:** Working MVP by January 2025

---

## 🛠 Tech Stack

**Monorepo:** Turborepo with pnpm workspaces

**Frontend:**
- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

**Backend:**
- Express.js + TypeScript
- Payload CMS (multi-tenant)


**Deployment:**
- Cloudflare Workers (CMS hosting)
- Vercel/Netlify (generated sites)

---

## 📦 Getting Started

### Prerequisites

- Node.js 24
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tamarazuk/purrkit.git
cd purrkit

# Install dependencies
pnpm install

# Start the generator
pnpm --filter generator dev
# Visit http://localhost:3050

# Start the template (in another terminal)
pnpm --filter template dev
# Visit http://localhost:3051
```


### Monorepo Structure

```
purrkit/
├── apps/
│   ├── frontend/           # Portal frontend - currently just generator form (Next.js)
│   └── api/                # API server for portal - currently only handles website generation (Express)
│   └── (future: cms, marketing.js)
├── packages/
│   ├── ui/                 # Shared UI components (future)
│   ├── eslint-config/
│   └── typescript-config/
└── ROADMAP.md              # Detailed feature roadmap
```

---

## 🗺 Roadmap

Check out our [detailed roadmap](./ROADMAP.md) to see what's planned for PurrKit.

### Phase 1: MVP (January 2025)
- Minimal generator
- Single template design
- Cats collection in CMS
- Manual deployment with instructions
- Testing with Purrfect Paths Rescue

### Phase 2: Enhanced Features (Q1 2025)
- Multiple template options
- Foster management
- Adoption application forms
- AI-generated content suggestions
- Auto-deploy to Vercel

### Phase 3: Rescue Portal (Q2 2025)
- Volunteer management
- Donation integrations
- Newsletter signups
- Analytics dashboard
- Custom domain support

**Long-term vision:** If PurrKit helps 100+ rescues launch websites, that's thousands of cats getting visibility and finding homes. This could scale beyond cats to other animal rescues and nonprofit organizations facing similar challenges.

---

## 💡 Why I'm Building This

I founded [Purrfect Paths Rescue](https://purrfectpathsrescue.com) and quickly realized that most small, volunteer-run rescues face the same technical barriers: professional websites are expensive ($5k+), and existing website builders aren't designed for rescue-specific needs like managing adoptable cats, foster coordination, and adoption applications.

As a software engineer with 15+ years of experience, I wanted to use my skills to help underserved nonprofit organizations. PurrKit removes the technical barriers so rescues can focus on what matters: saving cats.

**This project combines:**
- My professional expertise (React, Next.js, TypeScript)
- My rescue experience (I know what rescues actually need)
- My values (technology should help communities, not create barriers)

---

## 🤝 Contributing

We welcome contributions! PurrKit is being built to serve the rescue community, and input from rescues and developers alike is invaluable.

**Ways to contribute:**
- **Use it** and provide feedback
- **Report bugs** via GitHub Issues
- **Suggest features** that would help rescues
- **Submit pull requests** (check open issues first)
- **Share with rescue organizations** who might benefit

**Current Status:** Project is in early MVP development. External contributions will be welcomed once the core architecture is stable (Q1 2025).

---

## 💜 Connect

**Portfolio:** [tamarazuk.dev](https://tamarazuk.dev)
**GitHub:** [@tamarazuk](https://github.com/tamarazuk)
**LinkedIn:** [linkedin.com/in/tamarazuk](https://linkedin.com/in/tamarazuk)

**Purrfect Paths Rescue:** [purrfectpathsrescue.com](https://purrfectpathsrescue.com)

---

Built with 💜 for the rescue community. Every cat deserves a chance, and every rescue deserves great tools.

---

**Questions?** Open an issue or start a discussion!
**Want to help?** Check out the [roadmap](./ROADMAP.md) and dive in!
