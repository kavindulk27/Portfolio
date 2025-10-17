"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
    };
    const contactInfo = [
        { icon: Mail, label: "Email", value: "kavindukumanayaka@gmail.com", href: "mailto:kavindukumanayaka@gmail.com" },
        { icon: Phone, label: "Phone", value: "0773490598", href: "tel:0773490598" },
        { icon: MapPin, label: "Location", value: "Akurugoda, Kamburupitiya, Sri Lanka", href: null },
        { icon: Github, label: "GitHub", value: "github.com/kavindulk27", href: "https://github.com/kavindulk27" },
        { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kavindu-lakshan", href: "https://linkedin.com/in/kavindu-lakshan-485427370" },
    ];
    return (_jsx("section", { className: "py-20 px-6", id: "contact", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-4xl font-bold tracking-tight mb-12 text-center", children: "Get In Touch" }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "space-y-6", children: [_jsx("h3", { className: "text-2xl font-semibold", children: "Contact Information" }), contactInfo.map((info, i) => {
                                    const Icon = info.icon;
                                    return (_jsxs(Card, { className: "p-4 hover:shadow-lg transition-all flex items-center gap-4", children: [_jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: _jsx(Icon, { className: "h-5 w-5 text-primary" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: info.label }), info.href ? (_jsx("a", { href: info.href, target: "_blank", rel: "noopener noreferrer", className: "font-medium hover:text-primary transition-colors", children: info.value })) : (_jsx("p", { className: "font-medium", children: info.value }))] })] }, i));
                                })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Send a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx(Input, { placeholder: "Your Name", value: formData.name, onChange: e => setFormData({ ...formData, name: e.target.value }), required: true }), _jsx(Input, { type: "email", placeholder: "Your Email", value: formData.email, onChange: e => setFormData({ ...formData, email: e.target.value }), required: true }), _jsx(Textarea, { placeholder: "Your Message", rows: 6, value: formData.message, onChange: e => setFormData({ ...formData, message: e.target.value }), required: true, className: "resize-none" }), _jsxs(Button, { type: "submit", size: "lg", className: "w-full flex items-center justify-center gap-2", children: [_jsx(Send, { className: "h-4 w-4" }), " Send Message"] })] })] })] })] }) }));
}
