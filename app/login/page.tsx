import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-16">
      <div className="surface-card w-full max-w-md p-8 sm:p-10">
        <p className="section-label">Runflow Login</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-ink">
          Sign in flow coming soon
        </h1>
        <p className="mt-4 text-base leading-7 text-[#5E594F]">
          This landing page is ready for launch, and the authentication flow can
          be connected next.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="primary-button">
            Back to Home
          </Link>
          <a
            href="mailto:hello@runflow.app?subject=Runflow%20Access"
            className="secondary-button"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </main>
  );
}
