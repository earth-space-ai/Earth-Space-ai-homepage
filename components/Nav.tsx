"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { skillGroups, ORG_URL, ORG_NAME } from "@/lib/skills";

export function Nav() {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const on = () => nav.classList.toggle("scrolled", window.scrollY > 4);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const KEY = "si-theme";
    const onClick = () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* ignore */
      }
    };
    const btns = document.querySelectorAll<HTMLButtonElement>(
      "[data-theme-toggle]"
    );
    btns.forEach((b) => b.addEventListener("click", onClick));
    return () => btns.forEach((b) => b.removeEventListener("click", onClick));
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    return () => {
      html.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [menuOpen]);

  const brandHref = isHome ? "#top" : "/";
  const aboutHref = isHome ? "#about" : "/#about";
  const skillsHref = isHome ? "#skills" : "/#skills";
  const partnersHref = isHome ? "#partners" : "/#partners";
  const contributeHref = isHome ? "#contribute" : "/#contribute";

  return (
    <>
      <nav className="nav" id="nav">
        <a className="nav-brand" href={brandHref}>
          <span className="logo" aria-hidden="true">
            <img className="theme-logo theme-logo-light" src="/logo/logo_black.png" alt="" />
            <img className="theme-logo theme-logo-dark" src="/logo/logo_white.png" alt="" />
          </span>
          <span>{ORG_NAME}</span>
        </a>

        <div className="nav-links">
          <a href={aboutHref}>About</a>
          <div className="nav-dd">
            <a href={skillsHref} aria-haspopup="true">
              Skills{" "}
              <svg className="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4 L5 7 L8 4" />
              </svg>
            </a>
            <div className="nav-dd-panel" role="menu">
              {skillGroups.map((g) => (
                <a
                  key={g.slug}
                  className="nav-dd-item"
                  href={isHome ? `#skills` : `/#skills`}
                >
                  <span className="idx">{g.idx}</span>
                  <span className="nm">{g.nm}</span>
                  <span className="dsc">{g.dsc}</span>
                </a>
              ))}
            </div>
          </div>
          <a href={partnersHref}>Partners</a>
          <a href={contributeHref}>Contribute</a>
        </div>

        <div className="nav-ctas">
          <button className="theme-toggle" type="button" aria-label="Toggle theme" data-theme-toggle>
            <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </button>
          <a className="btn ghost sm" href={ORG_URL} target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56 4.56-1.53 7.85-5.84 7.85-10.91C23.5 5.73 18.27.5 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-panel"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <path d="M6 6 L18 18" />
                <path d="M18 6 L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7 H20" />
                <path d="M4 12 H20" />
                <path d="M4 17 H20" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="nav-mobile-panel"
        ref={panelRef}
        className={`nav-mobile${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <a className="nav-mobile-link" href={aboutHref}>About</a>
        <a className="nav-mobile-link" href={skillsHref}>Skills</a>
        <a className="nav-mobile-link" href={partnersHref}>Partners</a>
        <a className="nav-mobile-link" href={contributeHref}>Contribute</a>

        <div className="nav-mobile-footer">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle theme"
            data-theme-toggle
          >
            <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          </button>
          <a className="btn ghost sm" href={ORG_URL} target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
