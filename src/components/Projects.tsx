"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { assetPath } from "@/lib/config";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Surt AI Platform",
    description:
      "Fraud prevention infrastructure built from scratch. 11-stage KYC pipeline, biometric verification, graph-based risk engine with 230 nodes.",
    tech: ["Rust", "AWS Lambda", "DynamoDB", "Terraform"],
    image: "/projects/surt-lead.jpg",
    liveUrl: "https://surt.com",
    featured: true,
  },
  {
    title: "Bioma",
    description:
      "Actor-based Rust architecture powering AI-driven systems. RAG pipeline, real-time streaming, inter-actor communication.",
    tech: ["Rust", "Tokio", "SurrealDB"],
    image: "https://img.youtube.com/vi/wN22ooW-2e4/maxresdefault.jpg",
    github: "https://github.com/VertexStudio/bioma",
    videoUrl: "https://www.youtube.com/watch?v=wN22ooW-2e4",
  },
  {
    title: "Distributed File Processor",
    description:
      "Scalable serverless system processing large files in parallel using AWS Lambda and message queues.",
    tech: ["Rust", "AWS Lambda", "S3", "SNS", "SQS"],
    image: "/projects/dfp.png",
    github: "https://github.com/SergioKingOne/distributed-file-processor",
  },
  {
    title: "Cloud-Native Travel Backend",
    description:
      "Secure backend infrastructure with ECS Fargate, RDS PostgreSQL, and Cognito authentication.",
    tech: ["AWS ECS", "RDS", "Cognito", "Terraform"],
    image: "/projects/wanderlog.png",
    github: "https://github.com/SergioKingOne/wanderlog",
    videoUrl: "https://www.youtube.com/watch?v=ukE5X6PlFU8",
  },
  {
    title: "Rusty Chat Sync",
    description:
      "Real-time chat application with WebAssembly frontend and AWS serverless backend.",
    tech: ["Rust", "WASM", "AppSync", "DynamoDB"],
    image: "/projects/rusty-chat-sync.png",
    github: "https://github.com/SergioKingOne/rusty-chat-sync",
    videoUrl: "https://www.youtube.com/watch?v=Xb2fpzQ-a2c",
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
  const primaryLink = project.liveUrl || project.github || project.videoUrl;
  const imageSrc = project.image?.startsWith("http")
    ? project.image
    : project.image
    ? assetPath(project.image)
    : null;

  return (
    <motion.div
      variants={item}
      className={`group relative flex flex-col bg-background/50 border border-muted/20 rounded-lg hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}
    >
      {/* Project Image */}
      {imageSrc && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video overflow-hidden bg-black/50 flex items-center justify-center"
        >
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header with icons */}
        <div className="flex justify-between items-start mb-3">
          {!imageSrc && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-10 h-10 text-accent"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          )}
          <div className={`flex gap-3 ${imageSrc ? "" : "ml-auto"}`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Live Site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono text-muted/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
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
