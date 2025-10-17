"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const education = [
    {
        id: 1,
        degree: "Higher National Diploma in Information Technology",
        institution: "SLIATE",
        location: "Labuduwa, Galle, Sri Lanka",
        period: "2023 - Present",
        details: [],
    },
    {
        id: 2,
        degree: "Advanced Level",
        institution: "St Thomas College",
        location: "Matara, Sri Lanka",
        period: "2021",
        details: ["Completed (C) passes in Art Stream"],
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
    return (_jsx("section", { className: "py-20 px-6 bg-gradient-to-b from-muted/30 to-background", id: "education", children: _jsxs("div", { className: "max-w-5xl mx-auto relative", children: [_jsx(motion.h2, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-4xl font-bold tracking-tight mb-4 text-center", children: "Education" }), _jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.3, duration: 0.6 }, className: "text-center text-muted-foreground mb-12 max-w-2xl mx-auto", children: "My academic background and professional qualifications." }), _jsxs("div", { className: "relative pl-8 md:pl-16", children: [_jsx("div", { className: "absolute left-[22px] md:left-[32px] top-0 bottom-0 w-[2px] bg-primary/30" }), _jsx("div", { className: "space-y-12", children: education.map((edu, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: index * 0.15 }, className: "relative flex items-start gap-6", children: [_jsx("div", { className: "relative z-10 flex-shrink-0 mt-2", children: _jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/40 shadow-sm hover:shadow-primary/40 transition-all duration-300", children: _jsx(GraduationCap, { className: "h-5 w-5 text-primary" }) }) }), _jsxs("div", { className: "flex-1 p-6 rounded-xl bg-card/50 backdrop-blur-md border border-border/40 hover:shadow-lg transition-all duration-300", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [_jsx("h3", { className: "text-xl font-semibold text-foreground", children: edu.degree }), index === 0 && (_jsx(Badge, { variant: "default", className: "animate-pulse", children: "Current" }))] }), _jsx("p", { className: "text-muted-foreground font-medium", children: edu.institution }), _jsxs("div", { className: "flex flex-wrap gap-3 text-sm text-muted-foreground mt-1", children: [_jsx("span", { children: edu.location }), _jsx("span", { children: "\u2022" }), _jsx("span", { children: edu.period })] }), edu.details.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 pt-3", children: edu.details.map((detail, detailIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: detail }, detailIndex))) }))] })] }, edu.id))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "mt-16 p-6 rounded-xl bg-gradient-to-br from-card via-muted/30 to-background border border-border/40 shadow-sm hover:shadow-lg transition-all", children: [_jsx("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: "\uD83C\uDF93 Certificates" }), _jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: _jsxs("div", { className: "p-4 rounded-lg bg-background/60 border border-border/30 hover:border-primary/40 transition-all", children: [_jsx("p", { className: "font-medium text-foreground", children: "Certificate of English Language" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "BritishWay English Academy, Matara" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "2021" })] }) })] })] }) }));
}
