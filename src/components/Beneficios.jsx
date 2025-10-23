"use client";

import { useEffect, useRef } from "react";
import {
  Leaf,
  Award,
  PiggyBank,
  Handshake,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { Container } from "./Container";

export const Beneficios = () => {
  const beneficios = [
    {
      titulo: "Incentivos fiscais",
      descricao:
        "Aproveite leis e programas que reduzem impostos e ampliam a competitividade do seu negócio.",
      icon: PiggyBank,
    },
    {
      titulo: "Reputação ESG",
      descricao:
        "Sua empresa se destaca no mercado ao adotar práticas sustentáveis e éticas.",
      icon: Award,
    },
    {
      titulo: "Economia inteligente",
      descricao:
        "Reduza custos operacionais com soluções sustentáveis e eficientes.",
      icon: Leaf,
    },
    {
      titulo: "Oportunidades exclusivas",
      descricao:
        "Acesso a crédito verde, certificações e editais que valorizam sua marca.",
      icon: Handshake,
    },
    {
      titulo: "Segurança e credibilidade",
      descricao:
        "Empresas sustentáveis atraem parceiros e investidores comprometidos com o futuro.",
      icon: ShieldCheck,
    },
    {
      titulo: "Inovação sustentável",
      descricao:
        "Estimule novos processos, produtos e ideias alinhadas com práticas ESG, atraindo talentos e diferenciação.",
      icon: Lightbulb,
    },
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* SVG de fundo */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C48C" />
            <stop offset="100%" stopColor="#004E3E" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
        <g opacity="0.25">
          <circle cx="20%" cy="15%" r="220" fill="#06C35D" />
          <circle cx="85%" cy="75%" r="280" fill="#50FFB1" />
          <circle cx="40%" cy="90%" r="240" fill="#0B2B27" />
        </g>
      </svg>

      {/* camada escura e blur para contraste */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <Container>
        <div className="text-center mb-16 relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Benefícios ESG
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ESG não é custo — é investimento em reputação, eficiência e
            crescimento sustentável.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {beneficios.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="card card-hidden bg-white/20 backdrop-blur-md rounded-xl shadow-lg flex flex-row items-center p-5 min-h-[135px] transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#06C35D]/40 mr-5 flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-semibold mb-1 text-white">
                    {item.titulo}
                  </h3>
                  <p className="text-white/90 text-[0.95rem]">
                    {item.descricao}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <style jsx>{`
        .card-hidden {
          opacity: 0;
          transform-origin: center bottom;
          transform: rotateX(90deg) scale(0.8) translateY(20px);
        }
        .animate-show {
          opacity: 1 !important;
          transform-origin: center bottom;
          transform: rotateX(0deg) scale(1) translateY(0) !important;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.7s ease;
        }
      `}</style>
    </section>
  );
};