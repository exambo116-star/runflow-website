const plans = [
  {
    title: "Pro Plan",
    price: "$3.99",
    suffix: "/ month",
    cta: "Upgrade to Pro",
    href: "/signup?plan=pro",
    highlighted: false,
    features: [
      "Unlimited workflows",
      "Priority execution",
      "Updates included",
    ],
  },
  {
    title: "Lifetime Access",
    price: "$24.99",
    suffix: "",
    cta: "Get Lifetime",
    href: "/signup?plan=lifetime",
    highlighted: true,
    features: [
      "One-time payment",
      "All features unlocked",
      "Lifetime updates",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="section-label">Pricing</span>
        <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
          Simple pricing designed to convert without the noise.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[#5E594F]">
          Start with a flexible monthly plan or lock in lifetime access with a
          single payment.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={[
              "surface-card relative flex h-full flex-col p-8 sm:p-10",
              "hover:scale-[1.02]",
              plan.highlighted
                ? "border-[#E5D39A] bg-[#FFFDF8] shadow-[0_24px_60px_rgba(212,175,55,0.18)]"
                : "",
            ].join(" ")}
          >
            {plan.highlighted ? (
              <div className="absolute right-6 top-6 rounded-full border border-[#E6D39C] bg-[#FFF5D7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B7422]">
                Best Value
              </div>
            ) : null}

            <div className="max-w-sm">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                {plan.title}
              </h3>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl leading-none tracking-[-0.05em] text-ink sm:text-6xl">
                  {plan.price}
                </span>
                {plan.suffix ? (
                  <span className="pb-2 text-base font-medium text-[#6B655C]">
                    {plan.suffix}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#666055]">
                {plan.highlighted
                  ? "Own the full Runflow experience once and keep every future update."
                  : "Ideal for teams who want full automation power with a low monthly commitment."}
              </p>
              {!plan.highlighted ? (
                <p className="mt-3 inline-flex rounded-full border border-[#E7DDBF] bg-[#FFFBF1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8B7422]">
                  $3 / month on yearly billing
                </p>
              ) : null}
            </div>

            <div className="mt-8 h-px w-full bg-line" />

            <ul className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-ink">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FBF7EC] text-[#8B7422]">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4.5 10.5l3.2 3.2 7.8-7.9" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              className={[
                "mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-premium",
                plan.highlighted
                  ? "bg-gold text-ink shadow-[0_14px_34px_rgba(212,175,55,0.24)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(212,175,55,0.28)]"
                  : "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-[#DDD3BE] hover:shadow-card",
              ].join(" ")}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
