# PurrKit

> **Empowering cat rescue organizations with professional tools — no technical expertise required.**

PurrKit is an open-source platform designed to help cat rescue organizations create professional websites and manage their operations efficiently, without expensive software subscriptions or technical knowledge.

## 🎯 What is PurrKit?

Cat rescues do incredible work, but many struggle with basic digital infrastructure. PurrKit aims to solve this by providing:

- **Website Generator** - Create a professional, customized website in minutes
- **No Code Required** - Fill out a simple form, download your site
- **Complete Ownership** - You get the full source code, host it anywhere
- **Open Source** - Free forever, built by the community

We're starting with the website generator, but the vision extends to a full suite of tools including content management, cat tracking, foster coordination, adoption application tracking, and a unified operations dashboard. Check out our [roadmap](./ROADMAP.md) to see where we're headed!

## 🚀 Current Status

**MVP Website Generator** is under active development!

**What works now:**
- ✅ Beautiful, responsive form to collect rescue information
- ✅ Logo upload with automatic color extraction
- ✅ Dark mode support
- ✅ Customizable colors and branding

**Coming soon:**
- 🚧 AI-powered website generation using free AI APIs
- 🚧 Downloadable Next.js website as a zip file
- 🚧 Custom content generation based on your rescue's story

## 🛠 Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Monorepo:** Turborepo
- **UI Components:** shadcn/ui
- **AI:** Vercel's AI SDK (using various free/affordable AI APIs)
- **Package Manager:** pnpm

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tamarazuk/purrkit.git
cd purrkit

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at `http://localhost:3050`

### Monorepo Structure

```
purrkit/
├── apps/
│   ├── frontend/          # Main PurrKit Generator application
│   └── backend/      # API server for website generation
├── packages/
│   ├── ui/           # Shared UI components
│   ├── eslint-config/
│   └── typescript-config/
└── ROADMAP.md        # Detailed feature roadmap
```

## 🗺 Roadmap

Check out our [detailed roadmap](./ROADMAP.md) to see what's planned for PurrKit.

**Short-term goals:**
- Complete MVP website generator
- Add deployment options (Vercel, Netlify)
- Build template variations
- SEO and accessibility improvements

**Long-term vision:**
- Content management system
- Cat tracking and management
- Foster and adopter coordination tools
- Unified rescue operations dashboard

## 🤝 Contributing

We welcome contributions! PurrKit is being built to serve the rescue community, and input from rescues and developers alike is invaluable.

**Ways to contribute:**
- **Use it** and provide feedback
- **Report bugs** via GitHub Issues
- **Suggest features** that would help rescues
- **Submit pull requests** (check open issues first)
- **Share with rescue organizations** who might benefit

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details

## 💜 Acknowledgments

Built with love for the rescue community. Every cat deserves a chance, and every rescue deserves great tools.

---

**Questions?** Open an issue or start a discussion!
**Want to help?** Check out the [roadmap](./ROADMAP.md) and dive in!
