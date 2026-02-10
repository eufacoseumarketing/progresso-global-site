import GlassmorphismHero from "./ui/glassmorphism-trust-hero";
import heroBg from "@/assets/hero-bg.jpg";
import logosParceiros from "@/assets/logos-parceiros.png";

export const Hero = () => {
  return (
    <GlassmorphismHero 
      backgroundImage={heroBg} 
      partnerLogos={logosParceiros} 
    />
  );
};
