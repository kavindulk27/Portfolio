import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold" data-testid="text-logo">Kavindu LK</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
