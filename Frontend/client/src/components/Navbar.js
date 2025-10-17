"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };
    // Detect active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "experience",
                "projects",
                "education",
                "skills",
                "contact",
            ];
            let current = "home";
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3 &&
                        rect.bottom >= window.innerHeight / 3) {
                        current = id;
                    }
                }
            });
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];
    return (_jsxs(motion.nav, { initial: { y: -60, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6, ease: "easeOut" }, className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40 shadow-md", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between", children: [_jsxs(motion.h1, { className: "text-2xl font-bold tracking-tight cursor-pointer \r\n          bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent select-none", whileHover: { scale: 1.05 }, onClick: () => scrollToSection("home"), children: ["Kavindu LK", _jsx("span", { className: "text-primary" })] }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navItems.map((item) => (_jsxs("button", { onClick: () => scrollToSection(item.id), className: `relative text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"}`, children: [item.label, activeSection === item.id && (_jsx(motion.span, { layoutId: "activeIndicator", className: "absolute left-0 -bottom-1 h-[2px] w-full rounded-full \r\n                  bg-gradient-to-r from-primary to-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" }))] }, item.id))) }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "md:hidden text-muted-foreground hover:text-foreground transition-colors", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.3 }, className: "md:hidden bg-background/95 border-t border-border/40 px-6 pb-4", children: _jsx("div", { className: "flex flex-col space-y-3 mt-4", children: navItems.map((item) => (_jsx(motion.button, { onClick: () => scrollToSection(item.id), whileHover: { scale: 1.03, x: 4 }, className: `text-base font-medium text-left transition-all ${activeSection === item.id
                                ? "text-primary"
                                : "text-muted-foreground hover:text-foreground"}`, children: item.label }, item.id))) }) })) })] }));
}
