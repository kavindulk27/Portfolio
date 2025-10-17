import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline";
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, {}), _jsxs("main", { className: "pt-16", children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(WorkExperienceTimeline, {}), _jsx(Projects, {}), _jsx(Education, {}), _jsx(Skills, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
