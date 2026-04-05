import Link from "next/link";

type SignupPageProps = {
  searchParams?: Promise<{
    plan?: string;
  }>;
};

const planContent = {
  pro: {
    title: "Pro Plan Checkout",
    buttonLabel: "Continue to Secure Checkout",
    description:
      "You selected the Runflow Pro plan at $3.99 monthly, with a $3 per month yearly billing option, unlimited workflows, priority execution, and included updates.",
    summary: "$3.99 monthly",
  },
  lifetime: {
    title: "Lifetime Access Checkout",
    buttonLabel: "Continue to Secure Checkout",
    description:
      "You selected lifetime access to Runflow with every feature unlocked and all future updates included.",
    summary: "$24.99 one-time payment",
  },
} as const;

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const params = await searchParams;
  const selectedPlan = params?.plan === "pro" ? "pro" : "lifetime";
  const content = planContent[selectedPlan];

  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-16">
      <div className="surface-card w-full max-w-xl p-8 sm:p-10">
        <p className="section-label">Runflow Checkout</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-ink">
          {content.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-[#5E594F]">
          {content.description}
        </p>
        <p className="mt-4 text-base leading-7 text-[#5E594F]">
          Choose your plan and continue to secure checkout.
        </p>
        <div className="mt-8 rounded-[28px] border border-line bg-[#FCFBF8] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-ink">
                {selectedPlan === "pro" ? "Runflow Pro" : "Runflow Lifetime"}
              </p>
              <p className="mt-1 text-sm text-[#6B655C]">
                {content.summary}
              </p>
            </div>
            <div className="rounded-full border border-[#E7DDBF] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8B7422]">
              Secure
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-[#6B655C]">
            Payments are processed securely at checkout.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:hello@runflow.app?subject=Runflow%20${selectedPlan === "pro" ? "Pro%20Plan" : "Lifetime%20Access"}`}
            className="primary-button"
          >
            {content.buttonLabel}
          </a>
          <Link href="/" className="secondary-button">
            Back to Home
          </Link>
          <a
            href="mailto:hello@runflow.app?subject=Runflow%20Checkout%20Help"
            className="secondary-button"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
