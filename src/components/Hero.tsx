"use client";

import { motion } from "framer-motion";
import { assetPath } from "@/lib/config";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-24 lg:px-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${assetPath('/hero-bg.jpg')}')` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/85" />
      <motion.div
        className="relative z-10 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-accent font-mono text-sm md:text-base mb-4">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2"
        >
          Sergio.
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted mb-6"
        >
          Backend Engineer | Rust | AWS
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          I build systems from scratch and ship fast. Fraud prevention, identity verification, AI pipelines - whatever the problem demands, I learn it deeply and make it work.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors text-center"
          >
            View Projects
          </a>
          <a
            href={assetPath("/resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-muted text-muted font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors text-center"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Mobile social links */}
        <motion.div
          variants={item}
          className="flex md:hidden gap-6 mt-10 justify-center"
        >
          <a
            href="https://github.com/SergioKingOne"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-robayo-500584216/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
