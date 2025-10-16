"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-background/80 via-muted/20 to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name & Tagline */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-2xl font-bold text-foreground">Kavindu Kumanayaka</p>
          <p className="text-sm text-muted-foreground">Software Developer | HNDIT Student</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com/kavindulk27" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-primary hover:text-primary/80 transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://linkedin.com/in/kavindu-lakshan-485427370" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-500 transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="mailto:kavindukumanayaka@gmail.com" 
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-emerald-500 hover:text-emerald-400 transition-colors" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-border/40 text-center py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kavindu Kumanayaka. All rights reserved.
      </div>
    </footer>
  );
}
