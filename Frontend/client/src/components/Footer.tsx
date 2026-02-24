import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background/70">
      <div className="ai-scanlines" />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-lg font-bold">
            <span className="gradient-text">Kavindu Kumanayaka</span>
          </h3>
          <p className="text-xs text-muted-foreground">Full Stack Software Engineer</p>
        </motion.div>

        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/70 transition-transform hover:-translate-y-1">
            <a href="https://github.com/kavindulk27" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/70 transition-transform hover:-translate-y-1">
            <a
              href="https://www.linkedin.com/in/kavindu-kumanayaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/70 transition-transform hover:-translate-y-1">
            <a href="mailto:kavindukumanayaka@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        Copyright {new Date().getFullYear()} Kavindu Kumanayaka. All rights reserved.
      </div>
    </footer>
  );
}
