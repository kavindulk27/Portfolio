"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Users,
  Clock,
  Lightbulb,
  MessageSquare,
  Target,
  Database,
  Layout,
  Smartphone,
} from "lucide-react";

const technicalSkills = [
  { name: "HTML/CSS", icon: Layout, category: "Frontend", level: 90 },
  { name: "JavaScript", icon: Code2, category: "Programming", level: 85 },
  { name: "PHP", icon: Code2, category: "Backend", level: 80 },
  { name: "MySQL", icon: Database, category: "Database", level: 75 },
  { name: "Flutter", icon: Smartphone, category: "Mobile", level: 70 },
  { name: "Firebase", icon: Database, category: "Cloud", level: 65 },
];

const softSkills = [
  { name: "Project Management", icon: Target },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
  { name: "Critical Thinking", icon: Lightbulb },
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Leadership", icon: Users },
];

export default function Skills() {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-4 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          A blend of modern technical proficiency and essential professional skills.
        </motion.p>

        {/* Skill grids */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className="p-5 transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-right text-xs text-muted-foreground mt-1">
                      {skill.level}%
                    </p>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Card className="p-5 bg-gradient-to-br from-card via-muted/40 to-background border border-border/40 backdrop-blur-sm transition-all shadow-sm hover:shadow-md">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 ring-1 ring-primary/20 shadow-inner">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {skill.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Strength in collaboration and problem-solving
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Badge variant="outline" className="text-sm px-4 py-2">
            Public Relations
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
