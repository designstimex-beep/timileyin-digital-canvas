import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Platforms from "@/components/Platforms";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ProjectShowcase />
      <Platforms />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;