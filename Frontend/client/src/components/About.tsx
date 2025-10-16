"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, FolderGit2 } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-20 px-6 bg-muted/30" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Professional Profile
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I'm pursuing a Higher National Diploma in IT at SLIATE Labuduwa. I create efficient digital solutions and have experience in web & mobile development.
            </p>
            <div className="flex gap-3 pt-3">
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/40 hover:bg-primary/10">English</Badge>
              <Badge variant="outline" className="text-sm px-3 py-1 border-primary/40 hover:bg-primary/10">Sinhala</Badge>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="group p-6 border border-border/50 bg-card/60 backdrop-blur-lg rounded-2xl hover:shadow-lg hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">HNDIT at SLIATE Galle</p>
                </div>
              </div>
            </Card>

            <Card className="group p-6 border border-border/50 bg-card/60 backdrop-blur-lg rounded-2xl hover:shadow-lg hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                  <FolderGit2 className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Projects Completed</h4>
                  <p className="text-sm text-muted-foreground">3 Major Projects</p>
                </div>
              </div>
            </Card>

            <Card className="group p-6 border border-border/50 bg-card/60 backdrop-blur-lg rounded-2xl hover:shadow-lg hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all">
                  <Code className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Tech Skills</h4>
                  <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
