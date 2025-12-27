"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  expandedBullets?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Lead Backend Engineer",
    company: "Surt AI",
    companyUrl: "https://surt.com",
    location: "United States (Remote)",
    period: "Oct 2025 - Present",
    current: true,
    bullets: [
      "Leading backend team for fraud prevention platform serving B2B clients across 2 product lines",
      "Built geolocation fraud detection, custom rules engine DSL, and device fingerprinting system",
      "Led security hardening: AES-256-SIV encryption, SOC2 controls, GDPR compliance",
    ],
    expandedBullets: [
      "Scaled infrastructure to Aurora Serverless, 4 OpenSearch collections, multi-database architecture",
      "Evaluate backend candidates alongside CTO, own architecture decisions across 4 environments",
    ],
  },
  {
    title: "Founding Backend Engineer",
    company: "Surt AI",
    companyUrl: "https://surt.com",
    location: "United States (Remote)",
    period: "Jun 2025 - Oct 2025",
    bullets: [
      "First backend engineer - built fraud prevention infrastructure from scratch, shipped in 4 months",
      "Architected 11-stage KYC pipeline with biometric verification and graph-based risk engine",
      "Delivered serverless Rust stack: 28 Lambda functions, 34 DynamoDB tables, 26 Terraform modules",
    ],
    expandedBullets: [
      "Built document processing with dual OCR, AAMVA barcode parsing for 70+ fields",
      "Implemented FaceTec 3D liveness, AWS Rekognition face matching, 9 deduplication types",
      "Created event-driven infrastructure with webhook delivery, 9 SQS queues, Redis pub/sub",
    ],
  },
  {
    title: "Software Engineer",
    company: "Vertex Studio",
    companyUrl: "https://vrx.group/",
    location: "El Salvador (Remote)",
    period: "Jul 2024 - Jun 2025",
    bullets: [
      "Key contributor to Bioma, an actor-based Rust architecture powering AI-driven systems",
      "Built RAG pipeline and real-time video analysis with computer vision for anomaly detection",
      "Developed unified dashboard integrating SurrealDB, LLM chat, MCP tools, MinIO storage",
    ],
    expandedBullets: [
      "Engineered Blender add-on with WebSocket real-time logging for AI texture generation",
      "Implemented unit, integration, and stress testing for Bioma crates",
    ],
  },
  {
    title: "Lead MLOps Engineer",
    company: "Vertex Studio",
    companyUrl: "https://vrx.group/",
    location: "El Salvador (Remote)",
    period: "Nov 2023 - Jul 2024",
    bullets: [
      "Led MLOps team within 3 months of joining, managing backend across 3 Rust codebases",
      "Optimized AI generation pipeline from 50s+ to 3.5s with ComfyUI prompt engineering",
      "Built Blender Python automation for tech art team with dynamic camera/lighting systems",
    ],
    expandedBullets: [
      "Leveraged Ansible for local and Docker environments, deployed NVIDIA images for GPU workflows",
      "Built Rust pipeline for AI texture and 3D asset generation using Stable Diffusion",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasExpandedContent = experience.expandedBullets && experience.expandedBullets.length > 0;

  return (
    <motion.div variants={item} className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-muted/30" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] ${
          experience.current
            ? "bg-accent shadow-[0_0_8px_rgba(201,169,97,0.5)]"
            : "bg-muted/50"
        }`}
      />

      {/* Content */}
      <div className="group">
        <p className="text-accent font-mono text-sm mb-1">{experience.period}</p>

        <h3 className="text-lg font-semibold text-foreground mb-1">
          {experience.title}{" "}
          <span className="text-muted font-normal">@</span>{" "}
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {experience.company}
          </a>
        </h3>

        <p className="text-muted/70 text-sm mb-4">{experience.location}</p>

        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
              <span className="text-accent flex-shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}

          <AnimatePresence>
            {expanded &&
              experience.expandedBullets?.map((bullet, i) => (
                <motion.li
                  key={`expanded-${i}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-accent flex-shrink-0">▹</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {hasExpandedContent && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-accent font-mono text-sm hover:underline flex items-center gap-1"
          >
            {expanded ? "Show less" : "Show more"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-24 lg:px-32" ref={ref}>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4"
        >
          Experience
          <span className="h-px bg-muted/30 flex-1 max-w-xs" />
        </motion.h2>

        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
