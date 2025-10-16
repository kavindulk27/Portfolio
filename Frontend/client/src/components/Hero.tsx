"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_d69310b8.png";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/attached_assets/K.L Kumanayaka CV  (1)_1759290916564.pdf";
    link.download = "Kavindu_Kumanayaka_CV.pdf";
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center py-20 px-6 overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <Card className="p-8 md:p-12 rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between mb-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10">
                <img
                  src={profileImage}
                  alt="Kavindu Kumanayaka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
            </motion.div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Kavindu Kumanayaka</h1>
                <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Software Developer (Undergraduate)
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Matara, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>kavindukumanayaka@gmail.com</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-white transition-all">
                  <a href="https://github.com/kavindulk27" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button variant="outline" size="sm" asChild className="hover:bg-blue-600 hover:text-white transition-all">
                  <a href="https://linkedin.com/in/kavindu-lakshan-485427370" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Button>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-col gap-3 items-center md:items-end">
              <Button size="lg" className="group bg-primary text-white hover:bg-primary/90 transition-all" onClick={scrollToProjects}>
                View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadCV} className="hover:bg-muted/70 transition-all">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </motion.div>
          </div>

          <Separator className="my-6" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-4">
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Motivated IT undergraduate pursuing HNDIT at SLIATE Labuduwa. Quick learner with strong problem-solving skills, seeking internships to apply IT knowledge.
            </p>
          </motion.div>

          <Separator className="my-6" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="space-y-4">
            <h2 className="text-lg font-semibold">Core Skills</h2>
            <div className="flex flex-wrap gap-3">
              {["HTML/CSS","JavaScript","PHP","MySQL","Flutter","Firebase"].map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}
