import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/40 backdrop-blur-xl">
      {/* Decorative gradient glows */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kavindu Kumanayaka
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Software Developer · HNDIT Student
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            {["about", "projects", "education", "skills", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Social buttons */}
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <a
                href="https://github.com/kavindulk27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <a
                href="https://linkedin.com/in/kavindu-lakshan-485427370"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <a href="mailto:kavindukumanayaka@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-foreground">Kavindu Kumanayaka</span> — All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
