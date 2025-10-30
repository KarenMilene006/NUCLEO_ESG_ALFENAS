import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Ícones para o menu mobile

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "quem-somos", label: "Quem Somos" },
    { id: "o-que-fazemos", label: "O que Fazemos" },
    { id: "empresas", label: "Empresas" },
    { id: "como-funciona", label: "Como Funciona" },
    { id: "por-que-esg", label: "Por que ESG?" },
    { id: "contato", label: "Contato" },
  ];

  // Efeito de scroll para mudar o fundo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observer para links ativos (lógica mantida)
  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-49% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => section && observer.observe(section));
    
    // Resetar no topo
    const handleTopScroll = () => {
      if (window.scrollY < 50) setActiveNav(null);
    };
    window.addEventListener("scroll", handleTopScroll);

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, [links]);

  return (
    <motion.header
      className={`fixed w-full z-50 top-0 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#0B2B27]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <img src="/src/assets/logo-header.png" alt="Logo" className="w-34 h-11" />

          {/* Navegação desktop */}
          <nav className="hidden md:flex space-x-6 font-medium relative">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative pb-1 text-white hover:text-[#50FFB1] transition-colors ${
                  activeNav === link.id ? "text-[#50FFB1]" : ""
                }`}
                aria-current={activeNav === link.id ? "page" : undefined}
              >
                {link.label}
                {activeNav === link.id && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-[#50FFB1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Botão CTA desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#50FFB1] text-[#0B2B27] font-semibold px-4 py-2 rounded-full hover:brightness-110 transform hover:scale-105 transition-all"
            >
              Agende seu diagnóstico
            </a>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F4D3C] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3 font-medium">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-white hover:text-[#50FFB1] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/55SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#50FFB1] text-[#0B2B27] font-semibold px-4 py-3 rounded-full hover:brightness-110 transition text-center mt-4"
              >
                Agende seu diagnóstico
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};