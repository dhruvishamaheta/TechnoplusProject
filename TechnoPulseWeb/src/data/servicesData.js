import {
  Code2,
  Cloud,
  Cpu,
  Shield,
  Palette,
  Briefcase
} from 'lucide-react';

export const servicesData = [
  {
    id: 'web-enterprise-applications',
    title: 'Web & Enterprise Applications',
    badge: 'Full-Cycle Web & SaaS',
    icon: Code2,
    shortDesc: 'Custom web platforms, SaaS products, and internal dashboards built with React, Node.js, and TypeScript.',
    tagline: 'Scalable, secure, and resilient enterprise web applications designed for high transaction volumes and high velocity.',
    fullDesc: 'At Technoplus Solutions, we engineer enterprise-grade web applications that balance high performance with maintainable architecture. From multi-tenant SaaS platforms to data-intensive internal operations dashboards, our engineering squads build with strict type safety, modular micro-frontends, responsive layouts, and modern distributed backend APIs. Every application is optimized for sub-second interactions, search engine indexing, and seamless third-party integrations.',
    stats: [
      { value: '99.9%', label: 'Uptime Reliability' },
      { value: '<100ms', label: 'P95 API Latency' },
      { value: '100%', label: 'Type-Safe Codebase' },
      { value: '2-Week', label: 'Continuous Sprints' }
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Express', 'GraphQL', 'Redis', 'Tailwind/CSS', 'Docker'],
    capabilities: [
      {
        title: 'Multi-Tenant SaaS Architectures',
        desc: 'Secure tenant isolation, role-based access control (RBAC), subscription billing integration, and custom domain routing.'
      },
      {
        title: 'High-Throughput API Ecosystems',
        desc: 'RESTful and GraphQL interfaces built with Node.js and TypeScript, designed to handle thousands of requests per second with Redis caching.'
      },
      {
        title: 'Modern Single Page Applications (SPAs)',
        desc: 'Lightning-fast client experiences with modern React, smart state management, code splitting, and offline caching.'
      },
      {
        title: 'Internal Operations & BI Dashboards',
        desc: 'Real-time telemetry, administrative control panels, complex data grids, interactive charts, and exportable business intelligence reports.'
      },
      {
        title: 'Database Design & High-Availability ORMs',
        desc: 'Relational schemas with PostgreSQL, query tuning, connection pooling, and seamless migrations using Prisma or Drizzle.'
      },
      {
        title: 'Legacy Monolith Modernization',
        desc: 'Incremental migration strategies to decompose legacy systems into scalable microservices or modern modular monoliths.'
      }
    ],
    deliverables: [
      'Production-ready, thoroughly tested source code repository with 100% intellectual property transfer',
      'High-performance REST / GraphQL API documentation with automated Swagger / OpenAPI specs',
      'Automated CI/CD pipelines with linting, unit testing, and zero-downtime deployment scripts',
      'Comprehensive database migrations, seeding scripts, and data recovery runbooks',
      'Component design system library aligned with your corporate branding'
    ],
    process: [
      {
        step: '01',
        title: 'Technical Scoping & Architecture',
        desc: 'We dissect your system requirements, define data models, and establish engineering constraints.'
      },
      {
        step: '02',
        title: 'Modular Prototype & UI Flow',
        desc: 'Interactive prototypes and system wireframes validated for usability and performance benchmarks.'
      },
      {
        step: '03',
        title: 'Sprint-Based Implementation',
        desc: 'Iterative two-week sprints with automated unit tests, strict type-checking, and bi-weekly staging builds.'
      },
      {
        step: '04',
        title: 'Staging, Auditing & Cloud Release',
        desc: 'Comprehensive QA, automated load tests, security hardening, and zero-downtime production deployment.'
      }
    ],
    faqs: [
      {
        q: 'How do you handle scalability as our user base grows?',
        a: 'We build with stateless backend layers, containerized Docker instances managed via Kubernetes or auto-scaling clusters, Redis distributed caching, and connection-pooled databases to scale horizontally.'
      },
      {
        q: 'Do we own the full source code and intellectual property?',
        a: 'Yes, 100%. All repositories, design files, deployment configurations, and IP are completely transferred to your organization upon delivery.'
      },
      {
        q: 'Can you integrate with our existing legacy systems or databases?',
        a: 'Absolutely. We regularly engineer secure API adapters, ETL pipelines, and anti-corruption layers to connect modern frontends with legacy ERPs, databases, or third-party enterprise tools.'
      },
      {
        q: 'What kind of ongoing support and maintenance do you offer?',
        a: 'We offer flexible SLA-backed maintenance plans including uptime monitoring, critical security patching, dependency updates, and dedicated engineering sprints.'
      }
    ]
  },
  {
    id: 'cloud-architecture-devops',
    title: 'Cloud Architecture & DevOps',
    badge: 'Infrastructure as Code & Reliability',
    icon: Cloud,
    shortDesc: 'Automated CI/CD pipelines, Docker containerization, and Kubernetes cluster management on AWS & Azure.',
    tagline: 'Zero-downtime deployments, bulletproof cloud foundations, and automated GitOps infrastructure.',
    fullDesc: 'Technoplus Solutions designs and manages resilient cloud environments built for uninterrupted business continuity. We help engineering teams eliminate manual operations through Infrastructure as Code (IaC) with Terraform, automated GitOps deployment pipelines, and scalable Kubernetes clusters across AWS, Azure, and Google Cloud. Our cloud architects prioritize cost transparency, military-grade access control, and proactive automated monitoring.',
    stats: [
      { value: '99.99%', label: 'Target Availability' },
      { value: '40%+', label: 'Avg Cloud Cost Reduction' },
      { value: 'Zero', label: 'Deployment Downtime' },
      { value: '24/7', label: 'Proactive Alerting' }
    ],
    tech: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions', 'Prometheus', 'Grafana', 'Helm', 'Azure'],
    capabilities: [
      {
        title: 'Infrastructure as Code (Terraform & OpenTofu)',
        desc: 'Declarative, version-controlled cloud infrastructure reproducible across staging, testing, and production environments.'
      },
      {
        title: 'Containerization & Kubernetes Orchestration',
        desc: 'Production-ready EKS / AKS clusters, auto-scaling nodes, Helm charts, and service meshes with minimal resource waste.'
      },
      {
        title: 'Automated CI/CD Pipelines',
        desc: 'Zero-touch deployment workflows with GitHub Actions or GitLab CI, automated testing gates, and blue-green release strategies.'
      },
      {
        title: 'Observability, APM & Real-Time Alerting',
        desc: 'End-to-end telemetry with Prometheus, Grafana, OpenTelemetry, and Datadog to detect anomalies before they impact end users.'
      },
      {
        title: 'Cloud Cost Optimization (FinOps)',
        desc: 'Rigorous architectural audits to eliminate unattached storage, resize over-provisioned compute, and implement Spot/Reserved instances.'
      },
      {
        title: 'Disaster Recovery & Multi-Region Failover',
        desc: 'Automated database backups, cross-region replication, and failover runbooks tested for stringent RTO and RPO objectives.'
      }
    ],
    deliverables: [
      'Modular, reusable Terraform / IaC repositories with multi-environment configurations',
      'Automated CI/CD pipeline definitions with built-in security scans and rollback triggers',
      'Production Kubernetes manifests, Helm charts, and ingress routing controllers',
      'Grafana dashboards and Prometheus alerting rule configurations',
      'Comprehensive Disaster Recovery (DR) playbook and Architecture Runbook'
    ],
    process: [
      {
        step: '01',
        title: 'Infrastructure & Security Audit',
        desc: 'We examine your existing cloud accounts, security groups, billing, and operational bottlenecks.'
      },
      {
        step: '02',
        title: 'Target Architecture Design',
        desc: 'We produce detailed cloud topology blueprints specifying VPCs, subnets, clusters, and IAM policies.'
      },
      {
        step: '03',
        title: 'IaC & Pipeline Implementation',
        desc: 'We write declarative Terraform scripts and configure automated CI/CD pipelines in isolated staging environments.'
      },
      {
        step: '04',
        title: 'Migration, Verification & Handover',
        desc: 'Seamless data migration, DNS cutover with zero downtime, and engineering team training.'
      }
    ],
    faqs: [
      {
        q: 'Which cloud providers do you specialize in?',
        a: 'Our primary expertise is in AWS and Microsoft Azure, though we also engineer multi-cloud setups and Google Cloud Platform (GCP) environments.'
      },
      {
        q: 'How do you ensure zero downtime during infrastructure migrations?',
        a: 'We use blue-green deployments, DNS traffic shifting, and backward-compatible database schema migrations to ensure users experience zero disruption.'
      },
      {
        q: 'Can you help us reduce our monthly cloud spending?',
        a: 'Yes. Our FinOps audits routinely reduce monthly infrastructure bills by 30% to 50% through rightsizing, container consolidation, caching, and reserved capacity planning.'
      }
    ]
  },
  {
    id: 'ai-data-integration',
    title: 'AI & Data Integration',
    badge: 'Intelligent Systems & Automation',
    icon: Cpu,
    shortDesc: 'Machine learning workflows, document extraction, semantic search, and internal business automation.',
    tagline: 'Transform proprietary enterprise data into intelligent, automated operational workflows.',
    fullDesc: 'We integrate applied artificial intelligence directly into core business operations. Rather than generic wrappers, Technoplus engineers production-grade machine learning pipelines, Retrieval-Augmented Generation (RAG) architectures, semantic search engines, and intelligent document extraction systems. We prioritize data privacy, strict access governance, and predictable low-latency model inference.',
    stats: [
      { value: '<200ms', label: 'Semantic Query Speed' },
      { value: '99.5%', label: 'Doc Extraction Accuracy' },
      { value: '100%', label: 'Private Data Isolation' },
      { value: '10x', label: 'Workflow Acceleration' }
    ],
    tech: ['Python', 'FastAPI', 'Vector Search', 'LangChain', 'OpenAI', 'Pinecone', 'Qdrant', 'PyTorch', 'Hugging Face', 'Celery'],
    capabilities: [
      {
        title: 'Enterprise Retrieval-Augmented Generation (RAG)',
        desc: 'Custom knowledge bases grounded exclusively in your internal company documents, manuals, and databases.'
      },
      {
        title: 'Vector Search & Semantic Retrieval',
        desc: 'High-dimensional embeddings using Qdrant and Pinecone for lightning-fast conceptual search across unstructured datasets.'
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        desc: 'Automated extraction and structured JSON conversion of invoices, legal contracts, reports, and PDFs with human-in-the-loop review.'
      },
      {
        title: 'Fine-Tuned Specialized Language Models',
        desc: 'Domain-specific fine-tuning and quantization to achieve high accuracy for your company vocabulary without prohibitive cloud GPU costs.'
      },
      {
        title: 'Internal Business Process Automation',
        desc: 'Autonomous AI agents and background workers that automate repetitive multi-step customer support and data reconciliation workflows.'
      },
      {
        title: 'AI Governance & Data Privacy Guardrails',
        desc: 'Strict PII redaction, prompt injection defense, hallucination monitoring, and local / on-premise model deployment options.'
      }
    ],
    deliverables: [
      'Custom Python / FastAPI microservices exposing scalable RESTful inference endpoints',
      'Vector database schemas with automated indexing, chunking, and embedding pipelines',
      'Evaluation benchmarks and automated test harnesses verifying response accuracy and latency',
      'Data privacy and security audit documentation ensuring complete compliance',
      'Administrative UI for prompt tuning, knowledge base ingestion, and audit trails'
    ],
    process: [
      {
        step: '01',
        title: 'Data Audit & Feasibility Study',
        desc: 'We assess your proprietary datasets, format distributions, and establish accuracy success metrics.'
      },
      {
        step: '02',
        title: 'Pipeline & RAG Architecture',
        desc: 'We design tokenization, chunking, vector embedding, and prompt governance structures.'
      },
      {
        step: '03',
        title: 'Model Development & Calibration',
        desc: 'We build and test the inference pipelines, tuning prompts and embeddings against benchmark test suites.'
      },
      {
        step: '04',
        title: 'Production API & App Integration',
        desc: 'We deploy the containerized services with continuous telemetry, caching, and user feedback loops.'
      }
    ],
    faqs: [
      {
        q: 'Will our proprietary corporate data be used to train public models?',
        a: 'Never. We enforce strict enterprise contracts with zero-retention policies, or deploy open-source models (Llama, Mistral) in your private VPC or on-premise hardware.'
      },
      {
        q: 'How do you prevent AI hallucinations?',
        a: 'We employ grounded Retrieval-Augmented Generation (RAG) with strict citation verification, temperature controls, guardrails, and deterministic validation schemas.'
      },
      {
        q: 'Can this integrate with our existing ERP or CRM?',
        a: 'Yes. Our AI microservices communicate via standard REST or gRPC APIs, seamlessly integrating into Salesforce, SAP, HubSpot, or custom databases.'
      }
    ]
  },
  {
    id: 'security-auditing-code-reviews',
    title: 'Security Auditing & Code Reviews',
    badge: 'Vulnerability Assessment & Hardening',
    icon: Shield,
    shortDesc: 'System vulnerability reviews, access control hardening, and compliance readiness assessments.',
    tagline: 'Defend your software infrastructure and satisfy enterprise compliance requirements.',
    fullDesc: 'Security is non-negotiable in modern digital enterprises. Technoplus conducts thorough, adversarial security assessments, static and dynamic application security testing (SAST/DAST), and comprehensive architecture audits. We identify hidden injection flaws, unauthorized privilege escalations, flawed cryptographic practices, and misconfigured cloud assets before malicious actors can exploit them.',
    stats: [
      { value: '100%', label: 'OWASP Top 10 Coverage' },
      { value: 'Zero-Trust', label: 'Architecture Model' },
      { value: 'SOC2 / ISO', label: 'Compliance Readiness' },
      { value: 'Detailed', label: 'Remediation Roadmaps' }
    ],
    tech: ['ISO 27001 Prep', 'Code Audits', 'Zero-Trust', 'OWASP ZAP', 'SonarQube', 'Snyk', 'Trivy', 'Burp Suite', 'WAF Hardening'],
    capabilities: [
      {
        title: 'Static & Dynamic Code Analysis (SAST / DAST)',
        desc: 'In-depth automated and manual peer code reviews detecting race conditions, SQL injection, XSS, and dependency CVEs.'
      },
      {
        title: 'API Security & Penetration Testing',
        desc: 'Systematic probing of authentication handshakes, token expirations, CORS policies, rate limiting, and broken object-level authorization (BOLA).'
      },
      {
        title: 'Cloud Configuration & IAM Hardening',
        desc: 'Auditing AWS/Azure permission boundaries, removing wildcards, enforcing least privilege, and encrypting data at rest and in transit.'
      },
      {
        title: 'Compliance Readiness (ISO 27001 & SOC 2)',
        desc: 'Technical control preparation, policy drafting assistance, and infrastructure verification for third-party security audits.'
      },
      {
        title: 'Third-Party Dependency & SBOM Auditing',
        desc: 'Software Bill of Materials (SBOM) generation and automated vulnerability tracking for all open-source libraries in your stack.'
      },
      {
        title: 'Incident Response & Patch Remediation',
        desc: 'Actionable patch instructions, code fixes, and defensive architectural changes ready for immediate merge by your engineers.'
      }
    ],
    deliverables: [
      'Executive Summary Report for board members and compliance officers with CVSS vulnerability scoring',
      'Detailed Engineering Remediation Guide containing exact line-by-line code patches',
      'Automated security scanning configurations integrated into your GitHub Actions / GitLab CI',
      'IAM permission mapping and cloud security hardening checklist',
      'Certificate of Security Assessment upon successful remediation of identified issues'
    ],
    process: [
      {
        step: '01',
        title: 'Reconnaissance & Threat Modeling',
        desc: 'We map attack surfaces, trust boundaries, and sensitive data workflows throughout your application.'
      },
      {
        step: '02',
        title: 'Automated & Manual Penetration Testing',
        desc: 'Our security specialists conduct deep manual audits combined with enterprise SAST/DAST tooling.'
      },
      {
        step: '03',
        title: 'Vulnerability Triage & Scoring',
        desc: 'We evaluate real-world impact, assign CVSS scores, and eliminate false positives.'
      },
      {
        step: '04',
        title: 'Remediation Guidance & Re-Testing',
        desc: 'We deliver exact fix recommendations, assist your developers, and re-test to verify resolution.'
      }
    ],
    faqs: [
      {
        q: 'Do you disrupt our production systems during testing?',
        a: 'No. Security tests are performed in dedicated staging environments or during scheduled off-peak maintenance windows with non-destructive payloads.'
      },
      {
        q: 'How long does a comprehensive security audit take?',
        a: 'A standard comprehensive review typically takes 1 to 2 weeks, depending on the complexity of the codebase and the number of microservices.'
      },
      {
        q: 'Do you help us fix the code, or just give us a list of problems?',
        a: 'Unlike traditional auditors who simply provide a generic PDF, our engineers supply concrete code patches, pull requests, and direct developer pair-sessions.'
      }
    ]
  },
  {
    id: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    badge: 'Design Systems & Prototyping',
    icon: Palette,
    shortDesc: 'Intuitive user interface design, accessible component libraries, and interactive prototypes in Figma.',
    tagline: 'Craft digital interfaces that convert users, simplify complex workflows, and inspire trust.',
    fullDesc: 'A powerful application is only as effective as the experience it delivers. At Technoplus, our design team combines deep engineering awareness with human-centered product design. We produce cohesive design systems, accessible WCAG 2.1 compliant component libraries, and interactive Figma prototypes that streamline the handover from design to production code without friction or guesswork.',
    stats: [
      { value: '100%', label: 'WCAG 2.1 AA Compliance' },
      { value: 'Figma', label: 'Interactive Prototypes' },
      { value: 'Tokenized', label: 'Design System Variables' },
      { value: 'Fast', label: 'Dev Handoff & Alignment' }
    ],
    tech: ['Figma', 'Design Systems', 'Prototyping', 'UX Audits', 'Design Tokens', 'Tailwind/CSS', 'Storybook', 'User Testing'],
    capabilities: [
      {
        title: 'Scalable Enterprise Design Systems',
        desc: 'Complete Figma UI kits with semantic color tokens, typography scales, iconography, and multi-state component variants.'
      },
      {
        title: 'Interactive High-Fidelity Prototypes',
        desc: 'Clickable Figma prototypes with realistic state transitions, user journeys, and micro-interactions for rapid stakeholder validation.'
      },
      {
        title: 'Complex SaaS Workflow Simplification',
        desc: 'Transforming convoluted business processes, multi-step wizards, and data grids into clear, intuitive user flows.'
      },
      {
        title: 'Accessibility (A11y) & Usability Audits',
        desc: 'Enforcing WCAG 2.1 AA compliance, color contrast ratios, screen-reader navigation, and keyboard accessibility.'
      },
      {
        title: 'Developer-Ready Asset Specifications',
        desc: 'Precise responsive layouts, spacing variables, and token mapping to eliminate back-and-forth during frontend engineering.'
      },
      {
        title: 'User Research & Journey Mapping',
        desc: 'User persona definition, qualitative feedback sessions, and journey mapping to prioritize high-impact feature releases.'
      }
    ],
    deliverables: [
      'Comprehensive Figma design file containing complete UI component library and typography guidelines',
      'Interactive, clickable prototypes suitable for usability testing and investor presentations',
      'Exportable design token specifications (JSON / CSS variables) ready for frontend consumption',
      'Responsive layout designs for desktop, tablet, and mobile breakpoints',
      'Design-to-code documentation and Storybook alignment guide'
    ],
    process: [
      {
        step: '01',
        title: 'User Research & Requirements Gathering',
        desc: 'We align on user personas, core business goals, and competitive benchmarks.'
      },
      {
        step: '02',
        title: 'Wireframing & Information Architecture',
        desc: 'We map screen hierarchies, structural user flows, and low-fidelity layout concepts.'
      },
      {
        step: '03',
        title: 'High-Fidelity Visual Design & Tokens',
        desc: 'We construct polished visual interfaces with custom design tokens, dark/light themes, and typography.'
      },
      {
        step: '04',
        title: 'Prototyping & Developer Handoff',
        desc: 'We build interactive click-through prototypes and conduct thorough engineering alignment reviews.'
      }
    ],
    faqs: [
      {
        q: 'Do your designers understand frontend development constraints?',
        a: 'Yes. Our designers work closely with our React/TypeScript engineers to ensure every component is feasible, performant, and easy to build in code.'
      },
      {
        q: 'Can you work within our existing brand guidelines?',
        a: 'Absolutely. We can either build upon your existing brand identities or help modernize your palette, typography, and component library from scratch.'
      },
      {
        q: 'What software do you use for design deliverables?',
        a: 'We primarily design in Figma, utilizing modern auto-layout, nested component variants, and tokenized variables for maximum clarity.'
      }
    ]
  },
  {
    id: 'technical-advisory-consulting',
    title: 'Technical Advisory & Consulting',
    badge: 'Engineering Roadmaps & Governance',
    icon: Briefcase,
    shortDesc: 'Architecture planning, legacy code modernization, and engineering best-practice guidance.',
    tagline: 'Make confident architectural decisions with seasoned engineering leadership on your side.',
    fullDesc: 'Navigating complex technological transitions requires proven architectural experience. Technoplus serves as a trusted advisory partner for CTOs, founders, and engineering executives. We evaluate architectural trade-offs, conduct deep technical due diligence, define modernization roadmaps, and mentor internal development teams on engineering best practices, code maintainability, and cloud scalability.',
    stats: [
      { value: '6+ Years', label: 'Advisory Leadership' },
      { value: '120+', label: 'Platforms Evaluated' },
      { value: 'Fractional', label: 'CTO / Architect Model' },
      { value: 'Direct', label: 'Senior Architect Access' }
    ],
    tech: ['Architecture Roadmaps', 'Microservices', 'Refactoring', 'Tech Due Diligence', 'System Design', 'Domain-Driven Design'],
    capabilities: [
      {
        title: 'Enterprise Architecture Roadmapping',
        desc: 'Comprehensive technical blueprints detailing database strategies, service boundaries, and 12-to-24 month technical milestones.'
      },
      {
        title: 'Legacy Modernization Strategies',
        desc: 'De-risked migration blueprints to transition legacy codebases to modern stacks without interrupting business operations.'
      },
      {
        title: 'Technical Due Diligence for Investors',
        desc: 'Objective code quality, intellectual property, infrastructure scalability, and security risk assessments for M&A and funding rounds.'
      },
      {
        title: 'Engineering Organization & Best Practices',
        desc: 'Structuring CI/CD gates, pull request standards, automated linting, test-driven culture, and agile delivery rhythms.'
      },
      {
        title: 'Database Scalability & Query Optimization',
        desc: 'Bottleneck identification in relational and NoSQL databases, connection pooling advice, and sharding strategies.'
      },
      {
        title: 'Fractional Chief Architect Support',
        desc: 'Direct, weekly strategic oversight from principal architects to evaluate high-stakes technical decisions.'
      }
    ],
    deliverables: [
      'Comprehensive Technical Architecture Blueprint with system topology and sequence diagrams',
      'Legacy System Modernization & Risk Mitigation Roadmap with milestone timelines',
      'Technical Due Diligence Evaluation Report with risk scores and remediation cost estimates',
      'Engineering Best Practices Manual covering code reviews, branching, and automated quality gates',
      'Regular architecture review sessions and direct on-demand advisory access'
    ],
    process: [
      {
        step: '01',
        title: 'System Discovery & Stakeholder Interviews',
        desc: 'We interview your technical leaders, review code repositories, and audit current workflows.'
      },
      {
        step: '02',
        title: 'Bottleneck & Risk Analysis',
        desc: 'We pinpoint scalability bottlenecks, technical debt, security liabilities, and architectural anti-patterns.'
      },
      {
        step: '03',
        title: 'Strategic Roadmap Formulation',
        desc: 'We prepare an actionable, prioritized architectural plan with concrete timelines and cost-benefit analysis.'
      },
      {
        step: '04',
        title: 'Execution Mentorship & Oversight',
        desc: 'We guide your engineering squads through implementation sprints, providing senior architectural reviews.'
      }
    ],
    faqs: [
      {
        q: 'How does fractional consulting work with our existing team?',
        a: 'We act as an extension of your leadership. We participate in key architectural reviews, mentor engineers on tricky problems, and validate system designs.'
      },
      {
        q: 'Can you help us evaluate candidates or restructure our engineering team?',
        a: 'Yes. We frequently conduct technical interviews for senior engineering hires and advise on team topologies (e.g. platform squads vs. product squads).'
      },
      {
        q: 'What is the format of your technical due diligence reports?',
        a: 'We provide structured reports featuring executive scorecards, code quality metrics, architectural debt analysis, licensing compliance, and actionable remediation checklists.'
      }
    ]
  }
];

export const getServiceById = (id) => {
  return servicesData.find((service) => service.id === id);
};
