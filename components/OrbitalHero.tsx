"use client";

import { useEffect, useRef } from "react";

type Orbit = {
  id: string;
  rx: number;
  ry: number;
  period: number;
  phase: number;
};

const COMMON_TILT = -12;
const TILT_RAD = (COMMON_TILT * Math.PI) / 180;
const TILT_COS = Math.cos(TILT_RAD);
const TILT_SIN = Math.sin(TILT_RAD);

const ORBITS: Orbit[] = [
  { id: "lbl-01", rx: 270, ry: 78, period: 180, phase: 0.00 },
  { id: "lbl-02", rx: 220, ry: 64, period: 140, phase: 0.18 },
  { id: "lbl-03", rx: 170, ry: 50, period: 100, phase: 0.42 },
  { id: "lbl-04", rx: 120, ry: 35, period: 70,  phase: 0.66 },
  { id: "lbl-05", rx: 75,  ry: 22, period: 45,  phase: 0.85 },
];

const SVG_SIZE = 600;
const CX = 300;

export function OrbitalHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const motionOff =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.body.dataset.motion === "off";

    let lastTs = 0;
    let cachedWidth = container.getBoundingClientRect().width;

    const place = (orb: Orbit, t: number) => {
      const el = document.getElementById(orb.id);
      if (!el) return;
      const scale = cachedWidth / SVG_SIZE;
      const theta =
        orb.phase * 2 * Math.PI +
        (motionOff ? 0 : (t / orb.period) * 2 * Math.PI);
      const ex = orb.rx * Math.cos(theta);
      const ey = orb.ry * Math.sin(theta);
      const x = CX + (ex * TILT_COS - ey * TILT_SIN);
      const y = CX + (ex * TILT_SIN + ey * TILT_COS);
      (el as HTMLElement).style.left = x * scale + "px";
      (el as HTMLElement).style.top = y * scale + "px";
    };

    const placeAll = (ts: number) => ORBITS.forEach((o) => place(o, ts));

    const alignTop = () => {
      if (getComputedStyle(container).position !== "absolute") {
        container.style.top = "";
        return;
      }
      const hero = container.closest<HTMLElement>(".hero");
      const ctas = document.querySelector<HTMLElement>(".hero-ctas");
      if (!hero || !ctas) return;
      const heroTop = hero.getBoundingClientRect().top;
      const ctasTop = ctas.getBoundingClientRect().top;
      const w = container.getBoundingClientRect().width;
      const top = ctasTop - heroTop - w / 2;
      container.style.top = `${Math.max(0, top)}px`;
    };

    // Initial positioning.
    alignTop();
    placeAll(0);

    // Reflow when container width changes (viewport resize, breakpoint cross).
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? container.getBoundingClientRect().width;
      if (Math.abs(w - cachedWidth) > 0.5) {
        cachedWidth = w;
        placeAll(lastTs);
      }
      alignTop();
    });
    ro.observe(container);

    // Realign when the hero or the CTA row reflows (font load, text wrap).
    const heroEl = container.closest<HTMLElement>(".hero");
    const ctasEl = document.querySelector<HTMLElement>(".hero-ctas");
    const ro2 = new ResizeObserver(() => alignTop());
    if (heroEl) ro2.observe(heroEl);
    if (ctasEl) ro2.observe(ctasEl);

    let raf = 0;
    const tick = (ts: number) => {
      lastTs = ts / 1000;
      placeAll(lastTs);
      if (!motionOff) raf = requestAnimationFrame(tick);
    };
    if (!motionOff) raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      ro2.disconnect();
    };
  }, []);

  return (
    <div
      className="hero-orbital"
      ref={containerRef}
      aria-label="Earth-Space-Modeling-skills domains, orbital diagram"
    >
      <svg viewBox="0 0 600 600" className="orbital-svg" aria-hidden="true">
        <g className="orb-axes" stroke="currentColor" strokeWidth="0.6" opacity="0.18">
          <line x1="300" y1="40" x2="300" y2="560" />
          <line x1="40" y1="300" x2="560" y2="300" />
          <g>
            <line x1="295" y1="100" x2="305" y2="100" />
            <line x1="295" y1="200" x2="305" y2="200" />
            <line x1="295" y1="400" x2="305" y2="400" />
            <line x1="295" y1="500" x2="305" y2="500" />
            <line x1="100" y1="295" x2="100" y2="305" />
            <line x1="200" y1="295" x2="200" y2="305" />
            <line x1="400" y1="295" x2="400" y2="305" />
            <line x1="500" y1="295" x2="500" y2="305" />
          </g>
        </g>
        <g className="orb-system" transform="rotate(-12 300 300)">
          <ellipse cx="300" cy="300" rx="270" ry="78" className="orbit-path" />
          <ellipse cx="300" cy="300" rx="220" ry="64" className="orbit-path" />
          <ellipse cx="300" cy="300" rx="170" ry="50" className="orbit-path accent" />
          <ellipse cx="300" cy="300" rx="120" ry="35" className="orbit-path" />
          <ellipse cx="300" cy="300" rx="75"  ry="22" className="orbit-path" />
        </g>
        <g className="orb-core">
          <circle cx="300" cy="300" r="28" fill="var(--paper)" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="3" fill="currentColor" />
          <text x="300" y="346" textAnchor="middle" className="core-label">
            SCIENCE · INTELLIGENCE
          </text>
        </g>
      </svg>
      <a className="orb-label" id="lbl-01" href="/knowledge">
        <span className="lbl-idx">§ 01</span>
        <span className="lbl-nm">Knowledge</span>
      </a>
      <a className="orb-label" id="lbl-02" href="/models">
        <span className="lbl-idx">§ 02</span>
        <span className="lbl-nm">Models</span>
      </a>
      <a className="orb-label" id="lbl-03" href="/agent">
        <span className="lbl-idx">§ 03</span>
        <span className="lbl-nm">Agent</span>
      </a>
      <a className="orb-label" id="lbl-04" href="/evaluation">
        <span className="lbl-idx">§ 04</span>
        <span className="lbl-nm">Evaluation</span>
      </a>
      <a className="orb-label" id="lbl-05" href="/discovery">
        <span className="lbl-idx">§ 05</span>
        <span className="lbl-nm">Discovery</span>
      </a>
    </div>
  );
}
