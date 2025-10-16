import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kavindukumanayaka@gmail.com",
      href: "mailto:kavindukumanayaka@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0773490598",
      href: "tel:0773490598",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Akurugoda, Kamburupitiya, Sri Lanka",
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kavi0427",
      href: "https://github.com/kavi0427",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kavindu-lakshan",
      href: "https://linkedin.com/in/kavindu-lakshan-485427370",
    },
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-center" data-testid="heading-contact">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently seeking internship opportunities. Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" data-testid="heading-contact-info">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-4 hover-elevate" data-testid={`card-contact-${index}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground" data-testid={`text-label-${index}`}>
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          data-testid={`link-contact-${index}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium" data-testid={`text-value-${index}`}>{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="heading-send-message">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <Button type="submit" size="lg" className="w-full" data-testid="button-send">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-lg bg-muted/50 border border-border">
          <h3 className="text-xl font-semibold mb-4" data-testid="heading-reference">Reference</h3>
          <div className="space-y-2">
            <p className="font-medium" data-testid="text-ref-name">Mrs D.N.P. Attanayake</p>
            <p className="text-muted-foreground" data-testid="text-ref-title">Senior Lecturer, SLIATE Galle</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
              <a href="tel:0718026983" className="hover:text-primary" data-testid="link-ref-phone">
                Phone: 0718026983
              </a>
              <a href="mailto:priyangika@sliate.ac.lk" className="hover:text-primary" data-testid="link-ref-email">
                Email: priyangika@sliate.ac.lk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
