import React from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";

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

  const logosDuplicadas = [...parceiros, ...parceiros];

  return (
    <section
      id="empresas"
      className="bg-white py-20 scroll-mt-24 overflow-hidden" // Fundo alterado para branco puro
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2B27] mb-6 text-center">
            Empresas Pioneiras e Parceiros
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-700 mb-16 max-w-4xl mx-auto">
            O Núcleo ESG Alfenas tem orgulho de contar com o apoio institucional
            da Prefeitura de Alfenas, do Governo de Minas Gerais e com a parceria
            de empresas comprometidas com o futuro sustentável da região.
          </p>
        </motion.div>

        {/* Slider infinito */}
        {/* NOVO: Wrapper com overflow-hidden para um fade-in mais limpo */}
        <div className="relative w-full overflow-hidden group">
          <motion.div
            className="flex items-center animate-slide group-hover:[animation-play-state:paused]"
            // NOVO: Animação de entrada
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {logosDuplicadas.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12" // Removido transition, pois o hover já cuida disso
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-20 w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:!grayscale-0"
                />
              </div>
            ))}
          </motion.div>
          {/* NOVO: Gradientes de "fade" nas laterais para um look mais limpo */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Container>
    </section>
  );
};