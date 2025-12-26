"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Rust", "Python", "TypeScript", "Go"],
  },
  {
    category: "AWS",
    skills: ["Lambda", "DynamoDB", "Aurora", "OpenSearch", "S3", "ECS", "Cognito", "SQS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Redis", "OpenSearch", "DocumentDB", "SurrealDB"],
  },
  {
    category: "DevOps",
    skills: ["Terraform", "Docker", "GitHub Actions", "Ansible"],
  },
  {
    category: "AI/ML",
    skills: ["RAG Pipelines", "LLMs", "Computer Vision", "MCP"],
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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 md:px-24 lg:px-32" ref={ref}>
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
          <span className="text-accent font-mono text-lg">04.</span>
          Skills
          <span className="h-px bg-muted/30 flex-1 max-w-xs" />
        </motion.h2>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4 items-start"
            >
              <span className="text-accent font-mono text-sm">{group.category}</span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-mono text-muted border border-muted/30 rounded hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
