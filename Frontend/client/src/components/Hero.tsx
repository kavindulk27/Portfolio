import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Download,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Server,
  Workflow,
  Database,
  Code2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import profileImage from "@assets/generated_images/WhatsApp Image 2025-10-03 at 09.06.23_f57b9b98.jpg";

const stack = [
  { label: "Frontend", icon: Code2 },
  { label: "Backend", icon: Server },
  { label: "API Design", icon: Workflow },
  { label: "Databases", icon: Database },
];

const holoBlocks = [
  { size: "h-20 w-20", position: "right-[6%] top-[18%]", delay: 0 },
  { size: "h-14 w-14", position: "right-[20%] top-[36%]", delay: 0.7 },
  { size: "h-24 w-24", position: "right-[10%] top-[56%]", delay: 1.1 },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const typingText = "Full Stack Software Engineer";
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const atEnd = charIndex === typingText.length;
    const atStart = charIndex === 0;
    const delay = isDeleting ? 90 : 150;

    const timer = setTimeout(
      () => {
        if (!isDeleting && atEnd) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && atStart) {
          setIsDeleting(false);
          return;
        }

        const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextIndex);
        setTypedText(typingText.slice(0, nextIndex));
      },
      atEnd && !isDeleting ? 1400 : delay
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingText]);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/Kavindu-Kumanayaka-FlowCV-Resume-20260120.pdf";
    link.download = "Kavindu-Kumanayaka-FlowCV-Resume-20260120.pdf";
    link.click();

    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 1200);

    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-wrap overflow-hidden pt-4 pb-0 md:pt-6 md:pb-0">
      <div className="orb float-animation left-[-100px] top-12 h-72 w-72 bg-primary/25" />
      <div className="orb float-animation-delayed bottom-10 right-[-120px] h-80 w-80 bg-primary/20" />
      <div className="ai-grid" />
      <div className="ai-scanlines" />
      {holoBlocks.map((block) => (
        <motion.div
          key={block.position}
          className={`pointer-events-none absolute ${block.position} hidden rounded-2xl border border-border/70 bg-background/20 backdrop-blur-sm lg:block ${block.size}`}
          initial={{ opacity: 0.35, rotateX: 65, rotateZ: 8 }}
          animate={{
            opacity: [0.3, 0.65, 0.3],
            y: [0, -14, 0],
            rotateY: [0, 18, -10, 0],
            rotateZ: [8, 0, -6, 8],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: block.delay }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 [perspective:1200px] lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge className="rounded-full border border-emerald-700/45 bg-emerald-600/20 px-4 py-2 text-emerald-900 shadow-[0_0_18px_rgba(16,185,129,0.2)] dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300 dark:shadow-[0_0_24px_rgba(52,211,153,0.25)]">
              <span className="relative mr-2 inline-flex items-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-emerald-500/60 animate-ping dark:bg-emerald-400/50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-700 dark:bg-emerald-300" />
              </span>
              Online
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
              <span className="gradient-text">{typedText}</span>
              <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-foreground/80 align-[-0.1em]" />
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I am Kavindu Kumanayaka, an engineer focused on practical product delivery with scalable APIs,
              clean UI architecture, and data-driven systems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Matara, Sri Lanka
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5">
              <Mail className="h-4 w-4 text-primary" />
              kavindukumanayaka@gmail.com
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Button onClick={scrollToProjects} className="rounded-full px-7">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadCV}
              className="rounded-full border-primary/40 bg-card/60 px-7 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {isDownloaded ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className={`mr-2 h-4 w-4 ${isDownloading ? "animate-spin" : ""}`} />
                  {isDownloading ? "Downloading..." : "Download CV"}
                </>
              )}
            </Button>
            <Button asChild variant="ghost" className="rounded-full border border-border/70 bg-card/60">
              <a href="https://github.com/kavindulk27" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full border border-border/70 bg-card/60">
              <a href="https://www.linkedin.com/in/kavindu-kumanayaka" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileHover={{ rotateX: 5, rotateY: -6, y: -8 }}
          style={{ transformOrigin: "center center" }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
            rotateX: [0, 1.2, 0],
            rotateY: [0, -1.8, 0],
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="ai-holo relative rounded-[2rem] border border-border/70 bg-card/55 p-6 shadow-2xl backdrop-blur-xl [transform-style:preserve-3d] md:p-8"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2rem] border border-primary/20"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative mx-auto mb-8 h-44 w-44 overflow-hidden rounded-3xl border border-border/70 bg-background/40 shadow-xl"
            animate={{ scale: [1, 1.03, 1], y: [0, -3, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={profileImage} alt="Kavindu Kumanayaka" className="h-full w-full object-cover" />
          </motion.div>

          <h2 className="text-center text-2xl font-bold">Kavindu Kumanayaka</h2>
          <p className="mt-1 text-center text-sm text-muted-foreground">Engineer profile snapshot</p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {stack.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-background/60 p-3">
                  <Icon className="mb-2 h-4 w-4 text-primary" />
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
