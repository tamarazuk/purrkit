import { Paintbrush2, Rocket, Table2 } from "lucide-react";

const steps = [
  {
    title: "Bring your cat info",
    description:
      "Enter your cat details manually for now. Bulk CSV import is on our roadmap.",
    icon: <Table2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Customize your site",
    description:
      "Pick a theme, upload your logo, and share your rescue's unique story.",
    icon: <Paintbrush2 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Publish and share",
    description:
      "Your site goes live instantly. Start sharing profiles and accepting applications.",
    icon: <Rocket className="h-10 w-10 text-primary" />,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-base-200 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-base-content lg:text-4xl">
            How it works
          </h2>
          <p className="text-base-content/70">
            Three simple steps to get your rescue online.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="absolute top-12 left-[16%] right-[16%] hidden h-0.5 bg-base-300 md:block" />
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-base-200 bg-base-100 shadow-lg">
                <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-content shadow-md">
                  {idx + 1}
                </span>
                {s.icon}
              </div>
              <div className="mt-2">
                <h3 className="mb-2 text-xl font-bold text-base-content">
                  {s.title}
                </h3>
                <p className="px-4 text-sm text-base-content/70">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
