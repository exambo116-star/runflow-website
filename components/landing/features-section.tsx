import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Automate Tasks",
    description:
      "Turn multi-step browser routines into one polished workflow your team can run on demand.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 12h14" />
        <path d="M13 5l6 7-6 7" />
      </svg>
    ),
  },
  {
    title: "Smart Execution",
    description:
      "Runflow detects the right moment to trigger actions so repetitive work keeps moving without babysitting.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v4" />
        <path d="M12 17v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M3 12h4" />
        <path d="M17 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Save Time",
    description:
      "Eliminate the manual clicks that slow down outreach, operations, and internal process work.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Stay In Control",
    description:
      "Review every active workflow, pause instantly, and keep a clear picture of what is running across tabs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M9 10v4" />
        <path d="M15 10v4" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-label">Features</span>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
          Built to remove friction from everyday browser work.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#5E594F]">
          A focused feature set designed for speed, reliability, and that
          satisfying feeling of work finishing itself.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="surface-card group p-7 hover:-translate-y-1.5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DDBF] bg-[#FFFBF1] text-[#8B7422] transition-transform duration-300 ease-premium group-hover:scale-105">
              {feature.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-ink">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#666055]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
