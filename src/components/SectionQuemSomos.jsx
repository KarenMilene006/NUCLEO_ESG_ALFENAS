import React, { useRef } from "react";
import { Container } from "./Container";
import { motion, useScroll, useTransform } from "framer-motion"; // NOVO: Imports

// ... (variante highlightVariants mantida)
const highlightVariants = {
  hidden: { opacity: 0.7, color: "#4B5563" },
  visible: {
    opacity: 1,
    color: "#2E7D32",
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

export const SectionQuemSomos = () => {
  // NOVO: Lógica para o parallax
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Do início ao fim da seção na tela
  });

  // Mapeia o progresso (0-1) para um movimento 'y'
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="quem-somos"
      ref={targetRef} // NOVO: Adicionado o ref
      className="bg-gray-50 py-24 scroll-mt-24 overflow-hidden" // NOVO: overflow-hidden
      aria-labelledby="quem-somos-title"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Texto (sem mudança no parallax) */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              id="quem-somos-title"
              className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight text-[#0B2B27]"
            >
              Quem Somos
            </h2>
            <div className="space-y-6 text-lg text-gray-700 md:text-xl leading-relaxed max-w-xl">
              {/* ... (conteúdo de texto mantido) ... */}
              <p>
                O{" "}
                <motion.strong
                  className="text-[#2E7D32]"
                  variants={highlightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  Núcleo ESG Alfenas
                </motion.strong>{" "}
                é uma iniciativa{" "}
                <strong className="text-[#2E7D32]">pioneira</strong> em Minas
                Gerais, criada para impulsionar o{" "}
                <strong className="text-[#2E7D32]">
                  desenvolvimento sustentável
                </strong>{" "}
                regional por meio da certificação{" "}
                <strong className="text-[#2E7D32]">ESG</strong> –{" "}
                <strong>Ambiental, Social e Governança</strong>.
              </p>
              <p>
                Nosso propósito é tornar{" "}
                <strong className="text-[#2E7D32]">Alfenas</strong> uma
                referência nacional em{" "}
                <strong className="text-[#2E7D32]">
                  responsabilidade corporativa
                </strong>
                , <strong className="text-[#2E7D32]">inovação</strong> e{" "}
                <strong className="text-[#2E7D32]">sustentabilidade</strong>,
                conectando o{" "}
                <strong className="text-[#2E7D32]">setor privado</strong>, o{" "}
                <strong className="text-[#2E7D32]">poder público</strong> e a{" "}
                <strong className="text-[#2E7D32]">sociedade civil</strong> em um
                movimento colaborativo alinhado à{" "}
                <strong className="text-[#2E7D32]">Agenda 2030</strong> da ONU e
                aos{" "}
                <strong className="text-[#2E7D32]">
                  17 Objetivos de Desenvolvimento Sustentável (ODS)
                </strong>
                .
              </p>
              <p className="font-medium">
                Contamos com o{" "}
                <strong className="text-[#2E7D32]">
                  apoio institucional
                </strong>{" "}
                da Prefeitura de Alfenas e do Governo de Minas Gerais,
                fortalecendo nosso compromisso em promover um{" "}
                <strong className="text-[#2E7D32]">
                  futuro mais ético, equilibrado e próspero
                </strong>
                .
              </p>
            </div>
          </motion.div>

          {/* Imagem - ALTERADO */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            // NOVO: Adicionando o 'y' do parallax
            style={{ y: yParallax }}
          >
            <img
              src="https://www.totvs.com/wp-content/uploads/2025/06/ESG-scaled-1.jpg"
              alt="Mãos segurando um globo com ícones de sustentabilidade"
              className="rounded-xl shadow-xl w-full object-cover transition-transform duration-300"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};