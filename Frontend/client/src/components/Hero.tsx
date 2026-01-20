import { useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import profileImage from "@assets/generated_images/WhatsApp Image 2025-10-03 at 09.06.23_f57b9b98.jpg";

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/Kavindu-Kumanayaka-FlowCV-Resume-20260120.pdf";
    link.download = "Kavindu-Kumanayaka-FlowCV-Resume-20260120.pdf";
    link.click();

    // Show checkmark after 1.2s
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 1200);

    // Reset after 3s
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-background via-background to-muted/10 overflow-hidden"
    >
      {/* Subtle gradient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full animate-pulse" />

      {/* Profile image */}
      <div className="relative group mb-8">
        <div className="w-44 h-44 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl transform group-hover:scale-105 transition duration-500">
          <img
            src={profileImage}
            alt="Kavindu Kumanayaka"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* Name + Title */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
          Kavindu Kumanayaka
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          Software Developer
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Matara, Sri Lanka</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <span>kavindukumanayaka@gmail.com</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 justify-center mt-6">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="group border-border hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
        >
          <a
            href="https://github.com/kavindulk27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
          </a>
        </Button>

        <Button
          variant="outline"
          size="sm"
          asChild
          className="group border-border hover:bg-primary hover:text-white transition-all duration-300 rounded-full"
        >
          <a
            href="https://www.linkedin.com/in/kavindu-kumanayaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-full flex items-center gap-2 justify-center"
          onClick={scrollToProjects}
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handleDownloadCV}
          className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full flex items-center justify-center gap-2"
        >
          {isDownloaded ? (
            <>
              <Check className="h-4 w-4 text-green-500 animate-bounce" />
              Downloaded
            </>
          ) : (
            <>
              <Download className={`h-4 w-4 ${isDownloading ? "animate-spin" : ""}`} />
              {isDownloading ? "Downloading..." : "Download CV"}
            </>
          )}
        </Button>
      </div>

      {/* Summary */}
      <div className="max-w-3xl mt-12 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Professional Summary</h2>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Passionate and detail-oriented <b>Information Technology undergraduate</b> pursuing HNDIT at SLIATE Labuduwa.
          A fast learner with a creative mindset and strong problem-solving skills, eager to apply academic knowledge
          to real-world software development challenges and deliver impactful, user-centered digital solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mt-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML/CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "React",
            "Flutter",
            "Firebase",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all rounded-full"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
