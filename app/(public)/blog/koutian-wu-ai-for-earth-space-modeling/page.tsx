import type { Metadata } from "next";
import { ORG_NAME, SITE_TITLE } from "@/lib/skills";

const articlePath = "/blog/koutian-wu-ai-for-earth-space-modeling";

const focusCards = [
  {
    title: "Earth system model evaluation",
    body:
      "ESM-bench asks whether AI agents can reason across code, physical assumptions, configurations, observations, and experiment logs.",
  },
  {
    title: "Agent frameworks for Noah-MP",
    body:
      "Noah-Agent frames parameterization and validation work as a multi-expert agent workflow around large Fortran climate models.",
  },
  {
    title: "Scientific skill extraction",
    body:
      "Commit Log as Skill Mine studies how reusable agent skills can be extracted from real scientific research trajectories.",
  },
  {
    title: "Applied LLM evaluation",
    body:
      "PineAI, water-quality retrieval, and local-first assistant work connect model evaluation to products and data pipelines.",
  },
];

const sources = [
  {
    label: "ESM-bench blog by Koutian Wu",
    href: "https://koutian.is-a.dev/posts/2026/04/esm-bench-ai-agents-earth-system-models/",
  },
  {
    label: "Vibe Coding IDEs comparison by Koutian Wu",
    href: "https://koutian.is-a.dev/posts/2025/12/vibe-coding-ides-brief-comparison-en/",
  },
  {
    label: "ResearchSkills.ai",
    href: "https://researchskills.ai/",
  },
  {
    label: "Koutian Wu on Google Scholar",
    href: "https://scholar.google.com/citations?user=s9w1k-cAAAAJ&hl=en",
  },
];

export const metadata: Metadata = {
  title: `Koutian Wu, AI for Earth and Space Models · ${SITE_TITLE}`,
  description:
    "A featured AI blog profile of Koutian Wu, focused on Earth system modeling, space physics, scientific agent evaluation, and daily AI-assisted research workflows.",
  alternates: {
    canonical: articlePath,
  },
};

export default function KoutianFeaturedAiBlogPage() {
  return (
    <>
      <header className="page-hero full-hero standard-hero ai-blog-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{SITE_TITLE}</a>
              <span className="sep">/</span>
              <span className="here">Featured AI Blog</span>
            </div>
            <span className="page-idx reveal">§ Featured AI Blog</span>
            <h1 className="page-title reveal">
              Koutian Wu, AI for Earth and Space Models.
            </h1>
            <p className="page-thesis reveal">
              Koutian Wu works where geophysics models meet AI agents:
              benchmark design, model-aware code assistance, scientific skill
              extraction, and applied LLM systems.
            </p>
          </div>

          <aside className="ai-profile-panel reveal" aria-label="Article details">
            <div className="ai-profile-photo">
              <img src="/people/KW-SF.png" alt="Koutian Wu" />
            </div>
            <div className="ai-profile-copy">
              <span className="card-eyebrow">Subject</span>
              <h2>Koutian Wu</h2>
              <p>
                PhD student in AI for Geosciences at UT Austin and executive
                committee member of {ORG_NAME}.
              </p>
              <div className="ai-profile-meta">
                <span>
                  Responding editor
                  <b>Zesen Huang</b>
                </span>
                <span>
                  Published
                  <b>May 25, 2026</b>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section className="sec ai-article-section">
        <div className="ai-article-layout">
          <article className="article-prose reveal">
            <p className="article-lede">
              The starting problem is concrete: an AI agent can write a patch
              that looks plausible and still violates the physical assumptions
              inside a model. For Earth system modeling, a passing build is not
              enough. A code edit can change water balance, energy closure, or
              the meaning of a parameterization.
            </p>

            <p>
              That problem runs through Koutian Wu&apos;s current work at UT
              Austin. His primary expertise sits at the intersection of
              geophysics modeling and artificial intelligence. He studies how
              machine learning and agent systems can help with Earth system
              models, land surface models, and space physics workflows while
              keeping the physics visible to human review.
            </p>

            <p>
              ESM-bench is the clearest expression of that concern. The
              benchmark asks whether AI agents can modify Earth System Model
              code while respecting both software structure and physical logic.
              In Wu&apos;s April 2026 post, the benchmark is described as 576
              tasks across physics-based bug fixes, process representation
              modifications, parameterization scheme selection, and parameter
              optimization. The same post reports a code-level hint run where
              Claude Opus 4.7 reached 0.312 structural F1 under an assisted v4
              Noah-MP setting, while exact match stayed at 0 percent.
            </p>

            <p>
              The point is diagnostic. A model may find a plausible file, write
              a syntactically clean patch, and still miss the physical
              mechanism. Wu&apos;s evaluation design separates localization,
              patch generation, evidence use, and physics-aware review so the
              failure mode can be seen instead of hidden behind one score.
            </p>

            <p>
              Noah-Agent extends the same idea into climate-model workflows. It
              frames automated parameterization and validation for Noah-MP as a
              multi-expert agent process. The target is not a chatbot around a
              model manual. It is a workflow that can inspect Fortran code,
              reason about configurations, connect observations to model
              output, and leave a trail that a domain scientist can audit.
            </p>

            <p>
              Wu&apos;s agent work also comes from daily use. He has used coding
              agents across research and software work for nearly 300 days. His
              typical workflow gives Codex and Google Antigravity the planning
              role, uses Claude Code for fast implementation, then brings Codex
              CLI back as an independent reviewer before rebasing and merging.
              The workflow is productive, but it also exposes the weak points:
              fabricated citations, wrong model identifiers, bad PR scope, and
              long exploration when a small verified edit would have been
              enough.
            </p>

            <p>
              That experience feeds into ResearchSkills.ai, where Wu is a
              co-lead. The project collects researchers&apos; decision
              trajectories and turns them into reusable agent skills. His
              recent work, Commit Log as Skill Mine, treats scientific commit
              histories as data for extracting reusable know-how from research
              workflows. In this view, an agent skill is not a prompt trick. It
              is a small, testable piece of procedural knowledge.
            </p>

            <p>
              The evaluation thread also appears outside climate modeling. At
              PineAI, Wu built a combined LLM-as-a-judge and rule-based
              evaluation pipeline for an agent knowledge base. The system
              processed more than 1,000 call sessions, removed more than 2,000
              noise or PII entries, extracted more than 3,000 Q&amp;A pairs, and
              evaluated outputs for relevance, accuracy, completeness,
              consistency, and clarity. That work made the failure modes of
              judge models a practical engineering issue rather than an
              abstract concern.
            </p>

            <p>
              His scientific ML work follows the same habit of asking where a
              model is allowed to be uncertain. In a Texas water-quality
              project, he paired Sentinel-2 imagery with NERRS in-situ
              observations to retrieve turbidity and chlorophyll-a for coastal
              bays. The pipeline benchmarks 12 regressors, builds spatial
              prediction maps with selected GBDT and Ridge models, and tracks
              transferability because the strict matchup dataset is still
              small.
            </p>

            <p>
              Before this AI-agent work, Wu published in JGR: Space Physics on
              diurnal and seasonal variations of meteor speeds from Mengcheng
              Meteor Radar observations. That project used a multi-stage
              signal-processing pipeline to filter interference from raw meteor
              radar data. It is a useful anchor for his later AI work: the
              point is not to make models fluent, but to make them reliable in
              scientific settings where bad confidence can look like a result.
            </p>

            <p>
              On {ORG_NAME}, that stance becomes operational. Wu serves on the
              executive committee, working on releases, issue triage, docs,
              partner outreach, funder relations, and research-integrity review.
              The same pattern appears across the site: make expert procedural
              knowledge loadable by agents, readable by humans, and reviewable
              by the community.
            </p>
          </article>

          <aside className="article-aside reveal">
            <div className="article-aside-block">
              <span className="card-eyebrow">Focus Areas</span>
              <div className="focus-list">
                {focusCards.map((card) => (
                  <div className="focus-item" key={card.title}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="article-aside-block">
              <span className="card-eyebrow">Related Links</span>
              <ul className="source-list">
                {sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noopener">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
