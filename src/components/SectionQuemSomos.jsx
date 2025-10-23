import React, { useEffect } from "react";
import { Container } from "./Container";
import QuemSomosImage from "../assets/background_hero.avif"; 
import AOS from "aos";
import "aos/dist/aos.css";

export const SectionQuemSomos = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="quem-somos"
      className="bg-[#E5E5E5] py-24 scroll-mt-24"
      aria-labelledby="quem-somos-title"
    >
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Texto */}
          <div
            className="md:w-1/2 text-[#0B2B27]"
            data-aos="fade-right"
          >
            <h2
              id="quem-somos-title"
              className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight"
            >
              Quem Somos
            </h2>
            <p className="mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
              O <strong className="text-[#2E7D32]">Núcleo ESG Alfenas</strong> é uma iniciativa <strong className="text-[#2E7D32]">pioneira</strong> em Minas Gerais, criada para impulsionar o <strong className="text-[#2E7D32]">desenvolvimento sustentável</strong> regional por meio da certificação <strong className="text-[#2E7D32]">ESG</strong> – <strong>Ambiental, Social e Governança</strong>.
            </p>
            <p className="mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
              Nosso propósito é tornar <strong className="text-[#2E7D32]">Alfenas</strong> uma referência nacional em <strong className="text-[#2E7D32]">responsabilidade corporativa</strong>, <strong className="text-[#2E7D32]">inovação</strong> e <strong className="text-[#2E7D32]">sustentabilidade</strong>, conectando o <strong className="text-[#2E7D32]">setor privado</strong>, o <strong className="text-[#2E7D32]">poder público</strong> e a <strong className="text-[#2E7D32]">sociedade civil</strong> em um movimento colaborativo alinhado à <strong className="text-[#2E7D32]">Agenda 2030</strong> da ONU e aos <strong className="text-[#2E7D32]">17 Objetivos de Desenvolvimento Sustentável (ODS)</strong>.
            </p>
            <p className="text-lg md:text-xl font-semibold max-w-xl">
              Contamos com o <strong className="text-[#2E7D32]">apoio institucional</strong> da Prefeitura de Alfenas e do Governo de Minas Gerais, fortalecendo nosso compromisso em promover um <strong className="text-[#2E7D32]">futuro mais ético, equilibrado e próspero</strong>.
            </p>
          </div>

          {/* Imagem */}
          <div
            className="md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <img
              src='https://www.totvs.com/wp-content/uploads/2025/06/ESG-scaled-1.jpg'
              alt="[translate:Quem Somos ESG Alfenas]"
              className="rounded-xl shadow-xl w-full  object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
