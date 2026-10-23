export const blogsData = [
  {
    id: 'building-resilient-multi-tenant-saas-react-nodejs',
    title: 'Architecting Resilient Multi-Tenant SaaS with React 19 and Node.js',
    slug: 'building-resilient-multi-tenant-saas-react-nodejs',
    badge: 'Software Engineering',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'Oct 18, 2026',
    author: {
      name: 'Dhruvisha Maheta',
      role: 'Chief Technical Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'How to structure isolated tenant databases, enforce role-based access control, and optimize sub-second response times in high-throughput enterprise SaaS platforms.',
    tags: ['React 19', 'Node.js', 'PostgreSQL', 'Multi-Tenancy', 'TypeScript'],
    featured: true,
    intro: 'Building multi-tenant enterprise software requires balancing physical data isolation, connection efficiency, and lightning-fast user experiences. In this deep dive, we explore how Technoplus architectures multi-tenant SaaS platforms that scale smoothly to millions of daily database queries while guaranteeing complete privacy between organization workspaces.',
    sections: [
      {
        heading: '1. Tenant Isolation Strategies: Schema vs. Row-Level Security',
        text: 'The fundamental architectural decision in multi-tenant systems is how data boundaries are established. While pure database-per-tenant offers absolute isolation, it incurs severe infrastructure overhead for hundreds of tenants. Conversely, shared schemas with tenant_id columns require bulletproof application-level filtering.',
        callout: 'Rule of Thumb: For enterprise clients with stringent compliance (HIPAA, SOC 2, ISO 27001), PostgreSQL Schema-per-Tenant or Row-Level Security (RLS) offers the optimal balance between performance and cryptographic guarantees.',
        code: {
          language: 'sql',
          snippet: `-- Enable Row-Level Security on PostgreSQL
ALTER TABLE organization_invoices ENABLE ROW LEVEL SECURITY;

-- Enforce tenant isolation policy based on session context
CREATE POLICY tenant_isolation_policy ON organization_invoices
  AS RESTRICTIVE
  USING (tenant_id = current_setting('app.current_tenant_id')::uuid);`
        }
      },
      {
        heading: '2. Connection Pooling and Context Propagation in Node.js',
        text: 'In asynchronous Node.js runtimes, passing tenant context through every function parameter quickly leads to fragile code. We utilize AsyncLocalStorage to propagate tenant identifiers seamlessly across the request lifecycle without polluting service signatures.',
        code: {
          language: 'typescript',
          snippet: `import { AsyncLocalStorage } from 'node:async_hooks';

interface TenantContext {
  tenantId: string;
  userId: string;
  role: string;
}

export const tenantStorage = new AsyncLocalStorage<TenantContext>();

export function getTenantId(): string {
  const store = tenantStorage.getStore();
  if (!store?.tenantId) {
    throw new Error('Tenant context missing from execution scope');
  }
  return store.tenantId;
}`
        }
      },
      {
        heading: '3. Optimizing React 19 Frontend Performance with Sub-Domain Routing',
        text: 'On the frontend, enterprise users expect their own vanity sub-domains (e.g., acme.platform.com) and instant page hydration. With modern React 19 server components and client-side caching, we isolate theme tokens, tenant feature flags, and custom assets at the edge.',
        bulletPoints: [
          'Edge middleware extracts and verifies the tenant hostname before routing.',
          'Dynamic module federation allows enterprise tenants to load custom plugins.',
          'Distributed Redis caching ensures tenant configurations load in under 15ms.'
        ]
      }
    ],
    keyTakeaways: [
      'Always enforce tenant boundaries at the database layer using Row-Level Security (RLS) or dedicated schemas.',
      'Use AsyncLocalStorage in Node.js to prevent tenant context leaking across concurrent requests.',
      'Deploy edge caching for tenant configuration to achieve sub-100ms first-contentful paints.'
    ],
    conclusion: 'Multi-tenancy should never be an afterthought. By establishing strong architectural boundaries from day one, enterprise SaaS platforms can scale from ten to ten thousand business clients with zero downtime and uncompromising data security.'
  },
  {
    id: 'zero-downtime-kubernetes-deployments-aws',
    title: 'Zero-Downtime Kubernetes Deployments: Blue-Green Strategies on AWS EKS',
    slug: 'zero-downtime-kubernetes-deployments-aws',
    badge: 'Cloud & Infrastructure',
    category: 'Cloud & DevOps',
    readTime: '9 min read',
    date: 'Oct 10, 2026',
    author: {
      name: 'Rahul Joshi',
      role: 'Lead DevOps & Cloud Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'A practical guide to configuring Helm charts, ingress controllers, health probes, and automated rollback triggers for continuous production delivery.',
    tags: ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'CI/CD'],
    featured: false,
    intro: 'In enterprise production environments, maintenance windows and deployment downtime are relics of the past. Clients demand 99.99% availability around the clock. Here is our battle-tested blueprint for executing blue-green and progressive canary rollouts on AWS Elastic Kubernetes Service (EKS).',
    sections: [
      {
        heading: '1. Why Rolling Updates Often Drop Active Requests',
        text: 'The default Kubernetes RollingUpdate strategy stops old pods and starts new ones simultaneously. However, if your ingress controller or AWS ALB takes 15 seconds to deregister draining targets, users will experience 502 Bad Gateway errors during the cutover.',
        callout: 'Critical Configuration: Always implement preStop lifecycle hooks and readiness probes with sufficient initialDelaySeconds and failureThreshold configurations.',
        code: {
          language: 'yaml',
          snippet: `spec:
  containers:
    - name: api-service
      image: technoplus/api-service:v2.4.0
      lifecycle:
        preStop:
          exec:
            command: ["/bin/sh", "-c", "sleep 15"]
      readinessProbe:
        httpGet:
          path: /health/ready
          port: 8080
        initialDelaySeconds: 5
        periodSeconds: 5`
        }
      },
      {
        heading: '2. Implementing Blue-Green Traffic Shifting with AWS ALB Ingress',
        text: 'By separating deployments into two identical environments (Blue for live production, Green for new build), you can execute automated integration smoke tests against the Green cluster before shifting 100% of live ingress traffic in one atomic DNS or route change.',
        bulletPoints: [
          'Deploy the new image release alongside the active environment.',
          'Execute end-to-end synthetic API test suites against the staging ingress.',
          'Shift target weights smoothly from 100:0 to 0:100 via AWS ALB or Argo Rollouts.',
          'Retain the old Blue environment for 30 minutes to enable instantaneous one-click rollbacks if anomaly detection triggers.'
        ]
      }
    ],
    keyTakeaways: [
      'Graceful pod termination with preStop hooks is required to prevent 502 errors during target deregistration.',
      'Blue-Green deployments provide an immediate, zero-risk rollback guarantee.',
      'Automate your canary analysis with Prometheus metrics such as P99 latency and HTTP error rates.'
    ],
    conclusion: 'Zero-downtime releases are not just a DevOps metric—they are the bedrock of customer trust. Automating this process with Kubernetes frees development teams to ship code multiple times daily with total confidence.'
  },
  {
    id: 'scaling-rag-pipelines-enterprise-data',
    title: 'Production RAG: Overcoming Latency and Hallucinations in Enterprise Search',
    slug: 'scaling-rag-pipelines-enterprise-data',
    badge: 'Artificial Intelligence',
    category: 'Artificial Intelligence',
    readTime: '8 min read',
    date: 'Sep 28, 2026',
    author: {
      name: 'Aarav Patel',
      role: 'Principal AI & Data Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'Lessons learned deploying hybrid vector search, chunk reranking, and private embedding models across millions of unstructured internal documents.',
    tags: ['AI', 'Vector Search', 'Python', 'FastAPI', 'Qdrant'],
    featured: false,
    intro: 'While toy RAG demos are easy to build in an afternoon, production-grade enterprise retrieval systems demand high precision, sub-200ms latency, and strict citation traceability. Here is how we eliminated hallucinations and reduced latency by 65% across enterprise knowledge repositories.',
    sections: [
      {
        heading: '1. Beyond Naive Semantic Search: The Hybrid Search Imperative',
        text: 'Pure vector similarity search fails when users search for specific invoice IDs, serial codes, or precise regulatory acronyms. By combining sparse BM25 keyword matching with dense vector embeddings via Reciprocal Rank Fusion (RRF), you ensure both conceptual nuance and exact term matching.',
        callout: 'Architecture Insight: Hybrid search delivers a 28% higher Mean Reciprocal Rank (MRR) than dense vector search alone on unstructured corporate documentation.'
      },
      {
        heading: '2. The Two-Stage Retrieval and Reranking Pipeline',
        text: 'Instead of passing all retrieved chunks directly to an LLM context window, we utilize a lightweight cross-encoder reranker (e.g. BGE-Reranker) to evaluate the top 25 candidates down to the 4 most relevant chunks.',
        code: {
          language: 'python',
          snippet: `from sentence_transformers import CrossEncoder

reranker = CrossEncoder('BAAI/bge-reranker-large')

def rerank_documents(query: str, documents: list[str], top_k: int = 4):
    pairs = [[query, doc] for doc in documents]
    scores = reranker.predict(pairs)
    ranked = sorted(zip(scores, documents), reverse=True)
    return [doc for _, doc in ranked[:top_k]]`
        }
      }
    ],
    keyTakeaways: [
      'Never rely solely on dense vectors; combine dense and sparse search with Reciprocal Rank Fusion.',
      'Cross-encoder rerankers dramatically reduce context noise, preventing model hallucinations.',
      'Cache vector embeddings of static knowledge bases to cut inference costs by up to 70%.'
    ],
    conclusion: 'Enterprise AI is all about grounded factual accuracy. A rigorously engineered retrieval pipeline ensures language models act as reliable analytical engines rather than creative guessing machines.'
  },
  {
    id: 'owasp-top-10-hardening-guide-api',
    title: 'Hardening Modern Web APIs Against OWASP Top 10 Vulnerabilities',
    slug: 'owasp-top-10-hardening-guide-api',
    badge: 'Cybersecurity',
    category: 'Security',
    readTime: '6 min read',
    date: 'Sep 14, 2026',
    author: {
      name: 'Dhruvisha Maheta',
      role: 'Chief Technical Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'A deep dive into mitigating BOLA (Broken Object Level Authorization), injection vectors, and flawed cryptographic practices in distributed microservices.',
    tags: ['Security', 'Zero-Trust', 'API Design', 'OWASP', 'Auditing'],
    featured: false,
    intro: 'APIs are the primary entry points for both legitimate clients and malicious actors. According to the OWASP API Security Project, Broken Object Level Authorization (BOLA) remains the #1 exploited flaw in enterprise web systems. Here is our actionable checklist to protect your APIs.',
    sections: [
      {
        heading: '1. Preventing Broken Object Level Authorization (BOLA)',
        text: 'BOLA occurs when an endpoint accepts an arbitrary ID (such as /api/invoices/9482) and returns data without validating whether the authenticated user owns that specific resource. Simple JWT validation is not enough; resource ownership must be verified on every request.',
        code: {
          language: 'typescript',
          snippet: `// Express/Node middleware verifying resource ownership
export async function verifyInvoiceOwnership(req, res, next) {
  const { invoiceId } = req.params;
  const { organizationId } = req.user;

  const invoice = await db.invoices.findUnique({
    where: { id: invoiceId },
    select: { organizationId: true }
  });

  if (!invoice || invoice.organizationId !== organizationId) {
    return res.status(403).json({ error: 'Access forbidden: resource owner mismatch' });
  }

  next();
}`
        }
      },
      {
        heading: '2. Enforcing Strict Request Body Schemas with Zod',
        text: 'Unsanitized input is the root cause of SQL injections, prototype pollution, and unexpected crashes. By validating incoming payloads against strict runtime schemas with Zod, unexpected fields are stripped before reaching business logic.',
        bulletPoints: [
          'Reject payloads containing unregistered properties with strict parsing.',
          'Enforce rate limiting on authentication and sensitive search endpoints.',
          'Never expose database stack traces in production HTTP 500 responses.'
        ]
      }
    ],
    keyTakeaways: [
      'Authenticate identity and authorize resource ownership independently on every endpoint.',
      'Use runtime schema parsers to guarantee type safety and block malicious injection strings.',
      'Implement central logging with automated alerts for anomalous 401 and 403 request spikes.'
    ],
    conclusion: 'Defensive engineering must be woven into the fabric of your daily code reviews. Proactive security audits ensure your organization stays resilient against modern cyber threats.'
  },
  {
    id: 'design-tokens-enterprise-design-systems',
    title: 'Bridging Figma and Code: Scalable Design Token Workflows in 2026',
    slug: 'design-tokens-enterprise-design-systems',
    badge: 'Design & Experience',
    category: 'UI/UX & Design',
    readTime: '5 min read',
    date: 'Aug 30, 2026',
    author: {
      name: 'Priya Sharma',
      role: 'Head of Product Design',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'How our design engineering practice synchronizes Figma variable modes with CSS design tokens and automated Storybook component tests.',
    tags: ['Figma', 'Design Systems', 'CSS', 'Accessibility', 'Storybook'],
    featured: false,
    intro: 'The disconnect between design files and production code has traditionally caused delayed sprints and inconsistent visual quality. At Technoplus, we treat design tokens as code, providing a single source of truth across product designers and frontend engineers.',
    sections: [
      {
        heading: '1. What Are Design Tokens and Why Do They Matter?',
        text: 'Design tokens are platform-agnostic key-value pairs representing design decisions: colors, typography scales, spacing units, and border radii. Instead of hardcoding hex colors or pixel widths, developers and designers reference semantic token names.',
        callout: 'Key Insight: Changing a brand accent color from cyan to indigo requires updating exactly one token in Figma and running an automated GitHub Action to sync CSS variables.'
      },
      {
        heading: '2. The Automated Export Pipeline',
        text: 'Using Figma REST APIs and Style Dictionary, token changes committed in Figma are automatically transformed into TypeScript constants, CSS custom properties, and JSON variables.',
        code: {
          language: 'css',
          snippet: `/* Automatically compiled from Figma Variables */
:root {
  --color-brand-primary: #00f5d4;
  --color-brand-primary-hover: #26ffe3;
  --color-bg-base: #0d1119;
  --color-bg-card: rgba(22, 28, 40, 0.6);
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
}`
        }
      }
    ],
    keyTakeaways: [
      'Design tokens eliminate human translation errors between UI mocks and frontend components.',
      'Automated token export pipelines via GitHub Actions reduce design QA time by 80%.',
      'Always test dark and light modes using semantic tokens rather than hardcoded colors.'
    ],
    conclusion: 'A mature design system is an engineering accelerator. By aligning design variables directly with frontend styles, teams build faster with higher fidelity and zero guesswork.'
  },
  {
    id: 'decoupling-legacy-monoliths-strangler-fig',
    title: 'The Strangler Fig Pattern: Incrementally Decoupling Enterprise Monoliths',
    slug: 'decoupling-legacy-monoliths-strangler-fig',
    badge: 'Enterprise Architecture',
    category: 'Architecture',
    readTime: '10 min read',
    date: 'Aug 15, 2026',
    author: {
      name: 'Rahul Joshi',
      role: 'Lead DevOps & Cloud Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    excerpt: 'Step-by-step methodology for breaking apart critical legacy codebases into modern microservices without disrupting ongoing transactions or client SLAs.',
    tags: ['Architecture', 'Refactoring', 'Microservices', 'System Design'],
    featured: false,
    intro: 'Total system rewrites have an alarming failure rate in enterprise software. The Strangler Fig pattern provides an incremental, low-risk alternative: gradually replacing specific functions of a monolithic application with modern microservices until the legacy system can be cleanly retired.',
    sections: [
      {
        heading: '1. The Core Principles of Strangler Fig Migration',
        text: 'Rather than rebuilding the entire platform from scratch over 18 months, identify high-change, high-value domains (such as payments or notifications) and extract them behind an API gateway facade.',
        bulletPoints: [
          'Place an API gateway (such as Kong, Traefik, or AWS API Gateway) in front of the legacy monolith.',
          'Route all existing traffic through the gateway to the monolith unchanged.',
          'Build the new microservice for a single selected capability.',
          'Configure the gateway to redirect traffic for that specific route to the new microservice.'
        ]
      },
      {
        heading: '2. Synchronizing Data with Anti-Corruption Layers and CDC',
        text: 'During the migration, both legacy tables and new microservice databases must stay synchronized. We utilize Change Data Capture (CDC) via Debezium or PostgreSQL logical replication to mirror transactions asynchronously without adding latency to user requests.',
        callout: 'Architecture Best Practice: Never allow the new service to read or write directly to the legacy database schema. Always encapsulate data transfers via APIs or event streams.'
      }
    ],
    keyTakeaways: [
      'Avoid high-risk big-bang rewrites; favor incremental strangulation via an API facade.',
      'Protect the new microservice domain model with an Anti-Corruption Layer (ACL).',
      'Use Change Data Capture (CDC) to keep legacy and modern databases in lockstep during transition.'
    ],
    conclusion: 'Modernization is an evolution, not a single event. By systematically extracting capabilities using the Strangler Fig pattern, enterprises modernize their tech stack while protecting revenue and client stability.'
  }
];

export const getBlogBySlug = (slug) => {
  return blogsData.find((blog) => blog.slug === slug || blog.id === slug);
};

export const getFeaturedBlog = () => {
  return blogsData.find((blog) => blog.featured) || blogsData[0];
};

export const getRecentBlogs = (count = 3, excludeId = null) => {
  return blogsData
    .filter((blog) => blog.id !== excludeId)
    .slice(0, count);
};
