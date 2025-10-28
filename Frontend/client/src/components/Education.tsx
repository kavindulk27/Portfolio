import { GraduationCap } from "lucide-react";
import { Badge } from "../components/ui/badge";

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
    <section className="py-20 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-center" data-testid="heading-education">
          Education
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          My academic journey and qualifications
        </p>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative pl-8 md:pl-20">
                <div className="absolute left-[-8px] md:left-[24px] top-1 p-2 rounded-full bg-background border-2 border-primary">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>

                <div className="space-y-2" data-testid={`education-item-${edu.id}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold" data-testid={`text-degree-${edu.id}`}>
                      {edu.degree}
                    </h3>
                    {index === 0 && (
                      <Badge variant="default" data-testid="badge-current">Current</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground" data-testid={`text-institution-${edu.id}`}>
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span data-testid={`text-location-${edu.id}`}>{edu.location}</span>
                    <span>•</span>
                    <span data-testid={`text-period-${edu.id}`}>{edu.period}</span>
                  </div>
                  {edu.details.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.details.map((detail, detailIndex) => (
                        <Badge 
                          key={detailIndex} 
                          variant="secondary"
                          data-testid={`badge-detail-${edu.id}-${detailIndex}`}
                        >
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h3 className="text-lg font-semibold mb-3" data-testid="heading-certificates">Certificates</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium" data-testid="text-cert-name">Certificate of English Language</p>
              <p className="text-sm text-muted-foreground" data-testid="text-cert-org">BritishWay English Academy, Matara</p>
              <p className="text-sm text-muted-foreground" data-testid="text-cert-year">2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
