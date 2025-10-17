"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Users, Clock, Lightbulb, MessageSquare, Target, Database, Layout, Smartphone, } from "lucide-react";
const technicalSkills = [
    { name: "HTML/CSS", icon: Layout, category: "Frontend", level: 90 },
    { name: "JavaScript", icon: Code2, category: "Programming", level: 85 },
    { name: "PHP", icon: Code2, category: "Backend", level: 80 },
    { name: "MySQL", icon: Database, category: "Database", level: 75 },
    { name: "Flutter", icon: Smartphone, category: "Mobile", level: 70 },
    { name: "Firebase", icon: Database, category: "Cloud", level: 65 },
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
    return (_jsx("section", { className: "py-20 px-6 bg-gradient-to-b from-muted/30 to-background", id: "skills", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl font-bold tracking-tight mb-4 text-center", children: "Skills & Expertise" }), _jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.3, duration: 0.6 }, className: "text-center text-muted-foreground mb-12 max-w-2xl mx-auto", children: "A blend of modern technical proficiency and essential professional skills." }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "space-y-6", children: [_jsx("h3", { className: "text-2xl font-semibold", children: "Technical Skills" }), _jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: technicalSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (_jsxs(Card, { className: "p-5 transition-all hover:shadow-lg hover:-translate-y-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-3", children: [_jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: _jsx(Icon, { className: "h-5 w-5 text-primary" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: skill.name }), _jsx("p", { className: "text-xs text-muted-foreground", children: skill.category })] })] }), _jsx(Progress, { value: skill.level, className: "h-2" }), _jsxs("p", { className: "text-right text-xs text-muted-foreground mt-1", children: [skill.level, "%"] })] }, index));
                                    }) })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, className: "space-y-6", children: [_jsx("h3", { className: "text-2xl font-semibold", children: "Soft Skills" }), _jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: softSkills.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (_jsx(motion.div, { whileHover: { scale: 1.03 }, transition: { type: "spring", stiffness: 200 }, children: _jsx(Card, { className: "p-5 bg-gradient-to-br from-card via-muted/40 to-background border border-border/40 backdrop-blur-sm transition-all shadow-sm hover:shadow-md", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 rounded-full bg-primary/10 ring-1 ring-primary/20 shadow-inner", children: _jsx(Icon, { className: "h-5 w-5 text-primary" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-foreground", children: skill.name }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Strength in collaboration and problem-solving" })] })] }) }) }, index));
                                    }) })] })] }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, className: "mt-12 text-center", children: _jsx(Badge, { variant: "outline", className: "text-sm px-4 py-2", children: "Public Relations" }) })] }) }));
}
