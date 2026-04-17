
import Footer from "./src/components/Footer";
import HeroSection from "./src/components/HeroSection";
import MethodSection from "./src/components/MethodSection";
import Navbar from "./src/components/Navbar";
import ProjectsSection from "./src/components/ProjectsSection";
import ServicesSection from "./src/components/ServicesSection";
import StatsSection from "./src/components/StatsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      
      <ServicesSection />
      <ProjectsSection />
      <MethodSection />

      <Footer />
    </main>
  );
}