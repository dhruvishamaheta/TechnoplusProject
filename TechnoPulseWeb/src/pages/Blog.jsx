import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Search,
  Tag,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { blogsData, getFeaturedBlog } from '../data/blogsData';
import './Blog.css';

const categories = [
  'All',
  'Engineering',
  'Cloud & DevOps',
  'Artificial Intelligence',
  'Security',
  'UI/UX & Design',
  'Architecture'
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const featuredBlog = useMemo(() => getFeaturedBlog(), []);

  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'All' || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="blog-page-wrap">
      <div className="container">
        {/* Header */}
        <div className="blog-header">
          <div className="badge">
            <BookOpen size={14} />
            <span>Engineering &amp; Architecture Journal</span>
          </div>
          <h1 className="blog-main-title">Engineering Insights</h1>
          <p className="blog-description">
            In-depth architectural breakdowns, cloud engineering strategies, security patterns, and software craft from our production engineers.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="blog-controls-bar">
          <div className="blog-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles by topic, tech, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blog-categories-list">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Spotlight (shown when viewing 'All' and no search) */}
        {selectedCategory === 'All' && !searchQuery && featuredBlog && (
          <div className="featured-post-wrap">
            <div className="featured-post-card glass-card">
              <div className="featured-card-body">
                <div className="featured-meta-row">
                  <span className="featured-badge">{featuredBlog.badge}</span>
                  <div className="featured-time-meta">
                    <Calendar size={13} />
                    <span>{featuredBlog.date}</span>
                    <span className="meta-sep">•</span>
                    <Clock size={13} />
                    <span>{featuredBlog.readTime}</span>
                  </div>
                </div>

                <Link to={`/blog/${featuredBlog.id}`} className="featured-title-link">
                  <h2 className="featured-title">{featuredBlog.title}</h2>
                </Link>

                <p className="featured-excerpt">{featuredBlog.excerpt}</p>

                <div className="featured-footer-row">
                  <div className="author-info">
                    <img
                      src={featuredBlog.author.avatar}
                      alt={featuredBlog.author.name}
                      className="author-avatar"
                      loading="lazy"
                    />
                    <div>
                      <div className="author-name">{featuredBlog.author.name}</div>
                      <div className="author-role">{featuredBlog.author.role}</div>
                    </div>
                  </div>

                  <Link to={`/blog/${featuredBlog.id}`} className="btn btn-primary featured-cta-btn">
                    <span>Read Article</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="blog-grid-header">
          <h2 className="grid-section-title">
            {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
          </h2>
          <span className="grid-count-badge">
            {filteredBlogs.length} {filteredBlogs.length === 1 ? 'Article' : 'Articles'}
          </span>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="blog-cards-grid">
            {filteredBlogs.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="blog-card glass-card"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="blog-card-top">
                  <div className="blog-card-meta">
                    <span className="blog-category-tag">{post.category}</span>
                    <div className="blog-meta-time">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>

                <div className="blog-card-bottom">
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="blog-tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="blog-card-author-row">
                    <div className="blog-author-mini">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="author-avatar-mini"
                        loading="lazy"
                      />
                      <div>
                        <span className="author-name-mini">{post.author.name}</span>
                        <span className="author-date-mini">{post.date}</span>
                      </div>
                    </div>

                    <div className="blog-read-action">
                      <span>Read</span>
                      <ArrowRight size={14} className="blog-read-arrow" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state glass-card">
            <h3 className="empty-title">No articles found</h3>
            <p className="empty-desc">
              No matching articles for "{searchQuery}" in category "{selectedCategory}". Try clearing your filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="btn btn-secondary empty-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <div className="blog-newsletter-section">
          <div className="newsletter-card glass-card">
            <div className="newsletter-content">
              <div className="newsletter-badge">
                <Sparkles size={14} />
                <span>Stay Informed</span>
              </div>
              <h3 className="newsletter-title">Subscribe to Engineering Insights</h3>
              <p className="newsletter-desc">
                Bi-weekly technical articles on React architecture, cloud infrastructure, AI integration, and zero-trust security. No spam, ever.
              </p>
            </div>

            {subscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={24} className="newsletter-check-icon" />
                <span>You're subscribed! We'll notify you when our next architectural breakdown drops.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your engineering email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-submit-btn">
                  <span>Subscribe</span>
                  <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
