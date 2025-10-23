import { Users, Heart, Handshake, Star, Smile } from "lucide-react";
import { Container } from "./Container";
export const ImpactoSocial = () => {
  const impactos = [
    { titulo: "Programas de Apoio", descricao: "Treinamentos estratégicos e lideranças conscientes impulsionam resultados.", icon: Users },
    { titulo: "Diversidade e Inclusão", descricao: "Equidade em todas as etapas e times da empresa.", icon: Star },
    { titulo: "Voluntariado Corporativo", descricao: "Projetos sociais conectando empresa e comunidade.", icon: Heart },
    { titulo: "Retenção de Talentos", descricao: "Cultura forte que retém e atrai profissionais qualificados.", icon: Handshake },
    { titulo: "Clima Organizacional", descricao: "Ambiente saudável e produtivo.", icon: Smile },
  ];

  const verdeCirculado = "#06C35D";
  const linhaTimeline = "rgba(6,195,93,0.25)";

  return (
    <section className="relative py-32 overflow-hidden">
      {/* SVG de fundo */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#092925" />
            <stop offset="100%" stopColor="#0A3835" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M0,320 C360,400 1080,200 1440,320 L1440,800 L0,800 Z"
        />
        <path
          fill={verdeCirculado}
          opacity="0.1"
          d="M0,480 C480,300 960,600 1440,400 L1440,800 L0,800 Z"
        />
      </svg>

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-[#092925]/90" />

      <Container>
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-5xl font-extrabold text-[#E5F5F0] drop-shadow-xl">
            Impacto Social & Organizacional
          </h2>
          <p className="mt-4 text-lg text-[#A4C4BE] max-w-2xl mx-auto">
            Criamos valor real para pessoas, equipes e comunidades, com
            propósito e resultados mensuráveis.
          </p>
        </div>

        <div className="relative flex flex-col items-center w-full z-10">
          {/* Linha horizontal da timeline */}
          <div
            className="hidden md:block absolute left-0 right-0 top-[90px] h-1 w-full max-w-5xl mx-auto rounded-full"
            style={{ backgroundColor: linhaTimeline }}
          />

          <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start w-full max-w-5xl mx-auto relative gap-y-12 md:gap-y-0">
            {/* Uso dos ícones como componentes React */}
            {impactos.map(({ titulo, descricao, icon: Icone }) => (
              <div key={titulo} className="flex flex-col items-center relative z-10">
                <div
                  className="z-20 bg-[#0A3835] rounded-full border-4 shadow-xl flex items-center justify-center w-20 h-20 mb-2"
                  style={{ borderColor: verdeCirculado }}
                >
                  <Icone className="w-10 h-10" style={{ color: verdeCirculado }} />
                </div>

                <span
                  className="hidden md:block w-4 h-4 rounded-full mt-[-14px]"
                  style={{ backgroundColor: verdeCirculado }}
                ></span>

                <h3 className="text-lg font-semibold text-[#E5F5F0] text-center mt-4 md:mt-8">
                  {titulo}
                </h3>
                <p className="mt-2 text-[#A4C4BE] text-center text-sm leading-relaxed max-w-[170px]">
                  {descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
