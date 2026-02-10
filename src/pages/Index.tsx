import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EducationTabs } from "@/components/EducationTabs";
import { History } from "@/components/History";
import { Results } from "@/components/Results";
import { Structure } from "@/components/Structure";
import { ISPEcosystem } from "@/components/ISPEcosystem";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EducationTabs />
        <History />
        <Results />
        <Structure />
        <ISPEcosystem />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
