import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/skills";
import {
  getRequiredPostBySlug,
  ZESEN_FEATURED_BLOG_SLUG,
} from "@/lib/blogs";

const slug = ZESEN_FEATURED_BLOG_SLUG;
const post = getRequiredPostBySlug(slug);
const articlePath = `/blog/${slug}`;

export const metadata: Metadata = {
  title: `${post.title} · ${SITE_TITLE}`,
  description:
    "Featured AI blog placeholder for Zesen Huang. The full profile is in preparation.",
  alternates: {
    canonical: articlePath,
  },
};

export default function ZesenHuangFeaturedAiBlogPage() {
  return (
    <>
      <header className="page-hero full-hero standard-hero ai-blog-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{SITE_TITLE}</a>
              <span className="sep">/</span>
              <a href="/blog">Blog</a>
              <span className="sep">/</span>
              <span className="here">Featured AI Blog</span>
            </div>
            <span className="page-idx reveal">§ Featured AI Blog</span>
            <h1 className="page-title reveal">{post.title}</h1>
            <p className="page-thesis reveal">
              Featured blog coming soon. Edited by {post.editorName}.
            </p>
          </div>

          <aside className="ai-profile-panel reveal" aria-label="Article details">
            <div className="ai-profile-photo">
              <img src={post.subjectPhoto} alt={post.subjectName} />
            </div>
            <div className="ai-profile-copy">
              <span className="card-eyebrow">Subject</span>
              <h2>{post.subjectName}</h2>
              <p>{post.subjectAffiliation}.</p>
              <div className="ai-profile-meta">
                <span>
                  Responding editor
                  <b>{post.editorName}</b>
                </span>
                <span>
                  Published
                  <b>TBD</b>
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
              This featured blog is in preparation. Edited by Koutian Wu, it
              will introduce Zesen Huang&apos;s work on AI agents for
              heliophysics modeling at UCLA. Check back soon.
            </p>
          </article>

          <aside className="article-aside reveal">
            <div className="article-aside-block">
              <span className="card-eyebrow">Related Links</span>
              <p
                style={{
                  margin: "16px 0 0",
                  color: "var(--ink-3)",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                Related links coming soon.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
