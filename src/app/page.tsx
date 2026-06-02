import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectRow from "@/components/ProjectRow";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { workExperience } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <section id="experience">
        {workExperience.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </section>
      <AboutSection />
      <Footer />
    </main>
  );
}
