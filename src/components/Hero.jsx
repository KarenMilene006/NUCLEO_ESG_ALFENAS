import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// NOVO: Variantes para a animação de texto em cascata
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const titleItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export const Hero = () => {
  const titleText = "Transformando Alfenas em referência nacional em ESG";

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://classic.exame.com/wp-content/uploads/2023/02/GettyImages-1360884566-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Transformando Alfenas em referência nacional em ESG"
    >
      {/* Overlay com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173b37]/90 to-[#173b37]/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 w-full max-w-4xl">
        <motion.h1
          // ALTERADO: Usando variantes para animação em cascata
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
        >
          {/* NOVO: Mapeando o texto para animar cada palavra */}
          {titleText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={titleItemVariants}
              className="inline-block mr-[0.25em]" // Adiciona espaço
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }} // Atraso maior para esperar o H1
          className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md"
        >
          Conectando empresas, poder público e sociedade civil em prol do
          desenvolvimento sustentável
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }} // Atraso maior
        >
          {/* ALTERADO: Convertido para motion.a para mais interações */}
          <motion.a
            href="https://wa.me/55SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#50FFB1] text-[#0B2B27] font-semibold px-8 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            aria-label="Agende seu diagnóstico pelo WhatsApp"
            // NOVO: Animação de pulso contínuo e feedback de clique
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 0 0 rgba(80, 255, 177, 0.4)",
                "0 0 0 10px rgba(80, 255, 177, 0)",
                "0 0 0 0 rgba(80, 255, 177, 0.4)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            whileHover={{ scale: 1.05, brightness: 1.1 }}
            whileTap={{ scale: 0.98, brightness: 0.9 }}
          >
            Agende seu diagnóstico
          </motion.a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        // ALTERADO: Animação de "bounce" mais suave
        animate={{ y: [0, 10, 0] }}
        transition={{
          delay: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown size={32} className="text-white/70" />
      </motion.div>
    </section>
  );
};