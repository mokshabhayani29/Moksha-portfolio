import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects"
import Contact from "./components/Contact";
import TechMarquee from "./components/TechMarquee";

export default function Home() {
  return (
    <main className="bg-[#111111] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}