import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold" data-testid="text-footer-name">Kavindu Kumanayaka</p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Software Developer | HNDIT Student
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-education"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild data-testid="link-footer-github">
              <a 
                href="https://github.com/kavi0427" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="link-footer-linkedin">
              <a 
                href="https://linkedin.com/in/kavindu-lakshan-485427370" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild data-testid="link-footer-email">
              <a 
                href="mailto:kavindukumanayaka@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} Kavindu Kumanayaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
