import { Card } from "@/components/ui/card";
import { GraduationCap, Code, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center" data-testid="heading-about">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold" data-testid="text-profile-heading">Professional Profile</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-profile-description">
              I'm currently pursuing a Higher National Diploma in Information Technology at SLIATE Labuduwa. 
              My passion lies in creating efficient digital solutions that solve real-world problems. 
              With a strong foundation in web development and mobile applications, I'm eager to contribute 
              to innovative projects and grow as a professional developer.
            </p>
            <div className="flex gap-2 pt-2">
              <Badge variant="outline" data-testid="badge-language-english">English</Badge>
              <Badge variant="outline" data-testid="badge-language-sinhala">Sinhala</Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-6 hover-elevate" data-testid="card-stat-education">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">HNDIT at SLIATE Galle</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-stat-projects">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <FolderGit2 className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Projects Completed</h4>
                  <p className="text-sm text-muted-foreground">3 Major Projects</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-stat-skills">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-chart-3/10">
                  <Code className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tech Skills</h4>
                  <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
