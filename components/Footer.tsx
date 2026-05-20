"use client";

import { useEffect, useState } from "react";
import { skillGroups, ORG_URL, ORG_NAME } from "@/lib/skills";

function formatUtcClock(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `SYS · ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(
    d.getUTCSeconds()
  )} UTC`;
}

export function Footer() {
  const [clock, setClock] = useState<string>("— · : · —");

  useEffect(() => {
    const tick = () => setClock(formatUtcClock(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <footer>
        <div>
          <div className="brand">
            <span className="footer-logo" aria-hidden="true">
              <img className="theme-logo theme-logo-light" src="/logo/logo_black.png" alt="" />
              <img className="theme-logo theme-logo-dark" src="/logo/logo_white.png" alt="" />
            </span>
            {ORG_NAME}
          </div>
          <p className="colophon">
            Procedural-knowledge skills for Earth, planetary, and space
            sciences. Models, observations, and data archives, packaged for AI
            agents and human researchers.
          </p>
        </div>
        <div>
          <span className="mono col-title">Domains</span>
          <ul>
            {skillGroups.map((g) => (
              <li key={g.slug}>
                <a href="#skills">{g.short}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="mono col-title">Community</span>
          <ul>
            <li>
              <a href={ORG_URL} target="_blank" rel="noopener">
                GitHub org ↗
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#partners">Partner skills</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-bar">
        <span className="mono">© 2026 · {ORG_NAME} · Open-source skills</span>
        <span className="mono" id="sysclock">
          {clock}
        </span>
      </div>
    </>
  );
}
