import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0B2B27] text-white py-12" // Mais padding
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Coluna da esquerda */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Núcleo ESG Alfenas</h3>
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* Links institucionais */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.alfenas.mg.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#50FFB1] transition"
            >
              Prefeitura de Alfenas
            </a>
            <a
              href="https://www.mg.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#50FFB1] transition"
            >
              Governo de Minas Gerais
            </a>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
};