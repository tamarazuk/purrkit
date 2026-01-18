import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { useCreateWaitlistEntry } from "@/hooks/use-waitlist";
import {
  Cat,
  Globe,
  Database,
  HeartHandshake,
  Wrench,
  Sparkles,
  ArrowRight,
  Github,
  CheckCircle2,
  HelpCircle,
  Code,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const { mutate: joinWaitlist, isPending } = useCreateWaitlistEntry();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    joinWaitlist(
      { email },
      {
        onSuccess: () => setEmail(""),
      }
    );
  };

  const features = [
    {
      icon: Globe,
      title: "Guided Website Generator",
      description:
        "Build a beautiful adoption website in minutes. Answer a few questions and you’re ready to publish. No coding, no fuss.",
    },
    {
      icon: Database,
      title: "The Cats Collection",
      description:
        "Keep your cat profiles organized in one place. Photos, bios, medical notes, food info, and personality details stay easy to find and update.",
      comingSoon: true,
    },
    {
      icon: HeartHandshake,
      title: "Adoption Workflow",
      description:
        "Make applications easier to manage. Collect forms, review applicants, and keep decisions and notes together as you go.",
      comingSoon: true,
    },
    {
      icon: Wrench,
      title: "Lightweight Ops",
      description:
        "Simple tools for the work behind the scenes. Stay organized without turning your rescue into a spreadsheet project.",
      comingSoon: true,
    },
    {
      icon: Sparkles,
      title: "Draft Bios",
      description:
        "Need help writing a bio? Get a quick first draft you can tweak in your own voice anytime.",
      comingSoon: true,
    },
    {
      icon: Code,
      title: "Integrations",
      description:
        "Connect PurrKit to your existing tools. Use the API to sync data with your systems and services like Petfinder.",
      comingSoon: true,
    },
  ];

  const faqs = [
    {
      q: "Is PurrKit free?",
      a: "Yes. PurrKit is open source and free to use, whether you’re a rescue, a foster network, or just helping cats in your community. In the future, we may offer an optional hosted plan to cover infrastructure, but self-hosting will stay free.",
    },
    {
      q: "Can I import my data from a spreadsheet?",
      a: "That’s the plan. We’re building simple import tools so you can bring in cat profiles from Excel/Google Sheets without retyping everything. For the MVP, you can start by adding cats manually.",
    },
    {
      q: "Do I need technical skills?",
      a: "Nope. PurrKit is designed for busy volunteers. You shouldn’t need to touch code, servers, or databases to get a site live and keep it updated.",
    },
    {
      q: "Is it open source?",
      a: "Yes. The code is public on GitHub. You can contribute, fork it, or self-host it.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans">
      <Helmet>
        <title>PurrKit — Websites & ops for cat rescues</title>
        <meta
          name="description"
          content="Create a beautiful, mobile-friendly adoption site in minutes. PurrKit gives cat rescues a modern website and lightweight tools to manage their cats and workflows."
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="PurrKit — Websites & ops for cat rescues"
        />
        <meta
          property="og:description"
          content="Create a beautiful, mobile-friendly adoption site in minutes. PurrKit gives cat rescues a modern website and lightweight tools to manage their cats and workflows."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/70 text-sm font-medium mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            In early access
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Websites & ops for cat rescues.
            <span className="relative inline-flex ml-3">
              <span className="relative z-10 text-secondary">Simplified.</span>
              <span className="absolute left-0 right-0 -bottom-1.5 h-3 rounded-full bg-secondary/20" />
            </span>
          </h1>

          <p className="text-xl text-base-content/75 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Launch a beautiful website, then keep cats, forms, and updates
            organized in one friendly portal. No tech skills required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a
              href="#waitlist"
              className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
            >
              Join the Waitlist
            </a>
            <a
              href="https://github.com/purrkit"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-lg rounded-full px-8 hover:bg-base-content/5"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>

          {/* Hero Image / Dashboard Preview */}
          <div className="mt-24 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            {/* Unsplash image of a cat as a placeholder for UI mockup if needed, but styling a div as a mockup is better */}
            <div className="rounded-2xl bg-base-200/70 p-2 md:p-3 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] border border-base-content/5">
              <div className="rounded-xl overflow-hidden bg-base-100/90 aspect-video relative flex items-center justify-center border border-base-content/5">
                <div className="text-center p-8">
                  <Cat className="w-20 h-20 text-base-300 mx-auto mb-4" />
                  <p className="text-base-content/40 font-display text-lg">
                    Detailed Dashboard Mockup Coming Soon
                  </p>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-base-200/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Tools for the work behind the scenes
            </h2>
            <p className="text-xl text-base-content/70">
              Tech shouldn't be the hard part. PurrKit keeps your website and
              day-to-day organized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">
            How PurrKit helps
          </h2>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Import your data",
                  desc: "Connect your spreadsheets or enter cat profiles manually.",
                },
                {
                  step: "02",
                  title: "Customize your site",
                  desc: "Pick a theme, add your logo, and tell your rescue's story.",
                },
                {
                  step: "03",
                  title: "Start adopting",
                  desc: "Share your new link and accept applications immediately.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center bg-base-100 p-6 md:bg-transparent"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold font-display flex items-center justify-center mb-6 shadow-lg shadow-primary/30 z-10">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base-content/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN SOURCE */}
      <section
        id="open-source"
        className="py-24 bg-neutral text-neutral-content relative overflow-hidden"
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Built by the community, for the community
            </h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Rescue work is hard enough. PurrKit is built in the open by a
              community of cat lovers and makers who want better tools for the
              teams doing lifesaving work. We'd love to have you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/purrkit"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-lg rounded-full font-bold"
              >
                <Github className="w-5 h-5 mr-2" />
                Contribute
              </a>
              <a
                href="#"
                className="btn btn-outline btn-lg rounded-full text-neutral-content border-neutral-content/30 hover:bg-neutral-content/10"
              >
                Sponsor PurrKit
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Code snippet decoration */}
            <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-auto text-xs text-gray-400 font-mono">
                  PurrKit.tsx
                </div>
              </div>
              <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed">
                <p>
                  <span className="text-purple-400">export</span>{" "}
                  <span className="text-blue-400">function</span>{" "}
                  <span className="text-yellow-300">SaveLives</span>() {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span>{" "}
                  {"{ adoptableCats }"} ={" "}
                  <span className="text-blue-400">useRescueData</span>();
                </p>
                <p className="pl-4">&nbsp;</p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> (
                </p>
                <p className="pl-8">
                  &lt;<span className="text-green-400">AdoptionPortal</span>
                </p>
                <p className="pl-12">
                  <span className="text-blue-300">cats</span>={"{"}
                  adoptableCats{"}"}
                </p>
                <p className="pl-12">
                  <span className="text-blue-300">mission</span>="Helping cats
                  find loving homes"
                </p>
                <p className="pl-8">/&gt;</p>
                <p className="pl-4">);</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">
            Frequently Asked Meows
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-200 rounded-2xl"
              >
                <input
                  type="radio"
                  name="my-accordion-3"
                  defaultChecked={i === 0}
                />
                <div className="collapse-title text-xl font-medium font-display pr-12">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70 pb-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="rounded-3xl bg-base-200/80 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.55)] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="mb-6 flex">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Cat className="w-7 h-7" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                  Want a rescue website you can actually keep updated?
                </h2>
                <p className="text-lg text-base-content/70">
                  PurrKit helps you launch a beautiful site in minutes, then
                  manage cats and updates in one friendly portal. Join the list
                  for early access.
                </p>
              </div>

              <div className="w-full">
                <form onSubmit={handleJoin} className="space-y-3">
                  <div className="join w-full">
                    <label className="join-item input input-lg input-bordered flex items-center gap-2 flex-1 focus-within:input-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5 text-base-content/50"
                        aria-hidden="true"
                      >
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                      <input
                        type="email"
                        placeholder="rescue@example.com"
                        className="grow bg-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="btn btn-primary btn-lg join-item px-6 disabled:opacity-50"
                    >
                      {isPending ? "Joining..." : "Join Waitlist"}
                      {!isPending && <ArrowRight className="w-5 h-5 ml-2" />}
                    </button>
                  </div>
                  <p className="text-sm text-base-content/50">
                    No spam. Just updates.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
