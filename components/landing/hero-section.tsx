import { RunflowLogo } from "@/components/landing/runflow-logo";

const stars = [
  { left: "8%", top: "12%", size: 3, delay: "0s", duration: "4.8s" },
  { left: "18%", top: "26%", size: 2, delay: "0.8s", duration: "5.2s" },
  { left: "28%", top: "10%", size: 4, delay: "1.4s", duration: "4.6s" },
  { left: "34%", top: "34%", size: 2, delay: "2.2s", duration: "6.2s" },
  { left: "46%", top: "18%", size: 3, delay: "1.1s", duration: "4.9s" },
  { left: "58%", top: "8%", size: 2, delay: "2.9s", duration: "5.7s" },
  { left: "64%", top: "28%", size: 4, delay: "0.3s", duration: "6.1s" },
  { left: "76%", top: "14%", size: 2, delay: "1.7s", duration: "5.4s" },
  { left: "84%", top: "32%", size: 3, delay: "2.4s", duration: "5s" },
  { left: "10%", top: "68%", size: 2, delay: "1.6s", duration: "5.6s" },
  { left: "24%", top: "78%", size: 3, delay: "0.5s", duration: "6s" },
  { left: "40%", top: "66%", size: 2, delay: "2.1s", duration: "5.8s" },
  { left: "54%", top: "82%", size: 4, delay: "1.3s", duration: "4.7s" },
  { left: "70%", top: "72%", size: 2, delay: "2.7s", duration: "6.3s" },
  { left: "86%", top: "84%", size: 3, delay: "0.9s", duration: "5.1s" },
];

function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="surface-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-line px-6 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8D8A2]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E6E0D3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D7D0C3]" />
          <div className="ml-3 rounded-full border border-line bg-[#FCFBF8] px-4 py-1 text-xs font-medium text-[#726C63]">
            runflow.app / dashboard
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-[1.05fr,0.95fr] sm:p-6">
          <div className="rounded-[24px] border border-line bg-[#FCFBF8] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#8A8378]">
                  Runflow
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  Automation Queue
                </h3>
              </div>
              <div className="rounded-full border border-[#E5D4A4] bg-white px-3 py-1 text-xs font-semibold text-[#7E6A2B]">
                Active
              </div>
            </div>

            <div className="space-y-3">
              {[
                ["Capture leads", "Running now"],
                ["Fill CRM records", "Queued"],
                ["Send follow-up", "In 05 min"],
              ].map(([title, status]) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-2xl border border-line bg-white px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-xs text-[#7A746A]">{status}</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] border border-line bg-white p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8A8378]">
                Time Saved
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-5xl leading-none text-ink">
                  4.2h
                </span>
                <span className="pb-1 text-sm font-medium text-[#7A746A]">
                  today
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["12", "Tasks done"],
                  ["96%", "Success rate"],
                  ["8", "Runs today"],
                  ["42", "Clicks saved"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-line bg-[#FBF8F1] px-4 py-4"
                  >
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-[#7A746A]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#E4D8BC] bg-[#FFFDF8] p-5 shadow-[0_18px_40px_rgba(212,175,55,0.15)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8A8378]">
                    Smart Execution
                  </p>
                  <p className="mt-2 text-base font-semibold text-ink">
                    Trigger workflows from any tab, instantly.
                  </p>
                </div>
                <div className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  Live
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-line bg-white p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-ink">Chrome Extension</span>
                  <span className="text-[#7A746A]">Connected</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-[#F2EEE6]">
                  <div className="h-2 w-[78%] rounded-full bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 hidden rounded-[24px] border border-line bg-white px-5 py-4 shadow-card sm:block">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8A8378]">
          Precision
        </p>
        <p className="mt-2 text-sm font-semibold text-ink">
          Repetitive work handled before lunch.
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="section-shell pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <div className="relative max-w-2xl px-1 py-4 sm:px-0 sm:py-6">
          <div className="starfield pointer-events-none" aria-hidden="true">
            {stars.map((star) => (
              <span
                key={`${star.left}-${star.top}`}
                className="star"
                style={{
                  left: star.left,
                  top: star.top,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <RunflowLogo size={52} className="border-[#363B46] bg-white" />
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Chrome Extension for Focused Teams
              </span>
            </div>
            <h1 className="mt-8 max-w-[12ch] text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Automate Your{" "}
              <span className="font-display font-medium italic text-[#F3E5B3]">
                Workflow.
              </span>{" "}
              Save Hours Every Day.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white sm:text-xl">
              Runflow is a powerful Chrome extension that automates repetitive
              tasks and boosts productivity.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="primary-button">
                Get Started
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/16"
              >
                View Pricing
              </a>
            </div>
            <div className="mt-10 grid max-w-lg gap-4 rounded-[28px] border border-white/16 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:grid-cols-3">
              {[
                ["2 min", "average setup"],
                ["4.2 hours", "saved every day"],
                ["1 click", "to launch workflows"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="text-lg font-semibold tracking-[-0.04em] text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-white">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#14171C] px-4 py-3 text-sm text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F3E5B3] shadow-[0_0_12px_rgba(243,229,179,0.7)]" />
              <span className="text-white">
                Live star automation mode enabled
              </span>
            </div>
          </div>
        </div>

        <BrowserMockup />
      </div>
    </section>
  );
}
