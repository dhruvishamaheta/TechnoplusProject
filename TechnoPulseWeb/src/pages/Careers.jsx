import { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Sparkles, 
  Laptop, 
  DollarSign, 
  BookOpen, 
  HeartHandshake, 
  Coffee,
  X,
  Mail,
  Send,
  CheckCircle2
} from 'lucide-react';
import './Careers.css';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    name: '',
    email: '',
    portfolio: '',
    resumeNote: ''
  });

  const perks = [
    {
      icon: Laptop,
      title: 'Remote & Hybrid Freedom',
      desc: 'Work where you are most productive. We support full remote setups with top-spec Apple hardware.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      desc: 'Industry-leading salary benchmarks, performance-linked quarterly bonuses, and transparent salary tiers.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning Stipend',
      desc: 'Annual $1,500 budget per engineer for cloud certifications (AWS/GCP), courses, tech books, and conferences.'
    },
    {
      icon: HeartHandshake,
      title: 'Health & Comprehensive Cover',
      desc: 'Premium health insurance for you and your dependents, plus comprehensive mental health and wellness support.'
    },
    {
      icon: Coffee,
      title: 'Generous Time Off',
      desc: 'Flexible paid time off, company-wide recharge days, and paid parental leave to maintain real life balance.'
    },
    {
      icon: Sparkles,
      title: 'Cutting-Edge Tech Stack',
      desc: 'Say goodbye to ancient legacy monoliths. We work with modern React 19, TypeScript, Kubernetes, and AI systems.'
    }
  ];

  const jobs = [
    {
      id: 'fullstack-sr',
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid (Rajkot, Gujarat)',
      type: 'Full-time',
      experience: '4+ Years',
      desc: 'Lead the architecture and implementation of scalable web applications using React, Node.js, and distributed databases.',
      tags: ['React 19', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
      responsibilities: [
        'Design and ship modular full-stack applications with high test coverage and clean documentation.',
        'Collaborate with product designers and cloud architects to define technical roadmaps.',
        'Mentor junior and mid-level software engineers through rigorous code reviews and architecture discussions.'
      ],
      requirements: [
        '4+ years building production-grade web systems with modern React and Node.js.',
        'Deep understanding of relational and NoSQL database schemas, indexing, and query optimization.',
        'Familiarity with containerization (Docker) and CI/CD deployment pipelines.'
      ]
    },
    {
      id: 'cloud-architect',
      title: 'Cloud & DevOps Solutions Architect',
      department: 'DevOps & Cloud',
      location: 'Remote (India)',
      type: 'Full-time',
      experience: '5+ Years',
      desc: 'Architect and automate enterprise cloud environments, Kubernetes orchestration, and immutable infrastructure pipelines.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Prometheus'],
      responsibilities: [
        'Design multi-region cloud infrastructure prioritizing 99.99% availability and cost optimization.',
        'Build automated Terraform modules and GitOps pipelines with GitHub Actions or GitLab CI.',
        'Establish proactive monitoring, alerting, and automated incident response runbooks.'
      ],
      requirements: [
        'Proven track record managing production Kubernetes clusters and AWS infrastructure.',
        'Hands-on expertise with Infrastructure as Code (Terraform) and Linux systems administration.',
        'Strong security mindset regarding IAM roles, VPC configurations, and secret management.'
      ]
    },
    {
      id: 'ai-engineer',
      title: 'AI & Data Systems Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Build enterprise search pipelines, vector embeddings, and LLM-powered backend services for our client platforms.',
      tags: ['Python', 'FastAPI', 'LangChain', 'Vector DB', 'PyTorch'],
      responsibilities: [
        'Develop production pipelines integrating generative AI and retrieval-augmented generation (RAG).',
        'Optimize vector database indexes and semantic search retrieval latency.',
        'Build robust evaluation harnesses to monitor model accuracy, latency, and token economics.'
      ],
      requirements: [
        'Solid background in Python, machine learning workflows, and modern API architectures.',
        'Experience integrating OpenAI, Anthropic, or open-source Hugging Face models in production.',
        'Familiarity with Pinecone, Milvus, Qdrant, or pgvector.'
      ]
    },
    {
      id: 'uiux-lead',
      title: 'Lead UI/UX Product Designer',
      department: 'Product & Design',
      location: 'Hybrid (Rajkot, Gujarat)',
      type: 'Full-time',
      experience: '4+ Years',
      desc: 'Craft intuitive, visually breathtaking enterprise dashboards, design tokens, and fluid web experiences.',
      tags: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
      responsibilities: [
        'Own product design end-to-end from user flow wireframes to high-fidelity clickable interactive prototypes.',
        'Maintain and expand our core design system tokens and component library in Figma.',
        'Work closely with frontend engineers to ensure pixel-perfect fidelity during implementation.'
      ],
      requirements: [
        'Strong portfolio showcasing sophisticated B2B or consumer digital web applications.',
        'Mastery of Figma, component variants, auto-layout, and interactive prototyping.',
        'Empathy for user ergonomics and intuitive technical user interfaces.'
      ]
    },
    {
      id: 'qa-automation',
      title: 'Senior QA Automation Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Champion software reliability by writing automated end-to-end, API, and regression test suites.',
      tags: ['Playwright', 'Cypress', 'Jest', 'API Testing', 'CI/CD'],
      responsibilities: [
        'Author comprehensive automated test suites using Playwright or Cypress for web platforms.',
        'Integrate automated testing into continuous integration pipelines to prevent production regressions.',
        'Perform load testing and security vulnerability scans.'
      ],
      requirements: [
        '3+ years in software quality engineering with heavy test automation experience.',
        'Proficiency in JavaScript or TypeScript for writing clean, maintainable test scripts.',
        'Experience testing REST and GraphQL APIs.'
      ]
    }
  ];

  const categories = ['All', 'Engineering', 'DevOps & Cloud', 'Product & Design'];

  const filteredJobs = selectedCategory === 'All'
    ? jobs
    : jobs.filter(j => j.department === selectedCategory);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setApplicationSubmitted(false);
      setApplicantData({ name: '', email: '', portfolio: '', resumeNote: '' });
    }, 2500);
  };

  return (
    <div className="careers-page-wrap">
      {/* Hero */}
      <section className="careers-hero-section">
        <div className="container">
          <div className="careers-hero-content">
            <span className="badge">
              <Briefcase size={14} />
              Careers at Technoplus Solutions
            </span>
            <h1 className="careers-hero-title">
              Build Systems That Define Modern Digital Engineering
            </h1>
            <p className="careers-hero-desc">
              We are a team of software craftsmen, cloud architects, and product designers solving tough technical challenges. 
              Join us to work on impactful enterprise projects with great colleagues and full autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Transparent Recruitment */}
      <section className="hiring-process-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="badge">
              <Clock size={14} />
              Transparent Recruitment
            </span>
            <h2 className="section-title">Our Simple 4-Step Hiring Process</h2>
            <p className="section-desc">
              We respect your time. Our hiring process is fast, practical, and devoid of repetitive boilerplate interviews.
            </p>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-card glass-card">
              <div className="step-badge">01</div>
              <h3 className="step-card-title">Initial Intro</h3>
              <p className="step-card-desc">
                A 30-minute conversation with our team lead to learn about your background, career goals, and ensure alignment.
              </p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-badge">02</div>
              <h3 className="step-card-title">Technical Deep-Dive</h3>
              <p className="step-card-desc">
                Discussion regarding past projects, system architecture choices, and how you approach real-world engineering trade-offs.
              </p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-badge">03</div>
              <h3 className="step-card-title">Pair Programming</h3>
              <p className="step-card-desc">
                A practical 60-minute session solving a realistic engineering problem alongside one of our senior developers.
              </p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-badge">04</div>
              <h3 className="step-card-title">Offer &amp; Welcome</h3>
              <p className="step-card-desc">
                Transparent compensation package offer within 48 hours, followed by our streamlined digital onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Open Opportunities Section */}
      <section className="careers-positions-section section-padding">
        <div className="container">
          <div className="positions-header">
            <div>
              <span className="badge">
                <Briefcase size={14} />
                Open Opportunities
              </span>
              <h2 className="section-title">Join Our Engineering Team</h2>
              <p className="section-desc">
                Explore our current openings across development, cloud infrastructure, and product design.
              </p>
            </div>

            {/* Category Filter */}
            <div className="category-filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card glass-card">
                <div className="job-main-info">
                  <div className="job-title-row">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-dept-tag">{job.department}</span>
                  </div>

                  <p className="job-desc">{job.desc}</p>

                  <div className="job-meta-row">
                    <span className="job-meta-item">
                      <MapPin size={15} />
                      {job.location}
                    </span>
                    <span className="job-meta-item">
                      <Clock size={15} />
                      {job.type} &bull; {job.experience}
                    </span>
                  </div>

                  <div className="job-tags-row">
                    {job.tags.map((tag) => (
                      <span key={tag} className="job-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="job-action-wrap">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="btn btn-primary apply-open-btn"
                  >
                    <span>View &amp; Apply</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous Application Card */}
          <div className="spontaneous-card glass-card">
            <div className="spontaneous-content">
              <Mail size={32} className="spontaneous-icon" />
              <div>
                <h3 className="spontaneous-title">Don&apos;t see your specific role?</h3>
                <p className="spontaneous-desc">
                  We are always seeking exceptional engineers and architects. Drop your resume and GitHub link directly to our engineering leadership.
                </p>
              </div>
            </div>
            <a href="mailto:dhruvishamaheta284@gmail.com?subject=Spontaneous%20Application%20-%20Technoplus%20Solutions" className="btn btn-secondary">
              <span>Send General Application</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Culture & Benefits Section */}
      <section className="careers-perks-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="badge">
              <Sparkles size={14} />
              Culture &amp; Benefits
            </span>
            <h2 className="section-title">Designed for Engineers to Do Their Best Work</h2>
            <p className="section-desc">
              We believe great engineering comes from high autonomy, psychological safety, and world-class tools.
            </p>
          </div>

          <div className="perks-grid">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="perk-card glass-card">
                  <div className="perk-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="perk-title">{perk.title}</h3>
                  <p className="perk-desc">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedJob(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="badge">{selectedJob.department}</span>
              <h2 className="modal-job-title">{selectedJob.title}</h2>
              <div className="modal-meta-row">
                <span>{selectedJob.location}</span> &bull; <span>{selectedJob.type}</span>
              </div>
            </div>

            <div className="modal-body-content">
              {applicationSubmitted ? (
                <div className="application-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3 className="success-title">Application Received!</h3>
                  <p className="success-desc">
                    Thank you for applying for <strong>{selectedJob.title}</strong>. Our engineering leads will review your profile and reach out within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="modal-details-section">
                    <h4>Key Responsibilities:</h4>
                    <ul className="modal-list">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>

                    <h4>Requirements &amp; Experience:</h4>
                    <ul className="modal-list">
                      {selectedJob.requirements.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <form onSubmit={handleApplySubmit} className="job-apply-form">
                    <h4 className="apply-form-title">Quick Application:</h4>
                    
                    <div className="apply-fields-grid">
                      <div className="form-field-group">
                        <label className="form-field-label">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={applicantData.name}
                          onChange={(e) => setApplicantData({ ...applicantData, name: e.target.value })}
                          className="form-text-input"
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="form-field-label">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={applicantData.email}
                          onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                          className="form-text-input"
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label">Portfolio / LinkedIn / GitHub URL *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://github.com/yourhandle"
                        value={applicantData.portfolio}
                        onChange={(e) => setApplicantData({ ...applicantData, portfolio: e.target.value })}
                        className="form-text-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="form-field-label">Note to Engineering Team (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what excites you about this role or projects you're proud of..."
                        value={applicantData.resumeNote}
                        onChange={(e) => setApplicantData({ ...applicantData, resumeNote: e.target.value })}
                        className="form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary submit-app-btn">
                      <Send size={15} />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
