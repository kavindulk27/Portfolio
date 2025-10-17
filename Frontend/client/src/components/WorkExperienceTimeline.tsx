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
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-[#0b0b0d] via-[#141416] to-[#0b0b0d]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <p className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
          A journey through my professional experience — crafting, building, and innovating.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary/30 to-purple-500/30" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2"></div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="md:w-1/2 relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-md">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
                    <p className="text-xs text-gray-400 mb-4 italic">
                      {exp.duration}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-primary/20 text-white border border-purple-400/20 hover:from-purple-500/30 hover:to-primary/30 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-purple-500 w-5 h-5 rounded-full shadow-lg border-4 border-[#0b0b0d]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
