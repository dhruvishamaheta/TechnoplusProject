import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Layers,
  ArrowRight,
  ArrowUpRight,
  X,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
  TrendingUp,
  Cpu,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const filterCategories = [
  'All',
  'Enterprise SaaS',
  'Cloud & DevOps',
  'Artificial Intelligence',
  'Security'
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press & handle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.filterCategory === activeFilter);

  return (
    <div className="projects-page-wrap">
      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <div className="badge">
            <Briefcase size={14} />
            <span>Proven Delivery Track Record</span>
          </div>
          <h1 className="projects-main-title">Completed Projects &amp; Case Studies</h1>
          <p className="projects-description">
            Explore software platforms, cloud infrastructure migrations, and applied AI systems delivered by Technoplus Solutions with measurable business outcomes.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="projects-filter-bar">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`project-filter-pill ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-card-image-wrap">
                <img
                  src={project.image}
                  alt=""
                  className="project-card-image"
                  loading="lazy"
                />
              </div>

              <div className="project-card-top">
                <div className="project-card-badges">
                  <span className="project-badge">{project.badge}</span>
                  <span className="project-status-dot">
                    <span className="live-dot" />
                    <span>In Production</span>
                  </span>
                </div>

                <h2 className="project-card-title">{project.title}</h2>
                <div className="project-client-name">
                  <Building2 size={13} />
                  <span>{project.client}</span>
                </div>

                <p className="project-card-desc">{project.shortDesc}</p>
              </div>

              {/* Highlight Stats Snippet */}
              <div className="project-stats-preview">
                {project.stats.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="preview-stat-item">
                    <span className="preview-stat-val">{s.value}</span>
                    <span className="preview-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="project-card-bottom">
                <div className="project-tags-row">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span key={idx} className="project-tag">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="project-tag project-tag-more">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="project-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <span>View Project Details</span>
                  <ArrowRight size={14} className="action-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="projects-bottom-cta glass-card">
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">Have a system you need engineered?</h3>
            <p className="projects-cta-desc">
              Whether you are architecting a new SaaS platform, optimizing cloud workloads, or automating data pipelines, our architects are ready to assist.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary projects-cta-btn">
            <span>Discuss Your Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* =========================================================================
          PROJECT DETAILS POPUP MODAL
          ========================================================================= */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="modal-content-box glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-badges-group">
                <span className="modal-badge">{selectedProject.badge}</span>
                <span className="modal-status-badge">
                  <span className="live-dot" />
                  <span>{selectedProject.status}</span>
                </span>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="modal-body">
              <h2 id="modal-project-title" className="modal-title">
                {selectedProject.title}
              </h2>

              <div className="modal-meta-row">
                <div className="modal-meta-item">
                  <Building2 size={15} />
                  <span>Client: <strong>{selectedProject.client}</strong></span>
                </div>
                <div className="modal-meta-sep">•</div>
                <div className="modal-meta-item">
                  <Calendar size={15} />
                  <span>Timeline: <strong>{selectedProject.timeline}</strong></span>
                </div>
              </div>

              {/* Executive Overview */}
              <p className="modal-full-desc">{selectedProject.fullDesc}</p>

              {/* Key Results Stats Bar */}
              <div className="modal-stats-grid">
                {selectedProject.stats.map((stat, idx) => (
                  <div key={idx} className="modal-stat-card">
                    <div className="modal-stat-val">{stat.value}</div>
                    <div className="modal-stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="challenge-solution-grid">
                <div className="cs-card cs-card-challenge">
                  <div className="cs-card-header">
                    <span className="cs-tag cs-tag-challenge">The Challenge</span>
                  </div>
                  <p className="cs-text">{selectedProject.challenge}</p>
                </div>

                <div className="cs-card cs-card-solution">
                  <div className="cs-card-header">
                    <span className="cs-tag cs-tag-solution">The Solution</span>
                  </div>
                  <p className="cs-text">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Tangible Business Impact */}
              {selectedProject.impact && (
                <div className="modal-impact-box">
                  <TrendingUp size={20} className="impact-icon" />
                  <div>
                    <h4 className="impact-title">Business &amp; Operational Impact</h4>
                    <p className="impact-desc">{selectedProject.impact}</p>
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              <div className="modal-section-group">
                <h3 className="modal-section-title">Production Deliverables Shipped</h3>
                <div className="modal-deliverables-list">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="modal-deliverable-item">
                      <CheckCircle2 size={16} className="modal-check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="modal-section-group">
                <h3 className="modal-section-title">Technology &amp; Tooling Stack</h3>
                <div className="modal-tech-grid">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-pill">
                      <span className="modal-tech-dot" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary modal-close-action-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
              <Link
                to={`/contact?service=${encodeURIComponent(selectedProject.id)}`}
                className="btn btn-primary modal-contact-btn"
                onClick={() => setSelectedProject(null)}
              >
                <span>Inquire About Similar Project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
