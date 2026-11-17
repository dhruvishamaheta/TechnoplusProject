export const projectsData = [
  {
    id: 'finpulse-trading-platform',
    image: '/images/finpulse.jpg',
    title: 'FinPulse: Real-Time Fintech Trading & Settlement Platform',
    client: 'Global Financial Services Partner',
    category: 'Fintech & Enterprise SaaS',
    filterCategory: 'Enterprise SaaS',
    timeline: '4 Months',
    status: 'Completed & In Production',
    badge: 'Enterprise SaaS',
    shortDesc: 'High-frequency trading telemetry and automated multi-currency reconciliation engine processing $40M+ in daily transaction volume.',
    fullDesc: 'FinPulse is an enterprise-grade fintech platform engineered to handle sub-second financial trades, automated multi-currency cross-border reconciliations, and continuous regulatory reporting. Built with an event-driven microservices architecture, FinPulse processes high-volume telemetry with zero dropped orders and strict audit tracing.',
    challenge: 'The client previously relied on a fragmented batch system with 4-hour settlement delays, recurrent lockups during high volatility trading hours, and lack of real-time auditability across distributed broker nodes.',
    solution: 'Technoplus designed an event-driven architecture using Apache Kafka for order distribution, Redis in-memory caching for real-time order books, and high-performance Node.js/TypeScript microservices connected to PostgreSQL with strict row-level locking. On the frontend, a React 19 dashboard streams live market feeds via WebSockets with sub-45ms latency.',
    stats: [
      { value: '$40M+', label: 'Daily Volume Processed' },
      { value: '<45ms', label: 'WebSocket P99 Latency' },
      { value: '99.99%', label: 'Production Uptime' },
      { value: '100%', label: 'Automated Audit Logging' }
    ],
    tech: ['React 19', 'Node.js', 'TypeScript', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    deliverables: [
      'High-throughput Broker Portal with customizable trading widgets and dark-mode charts',
      'Asynchronous Settlement API Engine capable of 4,000+ transactions per second',
      'Automated multi-currency reconciliation worker with bank ledger verification',
      'Real-time regulatory audit trail generator with automated CSV/PDF compliance export'
    ],
    impact: 'Reduced settlement latency from 4 hours to under 3 seconds, eliminated manual reconciliation errors, and expanded client capacity to onboard 20+ institutional trading firms.'
  },
  {
    id: 'cloudorbit-kubernetes-devops',
    image: '/images/cloudorbit.jpg',
    title: 'CloudOrbit: Multi-Region Kubernetes & Infrastructure Orchestration',
    client: 'Enterprise Logistics Conglomerate',
    category: 'Cloud & Infrastructure',
    filterCategory: 'Cloud & DevOps',
    timeline: '3 Months',
    status: 'Completed & In Production',
    badge: 'Cloud & DevOps',
    shortDesc: 'Automated zero-downtime GitOps infrastructure powering 80+ microservices across AWS multi-region EKS clusters.',
    fullDesc: 'CloudOrbit is an automated cloud infrastructure platform built for a global logistics provider. It orchestrates 80+ distributed microservices across AWS regions using Infrastructure-as-Code, automated GitOps deployment pipelines, and intelligent horizontal pod autoscaling.',
    challenge: 'Manual cloud deployments previously caused 20-30 minute downtime windows every release, inconsistent staging and production environments, and uncontrolled cloud spending spikes reaching 45% over budget.',
    solution: 'We architected a unified Infrastructure as Code (IaC) setup using Terraform and OpenTofu, integrated ArgoCD for declarative GitOps continuous delivery, and established blue-green deployment gates with automated rollbacks upon error spike detection.',
    stats: [
      { value: 'Zero', label: 'Deployment Downtime' },
      { value: '42%', label: 'Cloud Cost Reduction' },
      { value: '15 Min', label: 'Disaster Recovery (RTO)' },
      { value: '80+', label: 'Microservices Managed' }
    ],
    tech: ['Kubernetes (EKS)', 'Terraform', 'AWS', 'Docker', 'ArgoCD', 'Prometheus', 'Grafana', 'GitHub Actions'],
    deliverables: [
      'Multi-environment declarative Terraform repositories with strict security baseline',
      'Automated GitOps deployment pipelines with canary progressive delivery',
      'Centralized Prometheus and Grafana observability stack with PagerDuty alerting',
      'Automated Disaster Recovery (DR) playbook with cross-region failover automation'
    ],
    impact: 'Transformed release cycles from bi-weekly stressful cutovers to multiple zero-downtime deployments per day while cutting monthly AWS expenses by 42%.'
  },
  {
    id: 'medisync-healthcare-telemedicine',
    image: '/images/medisync.jpg',
    title: 'MediSync: HIPAA-Compliant Healthcare Telemedicine & Records Portal',
    client: 'Regional Healthcare Network',
    category: 'Healthcare & Web Platforms',
    filterCategory: 'Enterprise SaaS',
    timeline: '5 Months',
    status: 'Completed & In Production',
    badge: 'Healthcare Tech',
    shortDesc: 'Secure patient telemedicine portal with encrypted WebRTC video consultations, automated appointment scheduling, and EHR integration.',
    fullDesc: 'MediSync is an enterprise clinical telemedicine and patient health records platform connecting over 250,000 patients with specialized healthcare practitioners. It features peer-to-peer encrypted HD video consultations, automated calendar dispatching, and secure health record exchange.',
    challenge: 'Legacy hospital intake systems caused high patient no-show rates (up to 24%), fragmented records between specialized clinics, and vulnerabilities regarding HIPAA data security regulations.',
    solution: 'Engineered an end-to-end encrypted WebRTC consultation portal integrated directly with hospital FHIR/HL7 electronic health records, dual-factor patient identity verification, and automated SMS/email reminders.',
    stats: [
      { value: '250K+', label: 'Patients Supported' },
      { value: '100%', label: 'HIPAA & SOC 2 Compliant' },
      { value: '38%', label: 'No-Show Rate Drop' },
      { value: '99.8%', label: 'Video Call Reliability' }
    ],
    tech: ['React', 'WebRTC', 'Node.js', 'Express', 'MongoDB', 'Redis', 'AWS KMS', 'Tailwind/CSS'],
    deliverables: [
      'Clinician consultation workspace with integrated EHR notes and e-prescriptions',
      'Accessible, mobile-responsive patient portal with one-click consultation launch',
      'WebRTC media gateway with adaptive bitrate streaming for low-bandwidth rural areas',
      'Encrypted medical vault storing lab reports with role-based practitioner access'
    ],
    impact: 'Enabled 40+ clinical departments to deliver remote patient care seamlessly, reduced clinic no-shows by 38%, and ensured 100% HIPAA compliance.'
  },
  {
    id: 'omnidoc-ai-document-intelligence',
    image: '/images/omnidoc.jpg',
    title: 'OmniDoc AI: Intelligent Document Extraction & Semantic RAG System',
    client: 'Corporate Legal & Financial Advisory Firm',
    category: 'AI & Data Integration',
    filterCategory: 'Artificial Intelligence',
    timeline: '3.5 Months',
    status: 'Completed & In Production',
    badge: 'Artificial Intelligence',
    shortDesc: 'Enterprise document extraction and semantic vector search system parsing thousands of complex multi-page contracts and tax filings.',
    fullDesc: 'OmniDoc AI is a production retrieval-augmented generation and intelligent document extraction platform. It ingests thousands of unstructured corporate contracts, NDA filings, and financial statements, converting them into structured relational data and offering semantic natural language search.',
    challenge: 'Legal attorneys spent 6+ hours manually reading and indexing clauses across 100+ page contracts, creating severe operational bottlenecks and human oversight risks during M&A due diligence.',
    solution: 'Technoplus built a distributed ingestion pipeline using OCR microservices, Qdrant vector database, and cross-encoder rerankers with private embeddings. Attorneys query contracts in natural English and receive exact clause citations with 99.4% accuracy.',
    stats: [
      { value: '92%', label: 'Faster Contract Review' },
      { value: '99.4%', label: 'Clause Accuracy Rate' },
      { value: '<200ms', label: 'Semantic Query Speed' },
      { value: '1.2M+', label: 'Pages Processed' }
    ],
    tech: ['Python', 'FastAPI', 'Qdrant', 'PyTorch', 'LangChain', 'PostgreSQL', 'Docker', 'Celery'],
    deliverables: [
      'High-throughput asynchronous document ingestion queue supporting PDF, DOCX, and scanned images',
      'Semantic clause search engine with source paragraph highlighting and citation tracing',
      'Administrative dashboard for prompt governance and evaluation accuracy benchmarking',
      'Exportable JSON & Excel extraction schemas mapped directly to corporate ERPs'
    ],
    impact: 'Cut legal contract review time by 92%, processed over 1.2 million pages with near-zero error rates, and saved over 1,500 attorney hours per quarter.'
  },
  {
    id: 'supplysphere-inventory-logistics',
    image: '/images/supplysphere.jpg',
    title: 'SupplySphere: Global Supply Chain & Predictive Inventory Suite',
    client: 'Multinational Distribution Enterprise',
    category: 'Enterprise SaaS & Analytics',
    filterCategory: 'Enterprise SaaS',
    timeline: '6 Months',
    status: 'Completed & In Production',
    badge: 'Supply Chain Tech',
    shortDesc: 'Predictive inventory management and supply chain tracking system connecting 14 warehouses with IoT sensor streams.',
    fullDesc: 'SupplySphere is a comprehensive supply chain command platform engineered for international distributors. It unites warehouse operations across 14 global hubs with real-time shipment geolocation, temperature/humidity sensor tracking, and predictive inventory reorder forecasting.',
    challenge: 'Disconnected spreadsheets and regional databases caused inventory stock-outs, perishable cargo spoilage, and over $1.8M in lost seasonal inventory.',
    solution: 'Developed a unified React/Next.js dashboard backed by high-throughput PostgreSQL and MQTT brokers. Integrated predictive machine learning models to forecast regional seasonal demand and automate supplier purchase orders.',
    stats: [
      { value: '$1.4M', label: 'Saved in Year 1' },
      { value: '28%', label: 'Waste Reduction' },
      { value: '14 Hubs', label: 'Unified Operations' },
      { value: '<1 Sec', label: 'IoT Stream Sync' }
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MQTT / IoT', 'Redis', 'Chart.js'],
    deliverables: [
      'Real-time global shipment tracker with interactive interactive vector maps and telemetry alerts',
      'Automated purchase order dispatching engine integrated with supplier APIs',
      'Inventory health monitor tracking shelf-life and predictive turnover metrics',
      'Executive analytics suite with exportable revenue and inventory turnover models'
    ],
    impact: 'Eliminated stock-outs across 14 distribution centers, prevented perishable cargo spoilage through real-time alerts, and generated $1.4M in operational savings in year one.'
  },
  {
    id: 'cybershield-devsecops-auditor',
    image: '/images/cybershield.jpg',
    title: 'CyberShield: Automated DevSecOps & Security Vulnerability Auditor',
    client: 'Fintech Banking Ecosystem',
    category: 'Cybersecurity & Auditing',
    filterCategory: 'Security',
    timeline: '3 Months',
    status: 'Completed & In Production',
    badge: 'Cybersecurity',
    shortDesc: 'Automated vulnerability scanner and static code security analyzer integrated directly into developer pull request workflows.',
    fullDesc: 'CyberShield is a developer-first application security platform designed to detect, triage, and patch OWASP Top 10 vulnerabilities directly within CI/CD pipelines. It prevents security regression before code reaches production environments.',
    challenge: 'Periodic manual audits conducted every 3 months failed to catch fast-moving microservice changes, causing delayed release approvals and vulnerability backlog accumulation.',
    solution: 'Constructed an automated security analysis bot integrating SAST, DAST, and software bill of materials (SBOM) scanning. It analyzes GitHub/GitLab pull requests in under 90 seconds and recommends line-by-line security patches.',
    stats: [
      { value: '100%', label: 'Automated PR Coverage' },
      { value: '85%', label: 'Fewer Vulnerabilities' },
      { value: '<90s', label: 'Avg Pipeline Scan Time' },
      { value: 'SOC 2', label: 'Readiness Achieved' }
    ],
    tech: ['Node.js', 'Python', 'OWASP ZAP', 'Docker', 'GitHub API', 'PostgreSQL', 'React', 'Tailwind/CSS'],
    deliverables: [
      'Automated GitHub Actions security review bot commenting exact remediation patches',
      'Enterprise security posture dashboard with vulnerability severity trends (CVSS 3.1)',
      'Dependency SBOM generator with continuous zero-day vulnerability alerts',
      'Automated compliance evidence export tool for SOC 2 Type II audit readiness'
    ],
    impact: 'Reduced production security flaws by 85%, accelerated release cycles from months to days, and provided verified compliance evidence for enterprise banking audits.'
  }
];

export const getProjectById = (id) => {
  return projectsData.find((p) => p.id === id);
};
