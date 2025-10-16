"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    id: 1,
    degree: "Higher National Diploma in Information Technology",
    institution: "SLIATE",
    location: "Labuduwa, Galle, Sri Lanka",
    period: "2023 - Present",
    details: [],
  },
  {
    id: 2,
    degree: "Advanced Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2021",
    details: ["Completed (C) passes in Art Stream"],
  },
  {
    id: 3,
    degree: "Ordinary Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2017",
    details: ["4 (A) passes", "3 (B) passes", "2 (C) passes"],
  },
];

export default function Education() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background"
      id="education"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-4 text-center"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          My academic background and professional qualifications.
        </motion.p>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-[32px] top-0 bottom-0 w-[2px] bg-primary/30" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-6"
              >
                {/* Icon bubble */}
                <div className="relative z-10 flex-shrink-0 mt-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/40 shadow-sm hover:shadow-primary/40 transition-all duration-300">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 rounded-xl bg-card/50 backdrop-blur-md border border-border/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    {index === 0 && (
                      <Badge variant="default" className="animate-pulse">
                        Current
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground font-medium">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>

                  {edu.details.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3">
                      {edu.details.map((detail, detailIndex) => (
                        <Badge
                          key={detailIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 rounded-xl bg-gradient-to-br from-card via-muted/30 to-background border border-border/40 shadow-sm hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            🎓 Certificates
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-background/60 border border-border/30 hover:border-primary/40 transition-all">
              <p className="font-medium text-foreground">
                Certificate of English Language
              </p>
              <p className="text-sm text-muted-foreground">
                BritishWay English Academy, Matara
              </p>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
