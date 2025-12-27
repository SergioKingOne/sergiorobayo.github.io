export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center">
      <p className="text-muted/50 text-xs font-mono mb-2">
        Built with Next.js, Tailwind CSS & Framer Motion
      </p>
      <p className="text-muted/50 text-xs font-mono">
        &copy; {new Date().getFullYear()} Sergio Robayo
      </p>
    </footer>
  );
}
