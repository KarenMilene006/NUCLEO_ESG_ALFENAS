import React from "react";
import { Container } from "./Container";
import { CheckCircle } from "lucide-react"; // ícones da biblioteca lucide-react

export const SectionOqueFazemos = () => {
  const servicos = [
    {
      title: "Diagnóstico ESG Personalizado",
      description:
        "Avaliação completa da sua empresa para identificar oportunidades e pontos de melhoria nas práticas ESG.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
    {
      title: "Plano Estratégico de Sustentabilidade",
      description:
        "Criação de um plano detalhado para implementação de práticas sustentáveis e de governança corporativa.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
    {
      title: "Implantação de Políticas ESG",
      description:
        "Auxílio na adoção de políticas corporativas, indicadores de desempenho e práticas ambientais e sociais.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
    {
      title: "Auditorias Internas e Externas",
      description:
        "Verificação de conformidade e acompanhamento do desempenho ESG da empresa.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
    {
      title: "Emissão do Selo ESG Alfenas",
      description:
        "Certificação oficial que reconhece empresas comprometidas com práticas sustentáveis e de governança.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
    {
      title: "Capacitação e Consultoria Continuada",
      description:
        "Treinamentos e suporte técnico contínuo para fortalecer a cultura ESG dentro da empresa.",
      icon: <CheckCircle className="w-10 h-10 text-[#50FFB1]" />,
    },
  ];

  return (
    <section id="o-que-fazemos" className="bg-white py-24 scroll-mt-24">
      <Container>
        <h2 className="text-4xl font-extrabold text-[#0B2B27] mb-16 text-center tracking-wide">
          O que Fazemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicos.map((item, index) => (
            <div
              key={index}
              className="bg-[#E5E5E5] p-8 rounded-2xl shadow-md flex flex-col items-start gap-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="p-3 bg-[#0B2B27] rounded-full mb-4 group-hover:bg-[#50FFB1] transition-colors duration-300">
                {React.cloneElement(item.icon, {
                  className:
                    "w-8 h-8 text-[#50FFB1] group-hover:text-[#0B2B27] transition-colors duration-300",
                })}
              </div>
              <h3 className="text-2xl font-semibold text-[#0B2B27] group-hover:text-[#2E7D32] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#0B2B27] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
