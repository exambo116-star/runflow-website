import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Runflow | Automate Your Workflow",
  description:
    "Runflow is a premium Chrome extension that automates repetitive tasks and saves hours every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
