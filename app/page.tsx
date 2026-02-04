import About from "@/components/layout/About";
import Experience from "@/components/layout/Experience";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import { Testimonials } from "@/components/layout/Testimonials";
import { Contact } from "@/components/layout/Contact";

export default function Home() {
  return (
    <div className="min-h-screen overfow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  );
}
