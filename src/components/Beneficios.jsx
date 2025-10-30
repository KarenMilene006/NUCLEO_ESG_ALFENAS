"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Award,
  PiggyBank,
  Handshake,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { Container } from "./Container";

// Configurações de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// NOVO: Componente de ícone animado reutilizável
const AnimatedIcon = ({ icon: Icon, animation }) => {
  const animations = {
    pulse: { scale: [1, 1.1, 1] },
    float: { y: [0, -4, 0] },
    sway: { rotate: [-5, 5, -5] },
  };
  return (
      <Icon className="w-8 h-8 text-white" />
  );
};

export const Beneficios = () => {
  const beneficios = [
    {
      titulo: "Incentivos fiscais",
      descricao:
        "Aproveite leis e programas que reduzem impostos e ampliam a competitividade.",
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
        "Empresas sustentáveis atraem parceiros e investidores comprometidos.",
      icon: ShieldCheck,
    },
    {
      titulo: "Inovação sustentável",
      descricao:
        "Estimule novos processos, produtos e ideias alinhadas com práticas ESG.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* SVG de fundo (ALTERADO) */}
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
          {/* NOVO: Círculos agora são componentes de motion */}
          <motion.circle
            cx="20%"
            cy="15%"
            r="220"
            fill="#06C35D"
            animate={{ cx: ["20%", "25%", "20%"], cy: ["15%", "20%", "15%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="85%"
            cy="75%"
            r="280"
            fill="#50FFB1"
            animate={{ r: [280, 300, 280] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="40%"
            cy="90%"
            r="240"
            fill="#0B2B27"
            animate={{ cy: ["90%", "85%", "90%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </g>
      </svg>

      {/* camada de blur (mantida) */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Benefícios ESG
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ESG não é custo — é investimento em reputação, eficiência e
            crescimento sustentável.
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {beneficios.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-row items-center p-6 min-h-[135px] transition-all duration-300 border border-white/10" // Removido hover
                // NOVO: Interação de hover mais fluida
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#06C35D]/60 mr-5 flex-shrink-0">
                  {/* NOVO: Usando o componente de ícone animado */}
                  <AnimatedIcon icon={item.icon} animation={item.animation} />
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-semibold mb-1 text-white">
                    {item.titulo}
                  </h3>
                  <p className="text-white/90 text-[0.95rem]">
                    {item.descricao}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};