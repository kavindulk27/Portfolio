"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[100vh] px-6 py-20 overflow-hidden text-center"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto mb-10"
        >
          <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
            <img src={profileImage} alt="Kavindu Kumanayaka" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Pixel Gradient Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#00F5A0] via-[#00D9F5] to-[#9B5FFF] bg-clip-text text-transparent"
          style={{
            fontFamily: "'Audiowide', 'Orbitron', 'Poppins', sans-serif",
            letterSpacing: "1px",
          }}
        >
          Kavindu Kumanayaka
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground"
        >
          Software Developer (Undergraduate)
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Matara, Sri Lanka</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <span>kavindukumanayaka@gmail.com</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            onClick={handleDownloadCV}
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 hover:text-white transition-all"
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="https://github.com/kavindulk27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#00F5A0] transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/kavindu-lakshan-485427370"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#00D9F5] transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["HTML/CSS", "JavaScript", "PHP", "MySQL", "Flutter", "Firebase"].map((skill, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-3 py-1 rounded-full border border-white/20 bg-white/5 hover:bg-[#00F5A0]/10 hover:border-[#00F5A0]/40 transition-all"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
