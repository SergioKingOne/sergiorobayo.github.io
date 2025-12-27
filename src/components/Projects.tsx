"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Surt AI Platform",
    description:
      "Fraud prevention infrastructure built from scratch. 11-stage KYC pipeline, biometric verification, graph-based risk engine with 230 nodes.",
    tech: ["Rust", "AWS Lambda", "DynamoDB", "Terraform"],
    github: "https://surt.com",
    featured: true,
  },
  {
    title: "Bioma",
    description:
      "Actor-based Rust architecture powering AI-driven systems. RAG pipeline, real-time streaming, inter-actor communication.",
    tech: ["Rust", "Tokio", "SurrealDB"],
    github: "https://github.com/VertexStudio/bioma",
  },
  {
    title: "Distributed File Processor",
    description:
      "Scalable serverless system processing large files in parallel using AWS Lambda and message queues.",
    tech: ["Rust", "AWS Lambda", "S3", "SNS", "SQS"],
    github: "https://github.com/SergioKingOne/distributed-file-processor",
  },
  {
    title: "Cloud-Native Travel Backend",
    description:
      "Secure backend infrastructure with ECS Fargate, RDS PostgreSQL, and Cognito authentication.",
    tech: ["AWS ECS", "RDS", "Cognito", "Terraform"],
    github: "https://github.com/SergioKingOne/wanderlog",
  },
  {
    title: "Rusty Chat Sync",
    description:
      "Real-time chat application with WebAssembly frontend and AWS serverless backend.",
    tech: ["Rust", "WASM", "AppSync", "DynamoDB"],
    github: "https://github.com/SergioKingOne/rusty-chat-sync",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      variants={item}
      className={`group relative block p-6 bg-background/50 border border-muted/20 rounded-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {/* Folder icon */}
      <div className="flex justify-between items-start mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-accent"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-muted group-hover:text-accent transition-colors"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-muted/70">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-24 lg:px-32" ref={ref}>
      <motion.div
        className="max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-4"
        >
          Projects
          <span className="h-px bg-muted/30 flex-1 max-w-xs" />
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured - spans 2 columns on larger screens */}
          {featured && (
            <ProjectCard
              project={featured}
              className="md:col-span-2 lg:row-span-2"
            />
          )}

          {/* Other projects */}
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
