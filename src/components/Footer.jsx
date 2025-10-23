import React from "react";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-[#0B2B27] text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Texto de direitos */}
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Núcleo ESG Alfenas. Todos os direitos reservados.
          </p>

          {/* Links institucionais ou redes */}
          <div className="flex items-center gap-4">
            <a href="https://www.alfenas.mg.gov.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#50FFB1] transition">
              Prefeitura de Alfenas
            </a>
            <a href="https://www.mg.gov.br" target="_blank" rel="noopener noreferrer" className="hover:text-[#50FFB1] transition">
              Governo de Minas Gerais
            </a>
            {/* Adicione outras redes sociais ou links conforme necessário */}
          </div>
        </div>
      </Container>
    </footer>
  );
};
