import React from "react";
import { Container } from "./Container";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const SectionComoFunciona = () => {
  const etapas = [
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

  // Configuração da animação padrão para cada bloco
  const fadeSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="como-funciona" className="bg-white py-24 scroll-mt-24">
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

        <div className="relative max-w-4xl mx-auto">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0B2B27]/20"></div>

          <div className="flex flex-col gap-16">
            {etapas.map((etapa, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Ícone */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="z-10 bg-[#50FFB1] p-3 rounded-full shadow-md"
                >
                  <CheckCircle className="w-8 h-8 text-[#0B2B27]" />
                </motion.div>

                {/* Bloco de texto */}
                <div
                  className={`bg-[#D2F5E3] rounded-2xl p-8 max-w-md shadow-md ${
                    index % 2 === 0
                      ? "md:ml-auto text-right"
                      : "md:mr-auto text-left"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-[#0B2B27] mb-3">
                    {etapa.title}
                  </h3>
                  <p className="text-[#0B2B27]/80 leading-relaxed">
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
