import type { Metadata } from "next";
import { ORG_NAME } from "@/lib/skills";

const articlePath = "/blog/chuanfei-dong-space-physics-modeling";

const focusCards = [
  {
    title: "Exoplanet atmospheres",
    body:
      "A 2018 paper argued that close-in rocky planets around active M-dwarfs, including the TRAPPIST-1 worlds, would struggle to hold onto their atmospheres under stellar wind and ionizing radiation. Later JWST observations of TRAPPIST-1 b and c are consistent with the parts of that concern tested so far.",
  },
  {
    title: "Space weather around Earth",
    body:
      "The same plasma physics drives geomagnetic storms, threatens satellite operations, and stresses power grids. Honest forecasting needs kinetic behavior in domains where direct kinetic simulation is out of reach.",
  },
  {
    title: "An FNO closure as the bridge",
    body:
      "A Fourier Neural Operator trained on first-principles Vlasov simulations and plugged into a fluid plasma model as a heat-flux closure reproduces nonlinear Landau damping at a small fraction of the kinetic cost. Published in PNAS with Ziyu Huang as lead author and Liang Wang.",
  },
  {
    title: "Mauve, the observational half",
    body:
      "Dong is a principal investigator on Mauve, a small UV telescope launched in late 2025 for a three-year survey of stellar magnetic activity, flares, and high-energy radiation, the inputs any habitability claim about a close-in rocky planet has to respect.",
  },
];

const sources = [
  {
    label:
      "Huang, Dong, Wang. Machine-learning heat flux closure for multi-moment fluid modeling of nonlinear Landau damping. PNAS 122(11), 2025",
    href: "https://www.pnas.org/doi/10.1073/pnas.2419073122",
  },
  {
    label:
      "AI-powered breakthrough in plasma science (BU Hariri Institute, 2025)",
    href: "https://www.bu.edu/hic/2025/03/20/ai-powered-breakthrough-in-plasma-science-delivers-new-computational-efficiencies-unlocks-potential-for-space-and-fusion-research/",
  },
  {
    label:
      "Is there life in space? Astronomer leads new mission (BU Today, 2025)",
    href: "https://www.bu.edu/articles/2025/is-there-life-in-space-astronomer-leads-new-mission/",
  },
  {
    label: "Big Picture 2024, BU CAS Arts × Sciences Magazine",
    href: "https://www.bu.edu/cas/arts-sciences/2024/big-picture-2024/",
  },
  {
    label:
      "Three BU Scholars Receive 2024 Sloan Research Fellowships (BU Today, 2024)",
    href: "https://www.bu.edu/articles/2024/three-bu-scholars-receive-2024-sloan-research-fellowships/",
  },
  {
    label:
      "What is Webb revealing about the TRAPPIST-1 system? (NASA, science explainer)",
    href: "https://science.nasa.gov/mission/webb/science-overview/science-explainers/what-is-webb-revealing-about-the-trappist-1-system/",
  },
  {
    label: "Chuanfei Dong, Department of Astronomy, Boston University",
    href: "https://www.bu.edu/astronomy/profile/chuanfei-dong/",
  },
];

export const metadata: Metadata = {
  title: `Chuanfei Dong, AI for the space environments we want to understand · ${ORG_NAME}`,
  description:
    "A featured AI blog profile of Chuanfei Dong (Boston University): using a Fourier Neural Operator inside a plasma model to make space weather and exoplanet habitability tractable, with the Mauve UV mission as the observational counterpart.",
  alternates: {
    canonical: articlePath,
  },
};

export default function ChuanfeiDongFeaturedAiBlogPage() {
  return (
    <>
      <header className="page-hero full-hero standard-hero ai-blog-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{ORG_NAME}</a>
              <span className="sep">/</span>
              <span className="here">Featured AI Blog</span>
            </div>
            <span className="page-idx reveal">§ Featured AI Blog</span>
            <h1 className="page-title reveal">
              Chuanfei Dong
              <span className="page-title-sub">
                AI for the space environments we want to understand.
              </span>
            </h1>
            <p className="page-thesis reveal">
              From space weather around Earth to whether a rocky planet in the
              TRAPPIST-1 system can hold onto an atmosphere, the same plasma
              physics keeps showing up, and it costs too much to simulate
              directly at the scales that matter. Chuanfei Dong is using AI to
              close that gap from both sides: a learned operator inside the
              physics model, and a UV telescope on the observational side.
            </p>
          </div>

          <aside className="ai-profile-panel reveal" aria-label="Article details">
            <div className="ai-profile-photo">
              <img src="/people/chuanfei-dong.jpg" alt="Chuanfei Dong" />
            </div>
            <div className="ai-profile-copy">
              <span className="card-eyebrow">Subject</span>
              <h2>Chuanfei Dong</h2>
              <p>
                Assistant Professor of Astronomy and Electrical and Computer
                Engineering at Boston University, and a Hariri Institute Faculty
                Affiliate.
              </p>
              <div className="ai-profile-meta">
                <span>
                  Responding editor
                  <b>Koutian Wu</b>
                </span>
                <span>
                  Published
                  <b>May 27, 2026</b>
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
              The search for habitable worlds keeps running into the same wall.
              We can see the planets. We can see, in ultraviolet light, how
              violent their host stars are. What we cannot afford to do is
              simulate, from first principles and at scale, the plasma physics
              that decides whether a flare or a coronal mass ejection strips a
              close-in rocky planet of its atmosphere. Chuanfei Dong&apos;s
              work is about closing that gap, with AI inside the physics and a
              UV telescope outside it.
            </p>

            <p>
              The space problem is concrete. In a 2018 paper, Dong argued that
              close-in rocky planets around active M-dwarf stars, including
              the worlds in the TRAPPIST-1 system, would struggle to hold onto
              their atmospheres in the face of strong stellar wind and
              ionizing radiation. Later James Webb Space Telescope
              observations of TRAPPIST-1 b and c are consistent with the
              parts of that concern that have been tested so far, while
              planets further out in the same system remain under study. The
              same plasma physics shows up much closer to home, in the space
              weather that drives geomagnetic storms, threatens satellites,
              and stresses power grids. In both cases, a serious answer needs
              kinetic plasma behavior in domains where running a kinetic
              simulation directly is out of reach.
            </p>

            <p>
              That is the obstacle Dong&apos;s recent paper, published in the
              Proceedings of the National Academy of Sciences with Ziyu Huang
              as lead author and Liang Wang as collaborator, sets out to
              address. The team trains a Fourier Neural Operator on
              first-principles Vlasov simulations of a kinetic plasma, then
              plugs the trained operator into a much cheaper fluid model as a
              heat-flux closure. The resulting hybrid reproduces nonlinear
              Landau damping, a textbook kinetic phenomenon, at a small
              fraction of the cost of the Vlasov reference. Dong, who advised
              the work as principal investigator and held a 2024 Alfred P.
              Sloan Research Fellowship, frames the design choice cleanly.
              The FNO does not replace the physics solver. It learns one
              operator the solver needs and otherwise cannot get right, then
              hands the rest of the simulation back to the equations.
            </p>

            <p>
              For space science, that is the point. The same kinetic-inside-a-
              fluid-model bottleneck is what makes high-fidelity space weather
              prediction around Earth, modeling of the solar wind&apos;s
              interaction with planetary atmospheres, and any honest attempt
              to forecast atmospheric loss at an exoplanet so expensive
              today. A closure that carries kinetic physics into a fluid run
              is, in principle, the seam where AI changes what the field can
              afford to ask. The honest framing of the PNAS result is that it
              demonstrates the trick in one regime against the harder
              reference, and opens a clear question about how far the same
              closure idea travels into magnetospheres, stellar winds, and
              exoplanet environments.
            </p>

            <p>
              The observational half of the same program is Mauve, where Dong
              is a principal investigator. Mauve is a small ultraviolet
              telescope that launched in late 2025 for a three-year survey of
              stellar magnetic activity, flares, and high-energy radiation,
              the very inputs that any habitability claim about a close-in
              rocky planet has to respect. The modeling work and the mission
              are not two stories. They are the two halves of one question:
              measure how loud the star actually is, and have a physics model
              fast enough to ask what that loudness does to the planet next
              to it. That is what AI for space looks like in Dong&apos;s
              hands, and it is the through-line explored by {ORG_NAME}. The
              goal is not a faster plot. It is a working answer to
              whether a given world is a barren rock or still a candidate for
              an atmosphere.
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
