import type { Dict, Locale } from "./types";

const en: Dict = {
  meta: {
    title: "Sergio Robayo — Backend Engineer",
    description:
      "Backend engineer leading fraud-prevention infrastructure at Surt — Rust on AWS, ~80K weekly KYC verifications, 10 clients across 5 countries.",
    ogDescription:
      "Backend engineer leading fraud-prevention infrastructure at Surt — Rust on AWS, ~80K weekly KYC verifications, 10 clients across 5 countries.",
    twitterDescription:
      "Rust + AWS · fraud prevention · ~80K weekly verifications · 10 clients in 5 countries.",
  },
  header: {
    wordmarkTag: "— backend engineer",
    nav: {
      about: "about",
      experience: "experience",
      projects: "projects",
      skills: "skills",
      contact: "contact",
    },
    resume: "résumé",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    indexLabel: "/ index",
    download: "download résumé",
  },
  hero: {
    paletteHint: "› index",
    eyebrow: "/ now — lead backend, Surt",
    titlePart1: "I build ",
    titleAccent: "production",
    titlePart2: " backend systems from scratch.",
    body: {
      lead: "Rust on AWS, lambdas all the way down. Lead backend at ",
      surt: "Surt",
      tail: " — ~80K weekly KYC verifications, 10 production clients, 5 countries.",
    },
    viewWork: "view work",
    resume: "résumé",
    portraitLabel: "/ portrait",
    portraitMeta: "halftone · 1-bit",
    subjectName: "sergio robayo",
    subjectLocation: "bogotá",
    subjectYear: "2026",
    bottomCaption: "subject · sergio robayo",
  },
  telemetry: {
    eyebrow: "production track record · last updated may 2026",
    cells: [
      { value: "99.96%", label: "stage success" },
      { value: "~45K", label: "monthly active users" },
      { value: "~80K", label: "weekly verifications" },
      { value: "10", label: "production clients" },
      { value: "5", label: "countries live" },
      { value: "87%", label: "straight-through approval" },
    ],
    footnote:
      "numbers as of may 2026 · surt ai production. continuous monthly billing since sept 2025.",
  },
  about: {
    eyebrow: "/ about",
    pullQuote:
      "Joined at zero twice. Built the IP intelligence pipeline that replaced our vendor. The codebase is 250k+ lines and growing.",
    prose: [
      "Backend engineer, 20 years old, based in Bogotá. I joined Surt in June 2025 as the first backend engineer and shipped the fraud-prevention platform from a blank repo to first paying customers in 4 months. Now leading backend.",
      "The platform serves Dogg House Casino, Rebet, and 8 other clients across the US, Germany, Nigeria, Mexico, and Brazil — ~80K weekly KYC verifications, 99.96% stage success, 87% straight-through approval. I built and own most of it: the in-house IP intelligence pipeline (custom MaxMind MMDB writer, RTT proxy detection, JA4 TLS fingerprinting, per-ASN fraud aggregation) that replaced our vendor; the geolocation fraud detection product line; the AES-256-SIV PII encryption layer with Encrypted Blind Index; the GDPR + SOC2 compliance backbone.",
      "Before Surt I built AI systems at Vertex Studio — actor-based architectures in Rust, RAG pipelines on Ollama + SurrealDB, real-time computer vision over WhatsApp and Telegram, and the AI 3D asset + texture pipeline for Sortium (ONNX runtime optimization 50s → 3.5s, 14× speedup). Joined early as a contributor, promoted to lead MLOps within three months.",
      "Rust is my main language. Shipped production in Python & TypeScript. AWS Solutions Architect Associate certified.",
    ],
    principlesEyebrow: "/ how I work",
    principles: [
      {
        k: "01",
        body:
          "Type safety, clean APIs, infrastructure as code. If the compiler can catch it, the compiler catches it.",
      },
      {
        k: "02",
        body:
          "Observability from day one. If it's not measured, it doesn't exist. Lambda logs, CloudWatch dashboards, structured tracing — wired in before the first deploy.",
      },
      {
        k: "03",
        body:
          "Own the full stack when the team is small. Backend, infra, CI/CD, on-call. Lead when the team grows — architecture, hiring, production ops, client onboarding.",
      },
      {
        k: "04",
        body:
          "Plan, execute, review like it's someone else's PR. The last part is what separates a script from a system.",
      },
      {
        k: "05",
        body:
          "Pick up whatever the problem demands. Learn it deeply. Ship something that works.",
      },
    ],
  },
  experience: {
    eyebrow: "/ experience",
    title: "Four roles. Two companies. One workflow.",
    currentBadge: "current",
    moreLabel: "[ + more ]",
    lessLabel: "[ – less ]",
    atSeparator: "@",
    roles: [
      {
        title: "Lead Backend Engineer",
        company: "Surt AI",
        companyUrl: "https://surt.com",
        location: "United States · Remote",
        period: "Oct 2025 — Present",
        current: true,
        bullets: [
          "Lead backend for B2B fraud prevention platform — 10 production clients across 5 countries (US, DE, NG, MX, BR). Top clients: Dogg House Casino, Rebet. ~45K MAU · ~80K weekly verification events · 99.96% stage success · 87% straight-through auto-approval.",
          "Built in-house IP intelligence pipeline replacing the Verisoul vendor — custom MaxMind MMDB writer/reader with hot-swappable codecs, physics-bound RTT proxy detection (85-country baseline), JA4 TLS fingerprinting via CloudFront, per-ASN fraud aggregation, RFC 8805 geofeed corporate-gateway detection.",
          "Shipped second product line — geolocation fraud detection with real-time transaction risk scoring, device attestation (Play Integrity, AppAttest), device fingerprinting, embedded scenario rules engine, WebSocket event broadcast.",
          "Privacy & compliance backbone — AES-256-SIV PII encryption with per-org KMS keys + HKDF, BLAKE3-hashed Encrypted Blind Index, org-level MFA via Cognito Pre-Auth, immutable S3 Object Lock audit archive, GDPR Article 17 cascade deletion, SOC2 deployment gates via Drata.",
        ],
        expandedBullets: [
          "AI-powered document validation — Bedrock Claude vision pipeline for Proof of Address with anti-hallucination prompts, 17 model variants benchmarked, multi-method (Textract + FORMS + LLM) fallback under noisy capture.",
          "Production scale — 51 DynamoDB tables, 52 Lambda functions, Aurora Serverless, OpenSearch Serverless, Kinesis, WebSocket API Gateway, WAF v2, 32 Terraform modules across 4 environments, 100+ CloudWatch alarms, Checkov SAST + Terraform drift detection in CI.",
          "Own architecture decisions, evaluate backend candidates alongside CTO, run client onboarding and production operations.",
        ],
      },
      {
        title: "Founding Backend Engineer",
        company: "Surt AI",
        companyUrl: "https://surt.com",
        location: "United States · Remote",
        period: "Jun 2025 — Oct 2025",
        bullets: [
          "First backend engineer. Built the fraud-prevention platform from a blank repo to first paying customers in 4 months. Architected the serverless Rust/Lambda stack (~28 lambdas, ~34 DynamoDB tables).",
          "KYC identity verification — 11-stage pipeline (Phone → OTP → Location → Details → SSN → Document → Watchlist → LexisNexis → Liveness → FaceMatch → Final), multi-country with country-specific document and ID-number validation.",
          "Graph-based risk engine — petgraph DAG with 230 verification nodes (LexisNexis signals, status outcomes, internal checks), pull-based execution with DFS reachability and topological sort.",
          "Document + biometrics — dual OCR (Scandit mobile + AWS Textract), AAMVA barcode parsing (70+ fields), FaceTec 3D liveness, AWS Rekognition face matching, org-scoped facial collections.",
        ],
        expandedBullets: [
          "Multi-context duplicate detection across 9 attributes (phone, email, device, SSN, DOB, document, address, name, face).",
          "Event-driven backbone — webhook delivery (HMAC-SHA256, SQS, retry, DLQ), DynamoDB Streams to OpenSearch indexing, Redis pub/sub session coordination, custom Lambda authorizer with 7 auth strategies and 184 permissions.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Vertex Studio",
        companyUrl: "https://vrx.group/",
        location: "El Salvador · Remote",
        period: "Jul 2024 — Jun 2025",
        bullets: [
          "Key contributor to Bioma — actor-based Rust architecture replacing VeoVeo's backend, improving scalability and maintainability across AI-driven systems.",
          "Led VeoVeo pipeline — real-time video streaming with computer vision anomaly detection delivered via Telegram and WhatsApp bots.",
          "Built RAG pipeline — indexing, embeddings, retrieval, reranking, LLM chat integration using Ollama + SurrealDB.",
        ],
        expandedBullets: [
          "Developed a unified dashboard integrating Surrealist, LLM chat, MCP tools, and MinIO storage.",
          "Engineered a Blender add-on with WebSocket real-time logging for AI texture generation.",
        ],
      },
      {
        title: "Software Engineer, Lead MLOps",
        company: "Vertex Studio",
        companyUrl: "https://vrx.group/",
        location: "El Salvador · Remote",
        period: "Nov 2023 — Jul 2024",
        bullets: [
          "Promoted to lead the MLOps team within the third month based on technical performance and stakeholder communication.",
          "Optimized AI generation pipeline from 50s+ to 3.5s (14× speedup) via ONNX runtime compilation; managed Azure GPU VMs.",
          "Built Blender Python automation for tech art team — dynamic camera/lighting systems for AI texture and 3D asset generation.",
        ],
        expandedBullets: [
          "Managed backend services across three Rust codebases focused on data pipeline construction.",
          "Leveraged Ansible for local and Docker environments; deployed NVIDIA images for GPU workflows.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "/ projects",
    title: "Selected work — shipped, measured, and in production.",
    linkLabels: {
      live: "live →",
      writeup: "writeup →",
      github: "github →",
      video: "video →",
    },
    items: [
      {
        client: "surt ai · production",
        title: "Fraud-prevention platform — 10 clients, 5 countries.",
        metric: "99.96% success",
        description:
          "Built from a blank repo to first paying customers in 4 months. 11-stage KYC pipeline, biometrics, 230-node petgraph risk engine. ~50 lambdas, ~50 DynamoDB tables, Aurora Serverless, OpenSearch, Kinesis. ~80K weekly verifications.",
        tech: ["Rust", "AWS Lambda", "DynamoDB", "Terraform", "Aurora", "Kinesis"],
      },
      {
        client: "rust ecosystem · oss",
        title: "MaxMind MMDB encoder in Rust. 1.37M BGP prefixes in 8.9 MiB.",
        metric: "~2.8K LOC",
        description:
          "The Rust ecosystem had a reader, not a writer. Standard advice was to shell out to Go. So I wrote one. Bit-by-bit IPv6 trie with in-insert merge compaction, pointer-deduplicated data section, IPv4-in-IPv6 structural aliases per RFC 4291 / 4380 / 3056, auto-selected record size.",
        tech: ["Rust", "serde", "Tokio"],
      },
      {
        client: "vertex studio · ai",
        title: "Bioma — actor-based Rust architecture for AI systems.",
        description:
          "Actor library powering VeoVeo and other AI initiatives. Built core actors for indexing, embeddings, retrieval, reranking, chat. RAG pipeline on Ollama + SurrealDB. Multi-message handling for real-time streaming and inter-actor communication.",
        tech: ["Rust", "Tokio", "SurrealDB", "Ollama"],
      },
      {
        client: "vertex studio · sortium",
        title: "AI-driven 3D assets + textures from prompts — end-to-end.",
        metric: "50s → 3.5s",
        description:
          "Led the MLOps pipeline for Sortium — text-to-3D asset generation, AI-based textures, automated rendering. Blender Python automation, Rust + WebSocket back-end for ComfyUI workflows, S3 storage, Ansible-provisioned NVIDIA GPU envs. Optimized ONNX inference 14× via runtime compilation.",
        tech: ["Rust", "Python", "Blender", "ComfyUI", "ONNX", "Ansible"],
      },
      {
        client: "personal · oss",
        title: "Distributed file processor — Lambda + SQS, parallel fan-out.",
        description:
          "Scalable serverless system processing large files in parallel using AWS Lambda, S3, SNS, and SQS. Demonstrates fan-out / fan-in patterns under load.",
        tech: ["Rust", "AWS Lambda", "S3", "SNS", "SQS"],
      },
      {
        client: "personal · oss",
        title: "Cloud-native travel backend on ECS Fargate.",
        description:
          "Secure backend infrastructure for a travel app — ECS Fargate, RDS PostgreSQL, Cognito authentication, fully Terraform-managed.",
        tech: ["AWS ECS", "RDS", "Cognito", "Terraform"],
      },
      {
        client: "personal · oss",
        title: "Rusty Chat Sync — Rust + WebAssembly chat on AWS AppSync.",
        description:
          "Real-time chat with a WebAssembly frontend and AWS serverless backend. AppSync, DynamoDB, and a thin Rust client compiled to WASM.",
        tech: ["Rust", "WASM", "AppSync", "DynamoDB"],
      },
    ],
  },
  skills: {
    eyebrow: "/ stack",
    title: "What I reach for, by category.",
    certs:
      "aws certified solutions architect — associate · aws certified ai practitioner (early adopter, 2025)",
    groups: [
      {
        category: "architecture",
        skills: [
          "Serverless",
          "Event-Driven",
          "Distributed Systems",
          "Multi-Tenant",
          "Privacy Engineering",
          "Real-time (WebSocket, Redis pub/sub)",
        ],
      },
      {
        category: "aws",
        skills: [
          "Lambda",
          "API Gateway",
          "DynamoDB",
          "Aurora Serverless",
          "OpenSearch Serverless",
          "S3 Object Lock",
          "ECS",
          "Cognito",
          "SQS",
          "SNS",
          "Kinesis",
          "KMS",
          "WAF v2",
          "Rekognition",
          "Textract",
          "Bedrock",
          "CloudWatch",
        ],
      },
      {
        category: "domain",
        skills: [
          "KYC / IDV",
          "Fraud Detection",
          "Geolocation Risk",
          "Biometrics",
          "IP Intelligence",
          "SOC2",
          "GDPR",
          "AI / RAG Pipelines",
          "Computer Vision",
        ],
      },
      {
        category: "languages",
        skills: [
          "Rust (Tokio, Actix-Web, petgraph)",
          "Python",
          "TypeScript",
          "Go",
          "Node.js",
        ],
      },
      {
        category: "databases",
        skills: [
          "DynamoDB",
          "Aurora / PostgreSQL",
          "OpenSearch",
          "Redis",
          "DocumentDB",
          "SurrealDB",
        ],
      },
      {
        category: "devops",
        skills: [
          "Terraform",
          "Docker",
          "GitHub Actions",
          "Checkov SAST",
          "Terraform Drift Detection",
        ],
      },
    ],
  },
  finalCta: {
    eyebrow: "/ contact",
    titlePart1: "Got a hard problem?",
    titlePart2: " Let's talk.",
    body:
      "I learn fast, ship faster, and I'm always looking for hard problems. Send me an email, or find me on LinkedIn — I'll get back to you.",
    email: "email",
    linkedin: "linkedin",
    resume: "résumé",
  },
  footer: {
    aboutCommand: "sergio --about",
    rows: [
      { label: "role", value: "Lead Backend Engineer · Surt AI" },
      { label: "based", value: "Bogotá, Colombia · remote" },
      { label: "stack", value: "Rust · AWS · Tokio · Terraform" },
      { label: "availability", value: "open to hard problems" },
    ],
    github: "github →",
    linkedin: "linkedin →",
    email: "email →",
    sessionClosed: "[ok] session closed · © {year} sergio robayo",
  },
  palette: {
    placeholder: "type to filter · esc to close",
    empty: "no results · try another term",
    groups: {
      navigate: "navigate",
      open: "open",
      actions: "actions",
      projects: "projects",
      language: "language",
    },
    actions: {
      copyEmail: "copy email",
      copyEmailHint: "sergiorobayorr@gmail.com",
      sendEmail: "send email",
      sendEmailHint: "mailto: sergiorobayorr",
      switchEn: "switch to english",
      switchEs: "cambiar a español",
      switchHint: "language",
    },
    items: {
      resume: "résumé · pdf",
      resumeHint: "download",
      currentEmployerHint: "current employer",
    },
  },
  langSwitcher: {
    en: "EN",
    es: "ES",
    switchTo: "Switch language",
  },
  skipToContent: "skip to content",
};

const es: Dict = {
  meta: {
    title: "Sergio Robayo — Ingeniero Backend",
    description:
      "Ingeniero backend liderando infraestructura antifraude en Surt — Rust sobre AWS, ~80K verificaciones KYC semanales, 10 clientes en 5 países.",
    ogDescription:
      "Ingeniero backend liderando infraestructura antifraude en Surt — Rust sobre AWS, ~80K verificaciones KYC semanales, 10 clientes en 5 países.",
    twitterDescription:
      "Rust + AWS · prevención de fraude · ~80K verificaciones semanales · 10 clientes en 5 países.",
  },
  header: {
    wordmarkTag: "— ingeniero backend",
    nav: {
      about: "sobre mí",
      experience: "experiencia",
      projects: "proyectos",
      skills: "stack",
      contact: "contacto",
    },
    resume: "cv",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    indexLabel: "/ índice",
    download: "descargar cv",
  },
  hero: {
    paletteHint: "› índice",
    eyebrow: "/ ahora — lead backend, Surt",
    titlePart1: "Construyo sistemas backend de ",
    titleAccent: "producción",
    titlePart2: " desde cero.",
    body: {
      lead: "Rust sobre AWS, lambdas hasta el final. Lead backend en ",
      surt: "Surt",
      tail: " — ~80K verificaciones KYC semanales, 10 clientes en producción, 5 países.",
    },
    viewWork: "ver trabajo",
    resume: "cv",
    portraitLabel: "/ retrato",
    portraitMeta: "halftone · 1-bit",
    subjectName: "sergio robayo",
    subjectLocation: "bogotá",
    subjectYear: "2026",
    bottomCaption: "sujeto · sergio robayo",
  },
  telemetry: {
    eyebrow: "registro de producción · actualizado mayo 2026",
    cells: [
      { value: "99.96%", label: "éxito por etapa" },
      { value: "~45K", label: "usuarios activos mensuales" },
      { value: "~80K", label: "verificaciones semanales" },
      { value: "10", label: "clientes en producción" },
      { value: "5", label: "países activos" },
      { value: "87%", label: "aprobación directa" },
    ],
    footnote:
      "números a mayo 2026 · producción de surt ai. facturación mensual continua desde septiembre 2025.",
  },
  about: {
    eyebrow: "/ sobre mí",
    pullQuote:
      "Empecé desde cero dos veces. Construí el pipeline de IP intelligence que reemplazó a nuestro proveedor. El codebase tiene 250k+ líneas y sigue creciendo.",
    prose: [
      "Ingeniero backend, 20 años, basado en Bogotá. Entré a Surt en junio de 2025 como el primer ingeniero backend y llevé la plataforma antifraude de un repo en blanco a los primeros clientes pagos en 4 meses. Ahora lidero backend.",
      "La plataforma sirve a Dogg House Casino, Rebet y otros 8 clientes en EE.UU., Alemania, Nigeria, México y Brasil — ~80K verificaciones KYC semanales, 99.96% de éxito por etapa, 87% de aprobación directa. Construí y soy dueño de la mayoría: el pipeline de IP intelligence in-house (writer custom de MaxMind MMDB, detección de proxies por RTT, fingerprinting JA4 TLS, agregación de fraude por ASN) que reemplazó al proveedor; la línea de producto de detección de fraude por geolocalización; la capa de cifrado AES-256-SIV de PII con Encrypted Blind Index; el backbone de cumplimiento GDPR + SOC2.",
      "Antes de Surt construí sistemas de IA en Vertex Studio — arquitecturas basadas en actores en Rust, pipelines RAG sobre Ollama + SurrealDB, visión por computador en tiempo real sobre WhatsApp y Telegram, y el pipeline de assets 3D + texturas con IA para Sortium (optimización de runtime ONNX 50s → 3.5s, 14× más rápido). Entré temprano como colaborador, promovido a lead MLOps en tres meses.",
      "Rust es mi lenguaje principal. He shipeado producción en Python y TypeScript. Certificado AWS Solutions Architect Associate.",
    ],
    principlesEyebrow: "/ cómo trabajo",
    principles: [
      {
        k: "01",
        body:
          "Type safety, APIs limpias, infraestructura como código. Si el compilador puede atraparlo, el compilador lo atrapa.",
      },
      {
        k: "02",
        body:
          "Observabilidad desde el día uno. Si no se mide, no existe. Logs de Lambda, dashboards de CloudWatch, tracing estructurado — conectados antes del primer deploy.",
      },
      {
        k: "03",
        body:
          "Dueño del stack completo cuando el equipo es pequeño. Backend, infra, CI/CD, on-call. Liderar cuando el equipo crece — arquitectura, contratación, operaciones de producción, onboarding de clientes.",
      },
      {
        k: "04",
        body:
          "Planear, ejecutar y revisar como si fuera el PR de alguien más. Esa última parte separa un script de un sistema.",
      },
      {
        k: "05",
        body:
          "Aprender lo que el problema exija. Aprenderlo a fondo. Shipear algo que funcione.",
      },
    ],
  },
  experience: {
    eyebrow: "/ experiencia",
    title: "Cuatro roles. Dos compañías. Un solo workflow.",
    currentBadge: "actual",
    moreLabel: "[ + más ]",
    lessLabel: "[ – menos ]",
    atSeparator: "@",
    roles: [
      {
        title: "Lead Backend Engineer",
        company: "Surt AI",
        companyUrl: "https://surt.com",
        location: "Estados Unidos · Remoto",
        period: "Oct 2025 — Presente",
        current: true,
        bullets: [
          "Lead backend de la plataforma antifraude B2B — 10 clientes en producción en 5 países (US, DE, NG, MX, BR). Clientes top: Dogg House Casino, Rebet. ~45K MAU · ~80K eventos de verificación semanales · 99.96% de éxito por etapa · 87% de aprobación automática directa.",
          "Construí el pipeline de IP intelligence in-house reemplazando al proveedor Verisoul — writer/reader custom de MaxMind MMDB con codecs intercambiables en caliente, detección de proxies por RTT con base física (línea base de 85 países), fingerprinting JA4 TLS vía CloudFront, agregación de fraude por ASN, detección de gateways corporativos por geofeed RFC 8805.",
          "Lancé la segunda línea de producto — detección de fraude por geolocalización con scoring de riesgo de transacciones en tiempo real, attestation de dispositivos (Play Integrity, AppAttest), fingerprinting de dispositivos, motor de reglas embebido por escenario, broadcast de eventos por WebSocket.",
          "Backbone de privacidad y cumplimiento — cifrado AES-256-SIV de PII con claves KMS por organización + HKDF, Encrypted Blind Index con hash BLAKE3, MFA a nivel de organización vía Cognito Pre-Auth, archivo de auditoría inmutable con S3 Object Lock, eliminación en cascada por GDPR Artículo 17, gates de despliegue SOC2 vía Drata.",
        ],
        expandedBullets: [
          "Validación de documentos con IA — pipeline de visión Bedrock Claude para Proof of Address con prompts anti-alucinación, 17 variantes de modelo benchmarkeadas, fallback multi-método (Textract + FORMS + LLM) bajo captura ruidosa.",
          "Escala en producción — 51 tablas DynamoDB, 52 funciones Lambda, Aurora Serverless, OpenSearch Serverless, Kinesis, WebSocket API Gateway, WAF v2, 32 módulos de Terraform en 4 ambientes, 100+ alarmas de CloudWatch, Checkov SAST + detección de drift de Terraform en CI.",
          "Dueño de las decisiones de arquitectura, evalúo candidatos backend junto al CTO, dirijo el onboarding de clientes y las operaciones de producción.",
        ],
      },
      {
        title: "Founding Backend Engineer",
        company: "Surt AI",
        companyUrl: "https://surt.com",
        location: "Estados Unidos · Remoto",
        period: "Jun 2025 — Oct 2025",
        bullets: [
          "Primer ingeniero backend. Llevé la plataforma antifraude de un repo en blanco a los primeros clientes pagos en 4 meses. Arquitecté el stack serverless de Rust/Lambda (~28 lambdas, ~34 tablas DynamoDB).",
          "Verificación de identidad KYC — pipeline de 11 etapas (Teléfono → OTP → Ubicación → Detalles → SSN → Documento → Watchlist → LexisNexis → Liveness → FaceMatch → Final), multi-país con validación específica de documento e ID por país.",
          "Motor de riesgo basado en grafos — DAG de petgraph con 230 nodos de verificación (señales de LexisNexis, resultados de estado, chequeos internos), ejecución pull-based con alcanzabilidad DFS y orden topológico.",
          "Documentos + biometría — OCR dual (Scandit móvil + AWS Textract), parsing de códigos de barras AAMVA (70+ campos), liveness 3D de FaceTec, face matching de AWS Rekognition, colecciones faciales por organización.",
        ],
        expandedBullets: [
          "Detección de duplicados multi-contexto sobre 9 atributos (teléfono, email, dispositivo, SSN, fecha de nacimiento, documento, dirección, nombre, rostro).",
          "Backbone event-driven — entrega de webhooks (HMAC-SHA256, SQS, reintentos, DLQ), DynamoDB Streams a indexación de OpenSearch, coordinación de sesiones por Redis pub/sub, authorizer Lambda custom con 7 estrategias de auth y 184 permisos.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Vertex Studio",
        companyUrl: "https://vrx.group/",
        location: "El Salvador · Remoto",
        period: "Jul 2024 — Jun 2025",
        bullets: [
          "Contribuidor clave de Bioma — arquitectura basada en actores en Rust reemplazando el backend de VeoVeo, mejorando escalabilidad y mantenibilidad en los sistemas de IA.",
          "Lideré el pipeline de VeoVeo — streaming de video en tiempo real con detección de anomalías por visión por computador entregado vía bots de Telegram y WhatsApp.",
          "Construí el pipeline RAG — indexación, embeddings, recuperación, reranking, integración de chat LLM usando Ollama + SurrealDB.",
        ],
        expandedBullets: [
          "Desarrollé un dashboard unificado integrando Surrealist, chat LLM, herramientas MCP y storage MinIO.",
          "Ingenié un add-on de Blender con logging en tiempo real vía WebSocket para generación de texturas con IA.",
        ],
      },
      {
        title: "Software Engineer, Lead MLOps",
        company: "Vertex Studio",
        companyUrl: "https://vrx.group/",
        location: "El Salvador · Remoto",
        period: "Nov 2023 — Jul 2024",
        bullets: [
          "Promovido a liderar el equipo MLOps en el tercer mes por desempeño técnico y comunicación con stakeholders.",
          "Optimicé el pipeline de generación con IA de 50s+ a 3.5s (14× más rápido) vía compilación del runtime ONNX; gestioné VMs GPU de Azure.",
          "Construí automatización en Python para Blender para el equipo de tech art — sistemas dinámicos de cámara/iluminación para generación de texturas e assets 3D con IA.",
        ],
        expandedBullets: [
          "Gestioné servicios backend en tres codebases de Rust enfocados en la construcción de pipelines de datos.",
          "Aproveché Ansible para entornos locales y Docker; desplegué imágenes NVIDIA para workflows GPU.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "/ proyectos",
    title: "Trabajo seleccionado — shipeado, medido y en producción.",
    linkLabels: {
      live: "live →",
      writeup: "writeup →",
      github: "github →",
      video: "video →",
    },
    items: [
      {
        client: "surt ai · producción",
        title: "Plataforma antifraude — 10 clientes, 5 países.",
        metric: "99.96% éxito",
        description:
          "De un repo en blanco a primeros clientes pagos en 4 meses. Pipeline KYC de 11 etapas, biometría, motor de riesgo petgraph de 230 nodos. ~50 lambdas, ~50 tablas DynamoDB, Aurora Serverless, OpenSearch, Kinesis. ~80K verificaciones semanales.",
        tech: ["Rust", "AWS Lambda", "DynamoDB", "Terraform", "Aurora", "Kinesis"],
      },
      {
        client: "ecosistema rust · oss",
        title: "Encoder MaxMind MMDB en Rust. 1.37M prefijos BGP en 8.9 MiB.",
        metric: "~2.8K LOC",
        description:
          "El ecosistema Rust tenía un reader, no un writer. El consejo estándar era llamar a Go por shell. Así que escribí uno. Trie IPv6 bit-a-bit con compactación por merge en inserción, sección de datos pointer-deduplicada, aliases estructurales IPv4-en-IPv6 según RFC 4291 / 4380 / 3056, tamaño de record autoseleccionado.",
        tech: ["Rust", "serde", "Tokio"],
      },
      {
        client: "vertex studio · ai",
        title: "Bioma — arquitectura basada en actores en Rust para sistemas de IA.",
        description:
          "Librería de actores que potencia VeoVeo y otras iniciativas de IA. Construí los actores centrales para indexación, embeddings, retrieval, reranking y chat. Pipeline RAG sobre Ollama + SurrealDB. Manejo multi-mensaje para streaming en tiempo real y comunicación entre actores.",
        tech: ["Rust", "Tokio", "SurrealDB", "Ollama"],
      },
      {
        client: "vertex studio · sortium",
        title: "Assets 3D + texturas con IA desde prompts — de punta a punta.",
        metric: "50s → 3.5s",
        description:
          "Lideré el pipeline MLOps para Sortium — generación de assets 3D desde texto, texturas con IA, renderizado automatizado. Automatización en Python para Blender, back-end Rust + WebSocket para workflows ComfyUI, storage S3, entornos GPU NVIDIA provisionados con Ansible. Optimicé la inferencia ONNX 14× vía compilación del runtime.",
        tech: ["Rust", "Python", "Blender", "ComfyUI", "ONNX", "Ansible"],
      },
      {
        client: "personal · oss",
        title: "Procesador de archivos distribuido — Lambda + SQS, fan-out paralelo.",
        description:
          "Sistema serverless escalable que procesa archivos grandes en paralelo usando AWS Lambda, S3, SNS y SQS. Demuestra patrones fan-out / fan-in bajo carga.",
        tech: ["Rust", "AWS Lambda", "S3", "SNS", "SQS"],
      },
      {
        client: "personal · oss",
        title: "Backend cloud-native de viajes sobre ECS Fargate.",
        description:
          "Infraestructura backend segura para una app de viajes — ECS Fargate, RDS PostgreSQL, autenticación con Cognito, totalmente gestionado por Terraform.",
        tech: ["AWS ECS", "RDS", "Cognito", "Terraform"],
      },
      {
        client: "personal · oss",
        title: "Rusty Chat Sync — chat Rust + WebAssembly sobre AWS AppSync.",
        description:
          "Chat en tiempo real con frontend WebAssembly y backend AWS serverless. AppSync, DynamoDB y un cliente Rust delgado compilado a WASM.",
        tech: ["Rust", "WASM", "AppSync", "DynamoDB"],
      },
    ],
  },
  skills: {
    eyebrow: "/ stack",
    title: "A qué recurro, por categoría.",
    certs:
      "aws certified solutions architect — associate · aws certified ai practitioner (early adopter, 2025)",
    groups: [
      {
        category: "arquitectura",
        skills: [
          "Serverless",
          "Event-Driven",
          "Sistemas Distribuidos",
          "Multi-Tenant",
          "Privacy Engineering",
          "Tiempo Real (WebSocket, Redis pub/sub)",
        ],
      },
      {
        category: "aws",
        skills: [
          "Lambda",
          "API Gateway",
          "DynamoDB",
          "Aurora Serverless",
          "OpenSearch Serverless",
          "S3 Object Lock",
          "ECS",
          "Cognito",
          "SQS",
          "SNS",
          "Kinesis",
          "KMS",
          "WAF v2",
          "Rekognition",
          "Textract",
          "Bedrock",
          "CloudWatch",
        ],
      },
      {
        category: "dominio",
        skills: [
          "KYC / IDV",
          "Detección de Fraude",
          "Riesgo por Geolocalización",
          "Biometría",
          "IP Intelligence",
          "SOC2",
          "GDPR",
          "Pipelines IA / RAG",
          "Visión por Computador",
        ],
      },
      {
        category: "lenguajes",
        skills: [
          "Rust (Tokio, Actix-Web, petgraph)",
          "Python",
          "TypeScript",
          "Go",
          "Node.js",
        ],
      },
      {
        category: "bases de datos",
        skills: [
          "DynamoDB",
          "Aurora / PostgreSQL",
          "OpenSearch",
          "Redis",
          "DocumentDB",
          "SurrealDB",
        ],
      },
      {
        category: "devops",
        skills: [
          "Terraform",
          "Docker",
          "GitHub Actions",
          "Checkov SAST",
          "Detección de Drift en Terraform",
        ],
      },
    ],
  },
  finalCta: {
    eyebrow: "/ contacto",
    titlePart1: "¿Tienes un problema difícil?",
    titlePart2: " Hablemos.",
    body:
      "Aprendo rápido, shipeo más rápido, y siempre estoy buscando problemas difíciles. Mándame un email o búscame en LinkedIn — te respondo.",
    email: "email",
    linkedin: "linkedin",
    resume: "cv",
  },
  footer: {
    aboutCommand: "sergio --about",
    rows: [
      { label: "rol", value: "Lead Backend Engineer · Surt AI" },
      { label: "ubicación", value: "Bogotá, Colombia · remoto" },
      { label: "stack", value: "Rust · AWS · Tokio · Terraform" },
      { label: "disponibilidad", value: "abierto a problemas difíciles" },
    ],
    github: "github →",
    linkedin: "linkedin →",
    email: "email →",
    sessionClosed: "[ok] sesión cerrada · © {year} sergio robayo",
  },
  palette: {
    placeholder: "escribe para filtrar · esc para cerrar",
    empty: "sin resultados · prueba otro término",
    groups: {
      navigate: "navegar",
      open: "abrir",
      actions: "acciones",
      projects: "proyectos",
      language: "idioma",
    },
    actions: {
      copyEmail: "copiar email",
      copyEmailHint: "sergiorobayorr@gmail.com",
      sendEmail: "enviar email",
      sendEmailHint: "mailto: sergiorobayorr",
      switchEn: "switch to english",
      switchEs: "cambiar a español",
      switchHint: "idioma",
    },
    items: {
      resume: "cv · pdf",
      resumeHint: "descargar",
      currentEmployerHint: "empleador actual",
    },
  },
  langSwitcher: {
    en: "EN",
    es: "ES",
    switchTo: "Cambiar idioma",
  },
  skipToContent: "saltar al contenido",
};

export const dictionaries: Record<Locale, Dict> = { en, es };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries.en;
}
