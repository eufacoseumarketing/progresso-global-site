import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import logoProgresso from "@/assets/logo-progresso-footer.png";
import ctaBackground from "@/assets/cta-background.jpg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="relative section-padding border-b border-primary-foreground/10 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        />
        {/* Color Overlay #e8d090 at 90% opacity - foto aparece bem pouco */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(232, 208, 144, 0.92)' }}
        />
        
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Venha Conhecer o{" "}
              <span className="text-primary">Colégio Progresso</span>
            </h2>
            <p className="text-lg text-primary mb-4 max-w-2xl mx-auto">
              Agende uma visita e descubra como podemos transformar o futuro do seu filho
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <img src={logoProgresso} alt="Colégio Progresso Bilíngue" className="h-16 md:h-20 w-auto brightness-0 invert" />
                <p className="text-highlight font-medium mt-2">Part of ISP Schools</p>
              </div>
              <p className="text-primary-foreground/70 mb-6 max-w-md">
                Há 125 anos formando estudantes confiantes, criativos e preparados para o mundo. 
                A primeira escola brasileira em Campinas a oferecer o IB Diploma Programme.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Ciclos de Ensino</h4>
              <ul className="space-y-3">
                <li><a href="#infantil" className="text-primary-foreground/70 hover:text-accent transition-colors">Educação Infantil</a></li>
                <li><a href="#iniciais" className="text-primary-foreground/70 hover:text-accent transition-colors">Anos Iniciais</a></li>
                <li><a href="#finais" className="text-primary-foreground/70 hover:text-accent transition-colors">Anos Finais</a></li>
                <li><a href="#medio" className="text-primary-foreground/70 hover:text-accent transition-colors">Ensino Médio</a></li>
                <li><a href="#ib" className="text-primary-foreground/70 hover:text-accent transition-colors">IB Diploma Programme</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-accent shrink-0" />
                  <span className="text-primary-foreground/70">(19) 3211-3800</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/70">Av. Júlio de Mesquita, 840 – Cambuí</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={20} className="text-accent shrink-0" />
                  <a 
                    href="https://www.instagram.com/progressobilingue" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    @progressobilingue
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-narrow mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2026 Colégio Progresso Bilíngue. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
