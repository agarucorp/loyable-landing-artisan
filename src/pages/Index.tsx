
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-dark">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
