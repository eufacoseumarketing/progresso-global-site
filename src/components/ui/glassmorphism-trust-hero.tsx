import React from "react";
import { Target, Crown, Star, GraduationCap, Users, Globe, Award } from "lucide-react";

// --- STATS DATA ---
const STATS = [{
  value: "50+",
  label: "Anos de História"
}, {
  value: "98%",
  label: "Aprovação"
}, {
  value: "1.2K+",
  label: "Alunos"
}];

// --- SUB-COMPONENTS ---
const StatItem = ({
  value,
  label
}: {
  value: string;
  label: string;
}) => <div className="text-center">
    <p className="text-2xl font-bold text-primary-foreground">{value}</p>
    <p className="text-xs text-primary-foreground/70">{label}</p>
  </div>;
interface GlassmorphismHeroProps {
  backgroundImage: string;
  partnerLogos: string;
}

// --- MAIN COMPONENT ---
export default function GlassmorphismHero({
  backgroundImage,
  partnerLogos
}: GlassmorphismHeroProps) {
  return <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-8">
      {/* Scoped Animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee-scroll {
          animation: marquee 30s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Image with Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Estudantes do Colégio Progresso" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="container-narrow mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="text-left space-y-8">
            
            {/* Partner Logos with Neon Effect */}
            <div className="animate-fade-slide-in flex items-center">
              <img src={partnerLogos} alt="Colégio Progresso Bilíngue - ISP International Schools Partnership - IB World School" className="h-[72px] md:h-[82px] w-auto object-contain" />
            </div>

            {/* Badge */}
            <div className="animate-fade-slide-in delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <Star className="w-4 h-4 text-accent fill-accent" />
                </div>
                <span className="text-sm font-medium text-primary">
                  Escola IB World School
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-slide-in delay-200 text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Where{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-highlight">Confidence</span>
                <span className="absolute inset-0 bg-highlight/20 blur-xl rounded-full" />
              </span>{" "}
              Grows
            </h1>

            {/* Description */}
            <p className="animate-fade-slide-in delay-300 text-base md:text-lg text-primary/90 leading-relaxed max-w-xl">
              No Colégio Progresso Bilíngue, unimos excelência acadêmica, esportiva e cultural à inovação para formar estudantes confiantes, criativos e preparados para o mundo. Nossa educação com foco em múltiplas linguagens, aliada ao IB Diploma Programme no Ensino Médio, desenvolve pensamento crítico, autonomia e protagonismo em um ambiente acolhedor e estimulante.

Aqui, conhecimento ganha propósito, conectando aprendizagem, valores e experiências que transformam vidas.






            </p>

          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="hidden lg:flex flex-col gap-6">
            
            {/* Stats Card */}
            <div className="animate-fade-slide-in delay-300 animate-float relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-highlight/30 via-accent/30 to-highlight/30 rounded-3xl blur-xl opacity-50" />
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-foreground">50+</p>
                    <p className="text-sm text-primary-foreground/70">Anos de Excelência</p>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-primary-foreground/80">Índice de Satisfação</span>
                    <span className="text-accent font-semibold">98%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-highlight to-accent rounded-full" style={{
                    width: '98%'
                  }} />
                  </div>
                </div>

                <div className="h-px bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <StatItem value="1.2K+" label="Alunos" />
                  <StatItem value="150+" label="Professores" />
                  <StatItem value="25+" label="Países" />
                </div>

                {/* Tag Pills */}
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 rounded-full text-xs font-medium text-primary-foreground border border-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    MATRÍCULAS ABERTAS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 rounded-full text-xs font-medium text-accent border border-accent/30">
                    <Crown className="w-3 h-3" />
                    IB DIPLOMA
                  </span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </section>;
}