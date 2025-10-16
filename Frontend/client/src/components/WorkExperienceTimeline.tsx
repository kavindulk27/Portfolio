"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Tech Solutions Pvt Ltd",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - Apr 2025",
    description:
      "Developed responsive web interfaces using React and TailwindCSS, collaborated with backend team for API integration, and implemented new UI features.",
    techStack: ["React", "TailwindCSS", "JavaScript"],
  },
  {
    id: 2,
    company: "Innovate IT Solutions",
    role: "Software Development Intern",
    duration: "May 2024 - Aug 2024",
    description:
      "Assisted in developing a student management system using Flutter & Firebase, optimized database queries, and helped maintain code quality using Git.",
    techStack: ["Flutter", "Firebase", "Git"],
  },
];

export default function WorkExperienceTimeline() {
  return (
    <section className="py-20 px-6 bg-muted/10" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-primary/20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`mb-12 flex justify-between items-center w-full ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2"></div> {/* Empty space for timeline */}
                <div className="w-1/2 relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-full bg-primary/20">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{exp.duration}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
