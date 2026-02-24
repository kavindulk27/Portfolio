import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Layers, GitBranch, Braces, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Product Thinking",
    text: "I design solutions around user workflows and measurable impact, not just code output.",
  },
  {
    icon: GitBranch,
    title: "Clean Delivery",
    text: "I build maintainable features with clear Git workflows, documentation, and test-ready code.",
  },
  {
    icon: Braces,
    title: "Full Stack Scope",
    text: "Frontend UI, API integrations, backend logic, and data modeling are all part of my workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Engineering",
    text: "I focus on performance, scalability, and practical security in day-to-day implementation.",
  },
];

export default function About() {
  return (
    <section className="section-wrap overflow-hidden pt-0 -mt-4 md:-mt-6">
      <div className="orb float-animation -left-24 top-10 h-64 w-64 bg-primary/20" />
      <div className="ai-scanlines" />
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <Badge className="mb-4 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-accent">
            About
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Engineering mindset for modern <span className="gradient-text">web platforms</span>
          </h2>
          <p className="text-muted-foreground">
            I am currently pursuing HNDIT at SLIATE Labuduwa and focusing on production-quality software
            development. My goal is to contribute to teams building resilient web products with strong UX,
            dependable APIs, and scalable databases.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
                className="glass-panel rounded-3xl p-6"
              >
                <Icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
