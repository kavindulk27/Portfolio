import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_d69310b8.png';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/K.L Kumanayaka CV  (1)_1759290916564.pdf';
    link.download = 'Kavindu_Kumanayaka_CV.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <Card className="p-8 md:p-12">
          {/* CV Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className="aspect-square w-40 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Kavindu Kumanayaka" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2" data-testid="text-name">
                  Kavindu Kumanayaka
                </h1>
                <p className="text-xl md:text-2xl font-medium text-primary" data-testid="text-title">
                  Software Developer (Undergraduate)
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2" data-testid="contact-location">
                  <MapPin className="h-4 w-4" />
                  <span>SLIATE Labuduwa</span>
                </div>
                <div className="flex items-center gap-2" data-testid="contact-email">
                  <Mail className="h-4 w-4" />
                  <span>kavindu@example.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  data-testid="link-github"
                >
                  <a 
                    href="https://github.com/kavindulk27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  data-testid="link-linkedin"
                >
                  <a 
                    href="https://linkedin.com/in/kavindu-lakshan-485427370" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadCV}
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Professional Summary */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-bio">
              Motivated and dedicated Information Technology undergraduate pursuing HNDIT at SLIATE Labuduwa. 
              A quick learner with strong problem-solving skills, seeking internship opportunities to apply IT knowledge 
              in real-world environments.
            </p>
          </div>

          <Separator className="my-6" />

          {/* Core Skills */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" data-testid="badge-tech-html">HTML/CSS</Badge>
              <Badge variant="secondary" data-testid="badge-tech-javascript">JavaScript</Badge>
              <Badge variant="secondary" data-testid="badge-tech-php">PHP</Badge>
              <Badge variant="secondary" data-testid="badge-tech-mysql">MySQL</Badge>
              <Badge variant="secondary" data-testid="badge-tech-flutter">Flutter</Badge>
              <Badge variant="secondary" data-testid="badge-tech-firebase">Firebase</Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
