import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import restaurantImage from '@assets/generated_images/Restaurant_DBMS_interface_screenshot_e86a32b0.png';
import studentImage from '@assets/generated_images/Student_management_app_mockup_7b7c2c9a.png';
import tourismImage from '@assets/generated_images/Tourism_website_mockup_screenshot_b8978a4a.png';

const projects = [
  {
    id: 1,
    title: "Restaurant Database Management System",
    type: "Individual Project",
    description: "RDMS streamlines restaurant operations by automating food orders, inventory, billing, and reservations.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: restaurantImage,
  },
  {
    id: 2,
    title: "Student Management System",
    type: "Group Project",
    description: "Cross-platform Student System using Flutter & Firebase for real-time data, attendance, grades, and reports.",
    technologies: ["Flutter", "Firebase"],
    image: studentImage,
  },
  {
    id: 3,
    title: "Tourism & Travel Website",
    type: "Individual Project",
    description: "This website helps tourists find beautiful places in Sri Lanka and provides information about hotels nearby.",
    technologies: ["HTML", "CSS"],
    image: tourismImage,
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-muted/10" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of my development work, from database systems to mobile applications
        </p>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden relative rounded-3xl bg-background/50 backdrop-blur-xl border border-border/30 shadow-md hover:shadow-2xl transition duration-500 group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-t-3xl bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge
                    variant="outline"
                    className="mb-3 px-3 py-1 rounded-full text-sm text-primary border border-primary/30"
                  >
                    {project.type}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs font-mono bg-primary/10 border border-primary/20 rounded-full px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Gradient accent overlay */}
              <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
