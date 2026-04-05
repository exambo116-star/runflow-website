import Link from "next/link";

type SignupPageProps = {
  searchParams?: Promise<{
    plan?: string;
  }>;
};

const planContent = {
  pro: {
    title: "Upgrade to Pro",
    description:
      "You selected the Runflow Pro plan at $3.99 monthly, with a $3 per month yearly billing option, unlimited workflows, priority execution, and included updates.",
  },
  lifetime: {
    title: "Get Lifetime Access",
    description:
      "You selected lifetime access to Runflow with every feature unlocked and all future updates included.",
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
          This polished landing flow is ready, and the final payment integration
          can connect here next.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="primary-button">
            Back to Home
          </Link>
          <a
            href={`mailto:hello@runflow.app?subject=Runflow%20${selectedPlan === "pro" ? "Pro%20Plan" : "Lifetime%20Access"}`}
            className="secondary-button"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </main>
  );
}
