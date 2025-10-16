"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">Get In Touch</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Card key={i} className="p-4 hover:shadow-lg transition-all flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
              <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
              <Textarea placeholder="Your Message" rows={6} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} required className="resize-none" />
              <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
