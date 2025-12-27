"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const techStack = [
  { name: "Rust", category: "language" },
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Go", category: "language" },
  { name: "AWS", category: "cloud" },
  { name: "PostgreSQL", category: "database" },
  { name: "DynamoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "OpenSearch", category: "database" },
  { name: "Terraform", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-24 lg:px-32"
      ref={ref}
    >
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
          <span className="text-accent font-mono text-lg">01.</span>
          About Me
          <span className="h-px bg-muted/30 flex-1 max-w-xs" />
        </motion.h2>

        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
          <motion.div variants={item} className="space-y-4">
            <p className="text-muted leading-relaxed">
              Backend engineer who builds systems from scratch and ships fast. 2+ years
              specializing in <span className="text-accent">Rust</span> and serverless
              architectures, with production experience across fraud prevention, identity
              verification, AI-powered systems, and real-time pipelines.
            </p>

            <p className="text-muted leading-relaxed">
              Currently leading backend at <span className="text-accent">Surt AI</span>,
              building fraud prevention infrastructure that protects millions of transactions.
              Previously built AI-powered systems at Vertex Studio — actor-based architectures,
              RAG pipelines, real-time video analysis.
            </p>

            <p className="text-muted leading-relaxed">
              My approach: type safety, clean APIs, infrastructure as code. I build for
              scale from day one — event-driven, async, observable.
            </p>

            <motion.div variants={item} className="pt-6">
              <p className="text-foreground font-mono text-sm mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 text-sm font-mono text-muted border border-muted/30 rounded hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="pt-6">
              <p className="text-foreground font-mono text-sm mb-3">Certifications:</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-sm font-mono text-accent border border-accent/50 rounded bg-accent/5">
                  AWS Certified AI Practitioner
                </span>
                <span className="text-muted/60 text-xs font-mono">Early Adopter 2025</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative group mx-auto md:mx-0"
          >
            <div className="relative w-64 h-64 md:w-full md:h-80">
              <Image
                src="/sergio.jpeg"
                alt="Sergio Robayo"
                fill
                sizes="(max-width: 768px) 256px, 300px"
                className="rounded object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
