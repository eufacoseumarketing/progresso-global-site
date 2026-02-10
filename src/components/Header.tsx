import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import flagUS from "@/assets/flag-us.png";
import logoProgresso from "@/assets/logo-progresso.png";

const navItems = [
  { label: "Educação Infantil", href: "#ciclos", tabId: "infantil" },
  { label: "Anos Iniciais", href: "#ciclos", tabId: "iniciais" },
  { label: "Anos Finais", href: "#ciclos", tabId: "finais" },
  { label: "Ensino Médio", href: "#ciclos", tabId: "medio" },
  { label: "IB Diploma Programme", href: "#ciclos", tabId: "ib" },
];

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, tabId: string) => {
  e.preventDefault();
  
  // Dispatch custom event to change the active tab
  window.dispatchEvent(new CustomEvent('changeEducationTab', { detail: { tabId } }));
  
  // Scroll to the section
  const element = document.querySelector(href);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoProgresso} alt="Colégio Progresso Bilíngue" className="h-20 md:h-24 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.tabId}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.tabId)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              <img src={flagUS} alt="English" className="w-6 h-4 object-cover rounded-sm" />
              <span>English</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container-narrow mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.tabId}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href, item.tabId);
                    setIsOpen(false);
                  }}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a href="#" className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors mt-4 py-2">
                <img src={flagUS} alt="English" className="w-6 h-4 object-cover rounded-sm" />
                <span>English</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
