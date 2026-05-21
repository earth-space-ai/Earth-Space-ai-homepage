import type { Metadata } from "next";
import { people, ROLE_SECTIONS, ORG_NAME, type Person, type PersonRole } from "@/lib/skills";

export const metadata: Metadata = {
  title: `Teams · ${ORG_NAME}`,
  description:
    "People maintaining Earth-Space-Modeling-skills: scientific committee, executive committee, and scholars.",
};

function autoInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function PersonCard({ p }: { p: Person }) {
  const initials = p.initials ?? autoInitials(p.name);
  const portraitStyle: React.CSSProperties = {
    background:
      p.gradient ??
      "linear-gradient(135deg, #eaf0f7 0%, #b8cbe0 45%, #2f3c52 110%)",
    color: "var(--paper)",
  };

  const inner = (
    <>
      <div className="portrait" style={portraitStyle}>
        <span>{initials}</span>
      </div>
      <div className="person-body">
        <h4 className="nm">{p.name}</h4>
        <div className="ttl">{p.affiliation}</div>
        {p.note ? <p className="bio">{p.note}</p> : null}
      </div>
    </>
  );

  if (p.link) {
    return (
      <a
        className="person-card reveal"
        href={p.link}
        target="_blank"
        rel="noopener"
      >
        {inner}
      </a>
    );
  }
  return <div className="person-card reveal">{inner}</div>;
}

function PlaceholderCard({ label }: { label: string }) {
  return (
    <div
      className="person-card reveal"
      style={{ opacity: 0.55, cursor: "default" }}
    >
      <div
        className="portrait"
        style={{
          background:
            "linear-gradient(135deg,#f4f7fb 0%,#dfe8f3 45%,#b8cbe0 110%)",
          color: "var(--ink-4)",
        }}
      >
        <span>—</span>
      </div>
      <div className="person-body">
        <h4 className="nm">To be announced</h4>
        <div className="ttl">{label}</div>
        <p className="bio">Open seat.</p>
      </div>
    </div>
  );
}

export default function TeamsPage() {
  const byRole = new Map<PersonRole, Person[]>();
  for (const s of ROLE_SECTIONS) byRole.set(s.role, []);
  for (const p of people) byRole.get(p.role)?.push(p);

  const countBy = (r: PersonRole) => byRole.get(r)?.length ?? 0;
  const metaRow = ROLE_SECTIONS.map((s) => [s.label, String(countBy(s.role))] as const);

  return (
    <>
      <header className="page-hero full-hero standard-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{ORG_NAME}</a>
              <span className="sep">/</span>
              <span className="here">Teams</span>
            </div>
            <span className="page-idx reveal">§ The people</span>
            <h1 className="page-title reveal">Teams.</h1>
            <p className="page-thesis reveal">
              The people behind {ORG_NAME}.
            </p>
          </div>
          <div className="standard-hero-copy">
            <p className="page-sub reveal">
              {ORG_NAME} is a community of researchers, engineers, and
              open-source contributors building open Earth- and space-modeling
              skills for AI agents.
            </p>
            <div className="page-hero-meta reveal">
              {metaRow.map(([k, v]) => (
                <span key={k}>
                  {k}
                  <span className="v">{v}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {ROLE_SECTIONS.map((section, i) => {
        const rows = byRole.get(section.role) ?? [];
        const alt = i % 2 === 1;
        return (
          <section
            key={section.role}
            className={`sec${alt ? " alt" : ""}`}
            id={section.role}
          >
            <div className="sec-head-full">
              <span className="sec-eyebrow reveal">{section.eyebrow}</span>
              <h2 className="sec-heading reveal">{section.label}</h2>
              <p className="sec-lede reveal">{section.lede}</p>
            </div>
            <div className="people-grid">
              {rows.length === 0 ? (
                <PlaceholderCard label={section.label} />
              ) : (
                rows.map((p) => <PersonCard key={p.name} p={p} />)
              )}
            </div>
          </section>
        );
      })}

      <section className="coda">
        <h2 className="reveal">Don&rsquo;t see your name here?</h2>
        <p className="reveal">
          <a href="mailto:ktwu@utexas.edu">contact ktwu@utexas.edu</a>.
        </p>
      </section>
    </>
  );
}
