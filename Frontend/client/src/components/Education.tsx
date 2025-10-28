import { GraduationCap } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";

const education = [
  {
    id: 1,
    degree: "Higher National Diploma in Information Technology",
    institution: "SLIATE Galle",
    location: "Galle, Sri Lanka",
    period: "2023 - Present",
    details: [],
  },
  {
    id: 2,
    degree: "Advanced Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2021",
    details: ["Completed (C) passes in ART Stream"],
  },
  {
    id: 3,
    degree: "Ordinary Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2017",
    details: ["4 (A) passes", "3 (B) passes", "2 (C) passes"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/10 relative overflow-hidden">
      {/* Optional subtle gradient circles for modern look */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          My academic journey and qualifications
        </p>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <Card
              key={edu.id}
              className="relative p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-6 p-2 rounded-full bg-background border-2 border-primary">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>

              {/* Degree and Current Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                {index === 0 && <Badge variant="default">Current</Badge>}
              </div>

              {/* Institution */}
              <p className="text-primary/90 font-medium mb-1">{edu.institution}</p>

              {/* Location & Period */}
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{edu.period}</span>
              </div>

              {/* Details Badges */}
              {edu.details.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.details.map((detail, detailIndex) => (
                    <Badge
                      key={detailIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {detail}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Certificates */}
        <Card className="mt-12 p-6 rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500">
          <h3 className="text-lg font-semibold mb-3">Certificates</h3>
          <div>
            <p className="font-medium">Certificate of English Language</p>
            <p className="text-sm text-muted-foreground">BritishWay English Academy, Matara</p>
            <p className="text-sm text-muted-foreground">2021</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
