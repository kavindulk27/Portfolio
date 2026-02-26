import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_mt65ofk",
        "template_71p3pw9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "1hzg79Lo5qdbfUaQE"
      )
      .then(
        () => {
          alert("Message sent successfully.");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Something went wrong. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kavindukumanayaka@gmail.com", href: "mailto:kavindukumanayaka@gmail.com" },
    { icon: Phone, label: "Phone", value: "0773490598", href: "tel:0773490598" },
    { icon: MapPin, label: "Location", value: "Udaya, Kahagala South, Akurugoda, Kamburupitiya, Sri Lanka", href: null },
    { icon: Github, label: "GitHub", value: "github.com/kavindulk27", href: "https://github.com/kavindulk27" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kavindu-kumanayaka",
      href: "https://www.linkedin.com/in/kavindu-kumanayaka",
    },
  ];

  return (
    <section className="section-wrap overflow-hidden">
      <div className="orb float-animation-delayed right-[-80px] top-16 h-60 w-60 bg-primary/20" />
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-3xl font-bold md:text-5xl"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mb-10 max-w-2xl text-muted-foreground"
        >
          I am open to internship and full-stack engineering opportunities. Reach out for collaboration or project work.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="glass-panel rounded-3xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border border-primary/25 bg-primary/10 p-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="break-all font-medium hover:text-primary"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.12 }}
            whileHover={{ y: -4 }}
          >
            <Card className="glass-panel rounded-3xl p-6">
            <h3 className="mb-4 text-xl font-semibold">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl border-border/70 bg-background/70"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl border-border/70 bg-background/70"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="resize-none rounded-2xl border-border/70 bg-background/70"
              />
              <Button type="submit" size="lg" disabled={isSending} className="w-full rounded-2xl">
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
