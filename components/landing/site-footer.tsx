export function SiteFooter() {
  return (
    <footer id="contact" className="section-shell pb-10 pt-4">
      <div className="flex flex-col gap-4 border-t border-line py-8 text-sm text-[#666055] sm:flex-row sm:items-center sm:justify-between">
        <a
          href="mailto:hello@runflow.app"
          className="transition-colors duration-300 ease-premium hover:text-ink"
        >
          hello@runflow.app
        </a>
        <p>© 2026 Runflow. All rights reserved.</p>
      </div>
    </footer>
  );
}
