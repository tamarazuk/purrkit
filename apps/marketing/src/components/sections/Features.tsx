import {
  FileText,
  Globe,
  LayoutGrid,
  PawPrint,
  Plug,
  UserRoundCheck,
} from "lucide-react";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  status: "available" | "coming";
  icon: ReactNode;
  iconClassName: string;
};

const features: Feature[] = [
  {
    title: "Guided Website Generator",
    description:
      "Build a beautiful adoption website in minutes. Answer a few questions and you’re ready to publish. No coding, no fuss.",
    status: "available",
    icon: <Globe className="h-5 w-5" />,
    iconClassName: "bg-primary/10 text-primary",
  },
  {
    title: "The Cats Collection",
    description:
      "Keep your cat profiles organized in one place. Photos, bios, medical notes, food info, and personality details stay easy to find.",
    status: "coming",
    icon: <PawPrint className="h-5 w-5" />,
    iconClassName: "bg-secondary/10 text-secondary",
  },
  {
    title: "Adoption Workflow",
    description:
      "Make applications easier to manage. Collect forms, review applicants, and keep decisions and notes together as you go.",
    status: "coming",
    icon: <UserRoundCheck className="h-5 w-5" />,
    iconClassName: "bg-info/10 text-info",
  },
  {
    title: "Lightweight Ops",
    description:
      "Simple tools for the work behind the scenes. Stay organized without turning your rescue into a spreadsheet project.",
    status: "coming",
    icon: <LayoutGrid className="h-5 w-5" />,
    iconClassName: "bg-success/10 text-success",
  },
  {
    title: "Draft Bios",
    description:
      "Need help writing a bio? Get a quick first draft you can tweak in your own voice anytime.",
    status: "coming",
    icon: <FileText className="h-5 w-5" />,
    iconClassName: "bg-warning/10 text-warning",
  },
  {
    title: "Integrations",
    description:
      "Connect PurrKit to your existing tools. Use the API to sync data with your systems and services like Petfinder.",
    status: "coming",
    icon: <Plug className="h-5 w-5" />,
    iconClassName: "bg-secondary/10 text-secondary",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-base-content lg:text-4xl">
            Tools for modern rescues
          </h2>
          <p className="mx-auto max-w-2xl text-base-content/70">
            Everything you need to manage your rescue operations, from public
            facing websites to internal data management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="card border border-base-200 bg-base-100 shadow-md"
            >
              <div className="card-body">
                <div className="mb-2 flex items-start justify-between">
                  <div className={`w-fit rounded-lg p-3 ${f.iconClassName}`}>
                    {f.icon}
                  </div>
                  {f.status === "available" ? (
                    <span className="badge badge-primary badge-outline text-xs font-bold">
                      Available Now
                    </span>
                  ) : (
                    <span className="badge badge-ghost text-xs text-base-content/50">
                      Coming soon
                    </span>
                  )}
                </div>
                <h3 className="card-title text-lg text-base-content">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-base-content/70">
                  {f.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
