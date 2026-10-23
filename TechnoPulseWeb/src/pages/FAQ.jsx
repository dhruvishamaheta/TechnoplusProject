import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  ArrowRight, 
  ShieldAlert 
} from 'lucide-react';
import './FAQ.css';

const faqData = [
  {
    category: 'Services & Tech',
    question: 'What types of software systems does Technoplus Solutions develop?',
    answer: 'We specialize in enterprise web applications, high-throughput cloud infrastructure, microservices, and AI-enabled platforms. Our typical projects range from bespoke SaaS products and internal business process automation to complex database architectures and customer-facing portals.'
  },
  {
    category: 'Security & IP',
    question: 'How do you guarantee Intellectual Property (IP) ownership and confidentiality?',
    answer: '100% of the intellectual property, source code, design assets, and database schemas are transferred to you. Every engagement begins with a mutual Non-Disclosure Agreement (NDA). All repositories, cloud accounts, and API credentials are kept within your enterprise perimeter or transferred upon completion.'
  },
  {
    category: 'Process & Delivery',
    question: 'What is your typical project kickoff timeline and sprint structure?',
    answer: 'Once project parameters and kickoff are agreed upon, we typically assemble and onboard the dedicated engineering squad within 5 to 7 business days. We operate on bi-weekly agile sprints with scheduled live demo presentations, staging deployments, and continuous Git commit transparency.'
  },
  {
    category: 'Pricing & Terms',
    question: 'What engagement and pricing models do you offer?',
    answer: 'We offer two flexible models: (1) Dedicated Engineering Squads (time & materials billed monthly) for evolving scopes and continuous development, and (2) Milestone-Based Fixed Scope for well-defined deliverables with deterministic deliverables and deadlines.'
  },
  {
    category: 'Services & Tech',
    question: 'Which modern technologies and frameworks do your teams specialize in?',
    answer: 'Our core tech matrix centers on modern, robust technologies: Frontend (React 19, Next.js, TypeScript, Tailwind, CSS), Backend & Microservices (Node.js, Express, Python, Go, NestJS), Databases (PostgreSQL, MongoDB Atlas, Redis), and Cloud/DevOps (AWS, Docker, Kubernetes, Terraform, GitHub Actions).'
  },
  {
    category: 'Process & Delivery',
    question: 'Can you help modernize, refactor, or migrate an existing legacy codebase?',
    answer: 'Yes. A large portion of our work involves performing architectural audits, resolving technical debt, decoupling monoliths into manageable services, and migrating on-premises applications to modern cloud architectures with minimal to zero production downtime.'
  },
  {
    category: 'Security & IP',
    question: 'How do you ensure enterprise code quality, testing, and security compliance?',
    answer: 'Every line of code undergoes mandatory peer review, automated static analysis (ESLint, SonarQube), end-to-end integration tests (Playwright/Cypress), and automated security scans before reaching production. We follow OWASP Top 10 security guidelines and strict least-privilege cloud IAM.'
  },
  {
    category: 'Pricing & Terms',
    question: 'Do you provide maintenance, monitoring, and post-launch SLAs?',
    answer: 'Yes. We provide 24/7 proactive monitoring, infrastructure observability (Prometheus, Datadog), security patching, uptime guarantees (99.9% SLA), and ongoing sprint allocations for continuous feature evolution.'
  },
  {
    category: 'Process & Delivery',
    question: 'How do we communicate and collaborate with the engineering team during a sprint?',
    answer: 'You have direct, unhindered access to the engineers and tech leads via your preferred channels (Slack, Microsoft Teams, Discord). We use Jira, Linear, or GitHub Projects for live sprint tracking, accompanied by bi-weekly video demonstrations.'
  },
  {
    category: 'Process & Delivery',
    question: 'How do you handle collaboration across international time zones?',
    answer: 'Our engineers are based in India and maintain flexible overlap hours (4 to 5 hours daily) with clients across North America (EST/PST), Europe (GMT/CET), and Asia-Pacific. Asynchronous documentation and clear sprint standups ensure continuous 24-hour delivery velocity.'
  }
];

const categories = ['All', 'Services & Tech', 'Security & IP', 'Process & Delivery', 'Pricing & Terms'];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="faq-page-wrap">
      {/* Hero */}
      <section className="faq-hero-section">
        <div className="container">
          <div className="faq-hero-content">
            <span className="badge">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </span>
            <h1 className="faq-hero-title">
              Everything You Need to Know About Partnering With Us
            </h1>
            <p className="faq-hero-desc">
              Clear answers regarding our software engineering standards, IP security, engagement contracts, and development lifecycle.
            </p>

            {/* Live Search Input */}
            <div className="faq-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. security, pricing, tech stack, timeline)..."
                className="faq-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="clear-search-btn"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Section */}
      <section className="faq-main-section section-padding">
        <div className="container">
          {/* Category Tabs */}
          <div className="faq-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`faq-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="faq-accordion-list">
              {filteredFaqs.map((item, idx) => {
                const isOpen = !!openItems[idx];
                return (
                  <div
                    key={idx}
                    className={`faq-accordion-item glass-card ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                    >
                      <div className="faq-title-group">
                        <span className="faq-category-badge">{item.category}</span>
                        <h3 className="faq-question-text">{item.question}</h3>
                      </div>
                      <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-container">
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="faq-empty-state glass-card">
              <ShieldAlert size={36} className="empty-icon" />
              <h3>No matching questions found</h3>
              <p>We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or browse all categories.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="btn btn-secondary"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="faq-cta-banner glass-card">
            <div className="faq-cta-content">
              <div className="faq-cta-icon-box">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="faq-cta-title">Have a specific question not covered here?</h3>
                <p className="faq-cta-desc">
                  Our technical directors are ready to discuss your architecture, project scope, or custom requirements.
                </p>
              </div>
            </div>
            <div className="faq-cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Talk to an Architect</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
