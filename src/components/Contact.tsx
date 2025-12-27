"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 md:px-24 lg:px-32" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.p variants={item} className="text-accent font-mono text-sm mb-4">
          What&apos;s Next?
        </motion.p>

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p variants={item} className="text-muted leading-relaxed mb-10">
          Have an interesting project or want to chat about backend engineering?
          I&apos;m always happy to connect. Drop me a message and I&apos;ll get back to you.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sergiorobayorr@gmail.com"
            className="px-8 py-4 border-2 border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-robayo-500584216/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-muted text-muted font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-muted text-muted font-mono text-sm rounded hover:border-accent hover:text-accent transition-colors"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
