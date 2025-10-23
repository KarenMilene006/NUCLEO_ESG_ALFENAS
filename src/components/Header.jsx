import React, { useState, useEffect } from "react";
import { Container } from "./Container";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null); 

  const links = [
    { id: "quem-somos", label: "Quem Somos" },
    { id: "o-que-fazemos", label: "O que Fazemos" },
    { id: "empresas", label: "Empresas" },
    { id: "como-funciona", label: "Como Funciona" },
     { id: "por-que-esg", label: "Por que ESG?" },
    { id: "contato", label: "Contato" },
  ];

  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-49% 0px -50% 0px", 
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Corrige o topo: se estiver no topo, não ativa nenhum link
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveNav(null);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-[#0B2B27] text-white fixed w-full z-50 shadow-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">Núcleo ESG Alfenas</div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex space-x-6 font-medium relative">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative pb-1 hover:text-[#50FFB1] transition-colors ${
                  activeNav === link.id ? "text-[#50FFB1]" : ""
                }`}
                aria-current={activeNav === link.id ? "page" : undefined}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#50FFB1] transition-all duration-300 ease-in-out ${
                    activeNav === link.id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Botão CTA desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#50FFB1] text-[#0B2B27] font-semibold px-4 py-2 rounded-md hover:brightness-90 transition"
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
              className="focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#0B2B27] px-4 py-4 space-y-3 font-medium shadow-inner">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="block hover:text-[#50FFB1] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#50FFB1] text-[#0B2B27] font-semibold px-4 py-2 rounded-md hover:brightness-90 transition text-center mt-2"
            >
              Agende seu diagnóstico
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
};
