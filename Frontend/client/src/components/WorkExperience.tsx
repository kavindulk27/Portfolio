import { Card } from "../components/ui/card";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    duration: "2025 - Present",
    description:
      "Developing modern, responsive web applications for clients using React and Django. Focused on building scalable front-end architectures & Backends, RESTful APIs, and clean UI/UX designs. Experienced in deploying applications, optimizing performance, and managing full project lifecycles from requirement analysis to production.",
    achievements: [
      "React & Next.js Frontend",
      "Django Backend Systems",
      "RESTful API Development",
      "Tailwind CSS / UI Design",
      "Firebase & Vercel Ops",
      "Full Project Lifecycle",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "NAITA - National Apprentice and Industrial Training Authority",
    duration: "Sep 2025 - Mar 2026",
    description:
      "Contributed to React-based web applications, implemented backend-connected features, and improved performance across critical pages.",
    achievements: ["Built production UI modules", "Improved data flow handling", "Collaborated in full-stack delivery"],
  },
];

export default function WorkExperience() {
  return (
    <section className="section-wrap overflow-hidden">
      <div className="ai-scanlines" />
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
            >
              <Card className="glass-panel rounded-3xl p-6 md:p-8">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.duration}
                    </div>
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {exp.achievements.map((item) => (
                    <div key={item} className="rounded-2xl border border-border/70 bg-background/60 p-3 text-xs">
                      <CheckCircle2 className="mb-1 h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
