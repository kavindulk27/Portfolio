// src/components/WorkExperience.tsx
export default function WorkExperience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "ABC Tech Solutions",
      duration: "Jan 2025 - Jun 2025",
      description: "Worked on React-based web applications, improving UI/UX and optimizing performance.",
    },
    {
      role: "IT Support Assistant",
      company: "SLIATE Labuduwa",
      duration: "Jul 2024 - Dec 2024",
      description: "Provided IT support, maintained systems, and assisted with software deployment.",
    },
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 border border-border rounded-2xl bg-background/50 backdrop-blur-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-primary/90 font-medium">{exp.company} · {exp.duration}</p>
            <p className="text-muted-foreground mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
