import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Smartphone,
  Users,
  Clock,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { Badge } from "../components/ui/badge";

const technicalSkills = [
  { name: "React UI Engineering", icon: Globe, level: 88 },
  { name: "JavaScript / TypeScript", icon: Code2, level: 86 },
  { name: "Node / API Development", icon: Server, level: 80 },
  { name: "MySQL / SQL Design", icon: Database, level: 78 },
  { name: "PHP Backend Logic", icon: Layers, level: 82 },
  { name: "Flutter App Building", icon: Smartphone, level: 72 },
];

const collaborationSkills = [
  { name: "Team Collaboration", icon: Users },
  { name: "Time Management", icon: Clock },
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
];

export default function Skills() {
  return (
    <section className="section-wrap overflow-hidden">
      <div className="orb float-animation-delayed right-[-90px] top-10 h-64 w-64 bg-chart-3/20" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge className="mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary">
              Skills
            </Badge>
            <h2 className="text-3xl font-bold md:text-5xl">Tech stack and execution strengths</h2>
          </div>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base">
            Balanced across UI architecture, backend implementation, and practical collaboration in software teams.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
                  className="glass-panel rounded-3xl p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-2.5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold">{skill.name}</h3>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-chart-3 to-accent"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="glass-panel rounded-3xl p-6"
          >
            <h3 className="mb-4 text-xl font-semibold">Professional capabilities</h3>
            <div className="space-y-3">
              {collaborationSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="flex items-center gap-3 rounded-2xl border border-border/70 p-3">
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
