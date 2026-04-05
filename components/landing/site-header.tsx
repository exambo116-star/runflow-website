"use client";

import { RunflowLogo } from "@/components/landing/runflow-logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="section-shell pt-4">
        <div
          className={[
            "rounded-[28px] px-4 py-3 transition-all duration-300 ease-premium sm:px-6 md:rounded-full",
            scrolled
              ? "border border-line bg-[rgba(250,248,244,0.92)] shadow-soft backdrop-blur"
              : "border border-transparent bg-transparent",
          ].join(" ")}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" aria-label="Runflow home" className="shrink-0">
                <RunflowLogo className={scrolled ? "" : "border-[#363B46] bg-white"} />
              </Link>

              <div className="flex items-center gap-2 sm:gap-3 md:hidden">
                <a href="#pricing" className="primary-button px-4 py-2.5 sm:px-5">
                  Get Started
                </a>
              </div>
            </div>

            <nav
              className={[
                "flex items-center justify-center gap-5 pt-3 md:border-0 md:pt-0",
                scrolled ? "border-t border-line/80" : "border-t border-white/10",
              ].join(" ")}
            >
              <a
                href="#features"
                className={scrolled ? "nav-link" : "text-sm font-medium text-white transition-colors duration-300 ease-premium hover:text-white"}
              >
                Features
              </a>
              <a
                href="#pricing"
                className={scrolled ? "nav-link" : "text-sm font-medium text-white transition-colors duration-300 ease-premium hover:text-white"}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className={scrolled ? "nav-link" : "text-sm font-medium text-white transition-colors duration-300 ease-premium hover:text-white"}
              >
                Contact
              </a>
            </nav>

            <div className="hidden items-center gap-2 sm:gap-3 md:flex">
              <a href="#pricing" className="primary-button px-4 py-2.5 sm:px-5">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
