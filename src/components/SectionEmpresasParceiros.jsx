import React from "react";
import { Container } from "./Container";

export const SectionEmpresasParceiros = () => {
  const parceiros = [
    {
      name: "Prefeitura de Alfenas",
      logo: "https://www.alfenas.mg.gov.br/assets/img/brasao.png",
    },
    {
      name: "Governo de Minas Gerais",
      logo: "https://farogentegestao.com.br/wp-content/uploads/2022/04/bb618.png",
    },
    {
      name: "Empresa 1",
      logo: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197046.jpg",
    },
    {
      name: "Empresa 2",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcccbu6OIwF8vSLk8kpRvm0KUWokRXRUtv-A&s",
    },
  ];

  // duplicamos o array para looping suave
  const logosDuplicadas = [...parceiros, ...parceiros];

  return (
    <section
      id="empresas"
      className="bg-[#F9F9F9] py-20 scroll-mt-24 overflow-hidden"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B27] mb-6 text-center">
          Empresas Pioneiras e Parceiros
        </h2>
        <p className="text-center text-lg md:text-xl text-[#0B2B27] mb-12">
          O Núcleo ESG Alfenas tem orgulho de contar com o apoio institucional
          da Prefeitura de Alfenas, do Governo de Minas Gerais e com a parceria
          de empresas comprometidas com o futuro sustentável da região.
        </p>

        {/* Slider infinito */}
        <div className="relative w-full overflow-hidden group">
          <div className="flex items-center animate-slide group-hover:[animation-play-state:paused]">
            {logosDuplicadas.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
