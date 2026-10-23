import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  Bookmark,
  Sparkles,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { getBlogBySlug, getRecentBlogs, blogsData } from '../data/blogsData';
import './BlogDetails.css';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = getBlogBySlug(id);

  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);
  const [shareCopied, setShareCopied] = useState(false);

  // If blog is not found
  if (!blog) {
    return (
      <div className="blog-details-wrap">
        <div className="container">
          <div className="blog-not-found glass-card">
            <h1 className="not-found-title">Article Not Found</h1>
            <p className="not-found-desc">
              The article you are looking for may have been moved or updated.
            </p>
            <Link to="/blog" className="btn btn-primary not-found-btn">
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>

            <div className="not-found-recent">
              <span className="not-found-recent-label">Explore popular technical publications:</span>
              <div className="not-found-recent-list">
                {blogsData.slice(0, 3).map((item) => (
                  <Link key={item.id} to={`/blog/${item.id}`} className="recent-link-item">
                    <span>{item.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const relatedArticles = getRecentBlogs(3, blog.id);

  const handleCopyCode = (snippet, idx) => {
    navigator.clipboard.writeText(snippet);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    }
  };

  return (
    <div className="blog-details-wrap">
      {/* Breadcrumb Navigation */}
      <div className="container">
        <div className="breadcrumb-nav">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={16} />
            <span>All Articles</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-cat">{blog.category}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="blog-article-container">
        <header className="article-header-section">
          <div className="container">
            <div className="article-header-inner">
              <div className="article-meta-badge-row">
                <span className="article-badge">{blog.badge}</span>
                <div className="article-meta-time">
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                  <span className="meta-sep">•</span>
                  <Clock size={14} />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h1 className="article-main-title">{blog.title}</h1>
              <p className="article-excerpt-lead">{blog.excerpt}</p>

              {/* Author & Share Bar */}
              <div className="article-author-bar">
                <div className="author-bar-left">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="article-author-avatar"
                  />
                  <div>
                    <div className="article-author-name">{blog.author.name}</div>
                    <div className="article-author-role">{blog.author.role} at Technoplus</div>
                  </div>
                </div>

                <div className="author-bar-right">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="article-share-btn"
                    aria-label="Share article link"
                  >
                    {shareCopied ? (
                      <>
                        <Check size={15} className="copied-icon" />
                        <span>Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={15} />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="container">
          <div className="article-body-wrapper">
            {/* Lead Intro */}
            <div className="article-intro-box">
              <p>{blog.intro}</p>
            </div>

            {/* Sections */}
            <div className="article-sections-flow">
              {blog.sections.map((section, idx) => (
                <section key={idx} className="article-content-section">
                  <h2 className="section-article-heading">{section.heading}</h2>
                  <p className="section-article-text">{section.text}</p>

                  {/* Architecture Callout */}
                  {section.callout && (
                    <div className="article-callout-card">
                      <Sparkles size={18} className="callout-icon" />
                      <div className="callout-text">{section.callout}</div>
                    </div>
                  )}

                  {/* Code Snippet */}
                  {section.code && (
                    <div className="article-code-block glass-card">
                      <div className="code-header">
                        <span className="code-lang-label">{section.code.language}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyCode(section.code.snippet, idx)}
                          className="code-copy-btn"
                          aria-label="Copy code snippet"
                        >
                          {copiedCodeIdx === idx ? (
                            <>
                              <Check size={13} />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="code-pre">
                        <code>{section.code.snippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="article-bullet-list">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="article-bullet-item">
                          <CheckCircle2 size={16} className="bullet-check-icon" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaways Card */}
            {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
              <div className="key-takeaways-card glass-card">
                <div className="takeaways-header">
                  <BookOpen size={20} className="takeaways-icon" />
                  <h3 className="takeaways-title">Key Architectural Takeaways</h3>
                </div>
                <div className="takeaways-list">
                  {blog.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="takeaway-item">
                      <span className="takeaway-number">0{idx + 1}</span>
                      <span className="takeaway-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion */}
            {blog.conclusion && (
              <div className="article-conclusion-box">
                <h3 className="conclusion-title">Conclusion</h3>
                <p className="conclusion-text">{blog.conclusion}</p>
              </div>
            )}

            {/* Tags Row */}
            <div className="article-tags-footer">
              <span className="tags-label">Categorized in:</span>
              <div className="tags-list">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="article-footer-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="author-bio-card glass-card">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="author-bio-avatar"
              />
              <div className="author-bio-details">
                <h4 className="author-bio-name">{blog.author.name}</h4>
                <div className="author-bio-title">{blog.author.role}</div>
                <p className="author-bio-text">
                  Specializing in enterprise cloud architecture, high-availability distributed systems, and modern full-stack web engineering at Technoplus Solutions Private Limited.
                </p>
              </div>
            </div>

            {/* Topic Consultation Callout */}
            <div className="article-consult-banner glass-card">
              <div className="consult-banner-content">
                <h3 className="consult-banner-title">Need help designing or scaling this architecture?</h3>
                <p className="consult-banner-desc">
                  Our engineering team works directly with CTOs and technical leaders to design, audit, and build modern cloud systems.
                </p>
              </div>
              <Link to="/contact" className="btn btn-primary consult-banner-btn">
                <span>Talk with Our Engineers</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="related-articles-section">
          <div className="container">
            <div className="related-header">
              <div>
                <h3 className="related-title">More From Our Engineering Journal</h3>
                <p className="related-subtitle">Continue exploring technical breakdowns from our engineering squad.</p>
              </div>
              <Link to="/blog" className="btn btn-secondary related-view-all">
                <span>View All Articles</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="related-grid">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.id}`}
                  className="related-card glass-card"
                >
                  <div className="related-meta">
                    <span className="related-cat">{rel.category}</span>
                    <span className="related-time">{rel.readTime}</span>
                  </div>
                  <h4 className="related-card-title">{rel.title}</h4>
                  <p className="related-card-excerpt">{rel.excerpt}</p>
                  <div className="related-footer">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="related-arrow" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
