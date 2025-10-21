import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Users, 
  Clock, 
  Lightbulb, 
  MessageSquare, 
  Target,
  Database,
  Layout,
  Smartphone
} from "lucide-react";

const technicalSkills = [
  { name: "HTML/CSS", icon: Layout, category: "Frontend" },
  { name: "JavaScript", icon: Code2, category: "Programming" },
  { name: "PHP", icon: Code2, category: "Backend" },
  { name: "MySQL", icon: Database, category: "Database" },
  { name: "Flutter", icon: Smartphone, category: "Mobile" },
  { name: "Firebase", icon: Database, category: "Cloud" },
];

const softSkills = [
  { name: "Project Management", icon: Target },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
  { name: "Critical Thinking", icon: Lightbulb },
  { name: "Effective Communication", icon: MessageSquare },
  { name: "Leadership", icon: Users },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-muted/30" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-center" data-testid="heading-skills">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A combination of technical proficiency and essential soft skills
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold" data-testid="heading-technical-skills">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 hover-elevate"
                    data-testid={`card-tech-skill-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold" data-testid={`text-skill-name-${index}`}>{skill.name}</p>
                        <p className="text-xs text-muted-foreground" data-testid={`text-skill-category-${index}`}>
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold" data-testid="heading-soft-skills">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 hover-elevate"
                    data-testid={`card-soft-skill-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-chart-2/10">
                        <Icon className="h-5 w-5 text-chart-2" />
                      </div>
                      <p className="font-semibold" data-testid={`text-soft-skill-${index}`}>{skill.name}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-sm px-4 py-2" data-testid="badge-public-relations">
            Public Relations
          </Badge>
        </div>
      </div>
    </section>
  );
}
