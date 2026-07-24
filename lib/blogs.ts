export type BlogStatus = "published" | "coming-soon";
export const BLOG_SLUGS = {
  zesenHuang: "zesen-huang-heliophysics-ai-skills",
} as const;
export const FEATURED_BLOG_SLUG = BLOG_SLUGS.zesenHuang;

export type BlogPost = {
  slug: string;            // URL segment under /blog/
  title: string;           // headline shown in list + on the article
  subjectName: string;     // person the article profiles
  subjectAffiliation: string;
  subjectPhoto: string;    // /people/*.png|.jpg|.JPG
  editorName: string;
  publishedISO: string;    // YYYY-MM-DD; empty string for unpublished
  status: BlogStatus;
  excerpt: string;         // 1-2 sentence summary for the index page
};

export const blogPosts: BlogPost[] = [
  {
    slug: "koutian-wu-ai-for-earth-space-modeling",
    title: "Koutian Wu, AI for Earth and Space Models.",
    subjectName: "Koutian Wu",
    subjectAffiliation: "PhD Student · UT Austin",
    subjectPhoto: "/people/KW-SF.png",
    editorName: "Zesen Huang",
    publishedISO: "2026-05-25",
    status: "published",
    excerpt:
      "A profile of benchmark design, physics-aware code assistance, scientific skill extraction, and daily AI-assisted research workflows.",
  },
  {
    slug: FEATURED_BLOG_SLUG,
    title: "Zesen Huang, AI agents for heliophysics modeling.",
    subjectName: "Zesen Huang",
    subjectAffiliation: "Postdoc · UCLA",
    subjectPhoto: "/people/zesen.JPG",
    editorName: "Koutian Wu",
    publishedISO: "",
    status: "coming-soon",
    excerpt:
      "How AI-agent skills can support reproducible heliophysics modeling and research workflows.",
  },
  {
    slug: "chuanfei-dong-space-physics-modeling",
    title: "Chuanfei Dong, AI for the space environments we want to understand.",
    subjectName: "Chuanfei Dong",
    subjectAffiliation: "Professor · Boston University",
    subjectPhoto: "/people/chuanfei-dong.jpg",
    editorName: "Koutian Wu",
    publishedISO: "2026-05-27",
    status: "published",
    excerpt:
      "From space weather around Earth to whether a TRAPPIST-1 planet can hold onto an atmosphere, the same plasma physics shows up and is too expensive to simulate directly. Dong is using AI to close the gap from both sides: a learned operator inside the physics model, and the Mauve UV mission outside it.",
  },
];

// Auto-sort newest-first by publishedISO so the /blog index always shows
// the latest post first. Posts without a publishedISO (e.g. older
// coming-soon entries) sort to the end. Mutating the exported array in
// place keeps the existing `import { blogPosts }` consumers working with
// zero changes.
blogPosts.sort((a, b) => {
  if (a.publishedISO && b.publishedISO) {
    return b.publishedISO.localeCompare(a.publishedISO);
  }
  if (a.publishedISO) return -1;
  if (b.publishedISO) return 1;
  return 0;
});

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRequiredPostBySlug(slug: string): BlogPost {
  const post = getPostBySlug(slug);
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  return post;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatPublished(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
