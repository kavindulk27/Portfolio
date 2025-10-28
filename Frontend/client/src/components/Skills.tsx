import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
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
    <section id="skills" className="py-24 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A combination of technical proficiency and essential soft skills
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className="p-5 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition duration-500 hover:scale-[1.03]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.category}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className="p-5 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-lg hover:shadow-2xl transition duration-500 hover:scale-[1.03]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-chart-2/10">
                        <Icon className="h-6 w-6 text-chart-2" />
                      </div>
                      <p className="font-semibold">{skill.name}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Optional Badge at bottom */}
        <div className="mt-12 text-center">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Public Relations
          </Badge>
        </div>
      </div>
    </section>
  );
}
