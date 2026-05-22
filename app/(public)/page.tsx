import type { Metadata } from "next";
import { OrbitalHero } from "@/components/OrbitalHero";
import { skillGroups, ORG_URL, ORG_NAME } from "@/lib/skills";

export const metadata: Metadata = {
  title: `${ORG_NAME} · Skill packages for Earth and space system models`,
  description:
    "Curated, progressive-disclosure skill packages for Earth and space system models. Designed to be loaded by AI coding agents and to serve as durable human-readable references.",
};

const totalSkills = skillGroups.reduce((n, g) => n + g.skills.length, 0);

export default function HomePage() {
  return (
    <>
      <header className="hero" id="top">
        <h1 className="hero-headline" id="headline">
          Democratizing Earth and Space Sciences Modeling<br />
          <span className="shy">
            with <span className="hero-accent">Artificial Intelligence</span>.
          </span>
        </h1>

        <div className="hero-body">
          <div className="hero-body-left">
            <p className="hero-sub" id="subhead">
              <span>
                <strong className="hero-accent">{ORG_NAME}</strong> is a
                collection of skill packages for Earth, planetary, and space
                science models.
              </span>
              <span className="hero-sub-line">
                Each repo is a self-contained, progressive-disclosure knowledge
                package: a <code>SKILL.md</code> routing hub plus{" "}
                <code>reference/</code> deep-dive docs covering install,
                compile, run, modify, debug, and contribute.
              </span>
              <span className="hero-sub-mission">
                Designed to be loaded as skills by AI coding agents
                (Claude Code, Codex, Cursor) and to serve as durable,
                human-readable references for researchers and developers.
              </span>
            </p>
            <div className="hero-ctas">
              <a className="btn primary" href="#skills">
                Browse skills <span className="arrow">→</span>
              </a>
              <a
                className="btn ghost"
                href={ORG_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub org ↗
              </a>
            </div>
          </div>

          <div className="hero-body-right">
            <OrbitalHero />
          </div>
        </div>
      </header>

      <section className="stakes why-stakes" id="about">
        <div className="stakes-inner">
          <div className="stakes-main">
            <span className="mono reveal">— What this is</span>
            <h2 className="stakes-title reveal">
              Procedural knowledge for Earth and space science, made loadable.
            </h2>
            <div className="stakes-body reveal">
              <p>
                Mechanistic Earth-system models (CESM, E3SM, WRF, MOM6,
                Noah-MP, CTSM, JULES, ...) carry decades of accumulated
                scientific judgment in their source trees, build systems, and
                debug folklore. Most of that knowledge lives in PDFs, mailing
                lists, and the heads of senior researchers.
              </p>
              <p>
                A <strong className="accent-strong">skill repo</strong> is a
                structured, progressive-disclosure package of that knowledge:
                a routing hub (<code>SKILL.md</code>) for top-level intent, and
                a <code>reference/</code> tree of deep-dive docs by topic
                (architecture, physics, workflow, debugging, ...). It is
                designed to be loaded into an agent's context on demand and to
                stay readable as a human reference.
              </p>
              <p>
                Each repo carries its own license. Each is maintained alongside
                the model it covers. We currently list{" "}
                <strong className="accent-strong">{totalSkills} skills and resources</strong>{" "}
                across Earth-system, atmosphere, land, ocean, sea-ice, solid
                Earth, and heliophysics domains.
              </p>
            </div>
          </div>
          <ul className="tenets stakes-tenets reveal">
            <li>
              <span className="k">— 01</span>
              <span className="v">
                <b>Progressive disclosure</b>
                Top-level routing first, deep dives on demand. Loads cheaply,
                expands precisely.
              </span>
            </li>
            <li>
              <span className="k">— 02</span>
              <span className="v">
                <b>Source-grounded</b>
                Every claim is anchored to a file, line, or doc in the upstream
                model — no folk knowledge without a citation.
              </span>
            </li>
            <li>
              <span className="k">— 03</span>
              <span className="v">
                <b>Agent-loadable</b>
                Designed for Claude Code, Codex, Cursor, and any agent that
                consumes structured procedural knowledge.
              </span>
            </li>
            <li>
              <span className="k">— 04</span>
              <span className="v">
                <b>Human-readable</b>
                A working reference for researchers and developers, not a
                machine-only artifact.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="stakes directions" id="skills">
        <div className="stakes-inner">
          <div className="stakes-main">
            <span className="mono reveal">— Models</span>
            <h2 className="stakes-title reveal">
              Skill repos and resources by domain.
            </h2>
            <div className="stakes-body directions-body reveal">
              <p>
                <strong>Status legend:</strong>{" "}
                <span className="status-dot complete" aria-hidden="true" /> deep-dive.{" "}
                <span className="status-dot scaffold" aria-hidden="true" /> scaffold,
                routing and source-grounded surface verified, operational depth
                being filled in.
              </p>
              {skillGroups.map((g) => (
                <div key={g.slug} id={g.slug} className="skill-group">
                  <h3 className="skill-group-title">{g.nm}</h3>
                  <ul className="skill-list">
                    {g.skills.map((s) => (
                      <li key={s.name}>
                        <span
                          className={`status-dot ${s.status}`}
                          aria-label={
                            s.status === "complete" ? "complete" : "scaffold"
                          }
                        />
                        <a
                          className="skill-link"
                          href={s.href}
                          target="_blank"
                          rel="noopener"
                        >
                          <strong>{s.name}</strong>
                        </a>
                        <span className="skill-desc">, {s.long}</span>
                        {s.maintainer ? (
                          <span className="skill-maintainer">
                            {" — "}
                            {s.maintainer.link ? (
                              <a
                                href={s.maintainer.link}
                                target="_blank"
                                rel="noopener"
                              >
                                {s.maintainer.name}
                              </a>
                            ) : (
                              s.maintainer.name
                            )}
                            {s.maintainer.github ? (
                              <>
                                {" "}
                                <a
                                  className="gh"
                                  href={`https://github.com/${s.maintainer.github}`}
                                  target="_blank"
                                  rel="noopener"
                                >
                                  @{s.maintainer.github}
                                </a>
                              </>
                            ) : null}
                          </span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <ul className="tenets stakes-tenets reveal">
            {skillGroups.map((g) => (
              <li key={g.slug}>
                <span className="k">— {g.idx}</span>
                <span className="v">
                  <b>{g.short}</b>
                  {g.dsc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="coda" id="contribute">
        <h2 className="reveal">Contribute.</h2>
        <p className="reveal coda-sub">
          Open an issue or PR on the relevant repo. For new model coverage that
          fits the scope (Earth, ocean, atmosphere, land, ice, space weather,
          planetary), open an issue on the org before starting a new repo.
        </p>
        <p className="reveal coda-sub">
          Contact:{" "}
          <a href="mailto:ktwu@utexas.edu">ktwu@utexas.edu</a>
        </p>
        <div className="ctas reveal">
          <a className="btn primary" href={ORG_URL} target="_blank" rel="noopener">
            Visit the GitHub org <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
