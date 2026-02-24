import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import restaurantImage from "@assets/generated_images/Restaurant_DBMS_interface_screenshot_e86a32b0.png";
import studentImage from "@assets/generated_images/Student_management_app_mockup_7b7c2c9a.png";
import tourismImage from "@assets/generated_images/Tourism_website_mockup_screenshot_b8978a4a.png";
import aiConceptImage from "@assets/generated_images/ChatGPT Image Oct 31, 2025, 11_07_35 AM.png";

const projects = [
  {
    id: 1,
    title: "Restaurant Database Management System",
    type: "Individual Project",
    description:
      "A full-stack management system that automates ordering, billing, reservations, and inventory flow.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: restaurantImage,
  },
  {
    id: 2,
    title: "Student Management Platform",
    type: "Group Project",
    description:
      "Cross-platform system with Flutter and Firebase for attendance, grading, and live academic data updates.",
    technologies: ["Flutter", "Firebase"],
    image: studentImage,
  },
  {
    id: 3,
    title: "Tourism and Travel Website",
    type: "Individual Project",
    description:
      "Responsive tourism site that helps visitors explore locations, discover nearby hotels, and plan travel.",
    technologies: ["HTML", "CSS"],
    image: tourismImage,
  },
  {
    id: 4,
    title: "AI Portfolio Concept UI",
    type: "Design Concept",
    description:
      "A modern AI-inspired portfolio interface concept focused on visual depth, motion design, and clear content flow.",
    technologies: ["UI Design", "Animation", "Modern Web"],
    image: aiConceptImage,
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const baseProjects = projects.slice(0, 3);
  const extraProjects = projects.slice(3);

  return (
    <section className="section-wrap overflow-hidden">
      <div className="orb float-animation -left-28 top-10 h-72 w-72 bg-chart-3/20" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <Badge className="mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary">
            Projects
          </Badge>
          <h2 className="mb-3 text-3xl font-bold md:text-5xl">Selected engineering work</h2>
          <p className="max-w-2xl text-muted-foreground">
            Projects focused on practical product usage, data flow management, and maintainable implementation.
          </p>
        </div>

        <div className="grid justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {baseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Card className="glass-panel flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[1.4rem] border-border/60">
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="px-4 pb-1 pt-4">
                  <Badge
                    variant="outline"
                    className="mb-2 w-fit rounded-full border-primary/35 px-2 py-0.5 text-[11px] text-primary"
                  >
                    {project.type}
                  </Badge>
                  <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
                  <CardDescription className="pt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grow px-4 pb-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full bg-muted/80 px-2 py-0.5 text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto gap-2 px-4 pb-4 pt-0">
                  <Button size="sm" className="h-8 flex-1 whitespace-nowrap rounded-full px-2 text-xs">
                    <Github className="mr-1 h-3.5 w-3.5 shrink-0" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 flex-1 whitespace-nowrap rounded-full px-2 text-xs">
                    <ExternalLink className="mr-1 h-3.5 w-3.5 shrink-0" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          <AnimatePresence>
            {showAll &&
              extraProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 26, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="glass-panel flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[1.4rem] border-border/60">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="px-4 pb-1 pt-4">
                      <Badge
                        variant="outline"
                        className="mb-2 w-fit rounded-full border-primary/35 px-2 py-0.5 text-[11px] text-primary"
                      >
                        {project.type}
                      </Badge>
                      <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
                      <CardDescription className="pt-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grow px-4 pb-3 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="rounded-full bg-muted/80 px-2 py-0.5 text-[11px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto gap-2 px-4 pb-4 pt-0">
                      <Button size="sm" className="h-8 flex-1 whitespace-nowrap rounded-full px-2 text-xs">
                        <Github className="mr-1 h-3.5 w-3.5 shrink-0" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 flex-1 whitespace-nowrap rounded-full px-2 text-xs">
                        <ExternalLink className="mr-1 h-3.5 w-3.5 shrink-0" />
                        Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="outline"
                className="rounded-full border-primary/35 px-6 shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-[0_0_28px_hsl(var(--primary)/0.3)]"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show Less" : "More Projects"}
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
