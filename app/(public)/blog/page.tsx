import type { Metadata } from "next";
import { ORG_NAME } from "@/lib/skills";
import { blogPosts, formatPublished } from "@/lib/blogs";

export const metadata: Metadata = {
  title: `Blog · ${ORG_NAME}`,
  description:
    "Featured AI blog index for Earth and Space Agent Skills: profiles of researchers working at the intersection of Earth, space, and AI agents.",
  alternates: {
    canonical: "/blog",
  },
};

const publishedCount = blogPosts.filter((p) => p.status === "published").length;
const upcomingCount = blogPosts.filter((p) => p.status === "coming-soon").length;

export default function BlogIndexPage() {
  return (
    <>
      <header className="page-hero full-hero standard-hero">
        <div className="page-hero-inner">
          <div>
            <div className="crumbs reveal">
              <a href="/">{ORG_NAME}</a>
              <span className="sep">/</span>
              <span className="here">Blog</span>
            </div>
            <span className="page-idx reveal">§ Featured AI Blog</span>
            <h1 className="page-title reveal">Blog.</h1>
            <p className="page-thesis reveal">
              Featured profiles of researchers working where Earth-system and
              space-physics modeling meet AI agents.
            </p>
          </div>
          <div className="standard-hero-copy">
            <p className="page-sub reveal">
              Each post is edited by a member of the {ORG_NAME} community and
              pairs a working researcher with the methods, code, and evaluation
              habits they actually rely on.
            </p>
            <div className="page-hero-meta reveal">
              <span>
                Published
                <span className="v">{publishedCount}</span>
              </span>
              <span>
                Upcoming
                <span className="v">{upcomingCount}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="sec-head-full">
          <span className="sec-eyebrow reveal">§ All posts</span>
          <h2 className="sec-heading reveal">Featured posts.</h2>
          <p className="sec-lede reveal">
            Browse the full featured AI blog. Upcoming posts are marked and
            link to a placeholder until publication.
          </p>
        </div>

        <ul className="blog-index-list">
          {blogPosts.map((post) => {
            const isComingSoon = post.status === "coming-soon";
            return (
              <li key={post.slug}>
                <a
                  className={`blog-index-row reveal${
                    isComingSoon ? " is-coming-soon" : ""
                  }`}
                  href={`/blog/${post.slug}`}
                >
                  <div className="blog-index-photo">
                    <img src={post.subjectPhoto} alt={post.subjectName} />
                  </div>
                  <div className="blog-index-body">
                    <span className="card-eyebrow">Featured AI Blog</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-index-meta">
                      <span>
                        Subject
                        <b>
                          {post.subjectName}, {post.subjectAffiliation}
                        </b>
                      </span>
                      <span>
                        Responding editor
                        <b>{post.editorName}</b>
                      </span>
                      <span>
                        {isComingSoon ? "Status" : "Published"}
                        <b>
                          {isComingSoon
                            ? "Coming soon"
                            : formatPublished(post.publishedISO)}
                        </b>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
