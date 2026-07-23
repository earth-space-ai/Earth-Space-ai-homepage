import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./skin.css";

export const metadata: Metadata = {
  title:
    "Earth and Space Agent Skills — Skill packages for Earth and space system models",
  description:
    "Curated, progressive-disclosure skill packages for Earth and space system models. Loadable by AI coding agents; readable by humans.",
  icons: {
    icon: [
      {
        url: "/logo/Earth-Space-Modeling-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo/Earth-Space-Modeling-logo.png",
    apple: "/logo/Earth-Space-Modeling-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const THEME_INIT = `(function(){document.documentElement.setAttribute('data-theme','light');})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        data-accent="icy_blue"
        data-type="grotesk_mono"
        data-motion="rich"
      >
        {children}
      </body>
    </html>
  );
}
