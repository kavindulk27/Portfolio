"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurantImage from '@assets/generated_images/Restaurant_DBMS_interface_screenshot_e86a32b0.png';
import studentImage from '@assets/generated_images/Student_management_app_mockup_7b7c2c9a.png';
import tourismImage from '@assets/generated_images/Tourism_website_mockup_screenshot_b8978a4a.png';
const projects = [
    { id: 1, title: "Restaurant Database Management System", type: "Individual Project", description: "RDMS streamlines restaurant operations...", technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], image: restaurantImage },
    { id: 2, title: "Student Management System", type: "Group Project", description: "Cross-platform student system using Flutter & Firebase.", technologies: ["Flutter", "Firebase"], image: studentImage },
    { id: 3, title: "Tourism & Travel Website", type: "Individual Project", description: "Website for tourists to explore Sri Lanka.", technologies: ["HTML", "CSS"], image: tourismImage },
];
export default function Projects() {
    return (_jsx("section", { className: "py-20 px-6 bg-muted/30", id: "projects", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold tracking-tight mb-4 text-center", children: "Featured Projects" }), _jsx("p", { className: "text-center text-muted-foreground mb-12 max-w-2xl mx-auto", children: "Showcase of development work, from database systems to mobile applications" }), _jsx("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 gap-8", children: projects.map(project => (_jsxs(Card, { className: "overflow-hidden hover-elevate group", children: [_jsx("div", { className: "aspect-video overflow-hidden bg-muted", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }) }), _jsxs("div", { className: "p-6 space-y-4", children: [_jsx(Badge, { variant: "outline", className: "mb-3", children: project.type }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: project.title }), _jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, i) => _jsx(Badge, { variant: "secondary", className: "text-xs font-mono", children: tech }, i)) })] })] }, project.id))) })] }) }));
}
