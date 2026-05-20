import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Earth-Space-Modeling-skills — Skill packages for Earth and space system models",
  description:
    "Curated, progressive-disclosure skill packages for Earth and space system models. Loadable by AI coding agents; readable by humans.",
  icons: {
    icon: [
      {
        url: "/logo/logo_black.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
    shortcut: "/logo/logo_black.png",
    apple: "/logo/logo_black.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const THEME_INIT = `(function(){try{var K='si-theme',s=localStorage.getItem(K),p=window.matchMedia('(prefers-color-scheme: dark)').matches,i=s||(p?'dark':'light');document.documentElement.setAttribute('data-theme',i);}catch(e){}})();`;

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
