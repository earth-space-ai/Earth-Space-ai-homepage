"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    // Only enter the "hide-then-animate-in" mode once JS has mounted.
    // Until this line runs, .reveal elements stay visible (see globals.css).
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Safety net: if the observer somehow fails to fire (CDN defers JS,
    // Cloudflare Rocket Loader, etc.), force-show everything after 1.5s so
    // the page is never permanently blank.
    const fallback = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in)")
        .forEach((el) => el.classList.add("in"));
    }, 1500);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return null;
}
