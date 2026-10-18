import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <CommandPalette />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
