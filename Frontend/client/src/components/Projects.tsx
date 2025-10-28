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
    <section className="py-20 px-6 bg-muted/30" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-center" data-testid="heading-projects">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my development work, from database systems to mobile applications
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-elevate group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-3" data-testid={`badge-type-${project.id}`}>
                    {project.type}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs font-mono"
                      data-testid={`badge-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
