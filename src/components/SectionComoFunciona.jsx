import React, { useRef } from "react";
import { Container } from "./Container";
import { CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion"; // NOVO: Imports

export const SectionComoFunciona = () => {
  const etapas = [
    // ... (array de etapas mantido)
    {
      title: "Diagnóstico ESG Inicial",
      description:
        "Avaliação completa da empresa para identificar oportunidades e pontos de melhoria nas práticas ESG.",
    },
    {
      title: "Planejamento Estratégico",
      description:
        "Criação de um plano detalhado para implementação de práticas sustentáveis e de governança corporativa.",
    },
    {
      title: "Implementação das Práticas",
      description:
        "Auxílio na adoção de políticas, indicadores e procedimentos ESG.",
    },
    {
      title: "Auditoria Interna",
      description:
        "Verificação de conformidade e monitoramento contínuo das práticas ESG.",
    },
    {
      title: "Certificação e Selo ESG Alfenas",
      description:
        "Emissão do selo que reconhece empresas comprometidas com sustentabilidade e governança.",
    },
    {
      title: "Monitoramento Contínuo",
      description:
        "Suporte contínuo para garantir melhoria contínua e manutenção da certificação.",
    },
  ];

  // Configuração da animação (mantida)
  const fadeSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: i * 0.2 + 0.2,
      },
    }),
  };

  // NOVO: Lógica para a linha do tempo com scroll
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end 0.8"], // Começa quando o topo do ref bate no fim da tela, termina quando o fim do ref bate em 80% do topo da tela
  });

  // Mapeia o progresso (0-1) para a escala da linha (0-1)
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-funciona" className="bg-gray-50 py-24 scroll-mt-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#0B2B27] mb-20 text-center"
        >
          Como Funciona a Certificação ESG
        </motion.h2>

        {/* NOVO: Adicionado o ref aqui */}
        <div ref={targetRef} className="relative max-w-4xl mx-auto">
          {/* Linha central - ALTERADO */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0B2B27]/10 rounded-full"
            // ALTERADO: Animação agora é baseada no scroll
            style={{ scaleY, originY: 0 }} // 'style' em vez de 'initial/whileInView'
          />

          <div className="flex flex-col gap-16">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible" // Mantemos o whileInView para os cards
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Ícone - ALTERADO */}
                <motion.div
                  className="z-10 bg-[#50FFB1] p-3 rounded-full shadow-lg border-4 border-gray-50"
                  custom={index}
                  variants={iconVariants} // Mantemos o "pop"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-8 h-8 text-[#0B2B27]" />
                </motion.div>

                {/* Bloco de texto - Refatorado */}
                <div
                  className={`bg-white rounded-2xl p-8 w-full max-w-md shadow-xl transition-shadow duration-300 hover:shadow-2xl ${
                    index % 2 === 0
                      ? "md:ml-auto text-right border-r-4 border-[#50FFB1]"
                      : "md:mr-auto text-left border-l-4 border-[#50FFB1]"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-[#0B2B27] mb-3">
                    {etapa.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {etapa.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};