import { GraduationCap, Award, Calendar } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    degree: "Higher National Diploma in Information Technology",
    institution: "SLIATE Galle",
    location: "Galle, Sri Lanka",
    period: "2023 - Present",
    details: [],
    status: "In Progress",
  },
  {
    id: 2,
    degree: "Advanced Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2021",
    details: ["Completed with C passes in ART Stream"],
    status: "Completed",
  },
  {
    id: 3,
    degree: "Ordinary Level",
    institution: "St Thomas College",
    location: "Matara, Sri Lanka",
    period: "2017",
    details: ["4 A passes", "3 B passes", "2 C passes"],
    status: "Completed",
  },
];

const certificates = [
  {
    title: "Certificate of English Language",
    institution: "BritishWay English Academy, Matara",
    year: "2021",
  },
];

export default function Education() {
  return (
    <section className="section-wrap overflow-hidden">
      <div className="orb float-animation -left-20 top-12 h-64 w-64 bg-accent/15" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <Badge className="mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary">
            Education
          </Badge>
          <h2 className="text-3xl font-bold md:text-5xl">Academic journey</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
              >
                <Card className="glass-panel rounded-3xl p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  </div>
                  <p className="font-medium text-foreground">{edu.institution}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant={edu.status === "In Progress" ? "default" : "secondary"} className="rounded-full">
                      <Calendar className="mr-1 h-3 w-3" />
                      {edu.period}
                    </Badge>
                    <span>{edu.location}</span>
                    <span>{edu.status}</span>
                  </div>
                  {edu.details.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.details.map((detail) => (
                        <Badge key={detail} variant="outline" className="rounded-full">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <Card className="glass-panel h-fit rounded-3xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Certificates</h3>
            </div>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.title} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.year}</p>
                </div>
              ))}
            </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
