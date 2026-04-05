export function CallToAction() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="surface-card mx-auto max-w-5xl overflow-hidden p-8 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="section-label">Ready to Start</span>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Start automating your workflow today
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5E594F]">
              Join people using Runflow to reclaim time, reduce repetitive work,
              and keep their browser workflows moving.
            </p>
          </div>
          <a href="#pricing" className="primary-button shrink-0">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
