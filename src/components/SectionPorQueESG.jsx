import { Container } from "./Container";
import { Star, TrendingUp, CreditCard, Users } from "lucide-react";
import { motion } from "framer-motion";

// Variantes de animação
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const SectionPorQueESG = () => {
  const beneficios = [
    {
      title: "Fortalecimento da Marca",
      description:
        "Empresas certificadas aumentam a confiança e reconhecimento no mercado.",
      icon: (
        // NOVO: Ícone agora é um componente de motion
          <Star className="w-12 h-12 text-[#9EF5C2]" />
      ),
    },
    {
      title: "Atração de Investidores",
      description:
        "Investidores preferem empresas com práticas sustentáveis e transparentes.",
      icon: (
          <TrendingUp className="w-12 h-12 text-[#9EF5C2]" />
      ),
    },
    {
      title: "Redução de Custos Operacionais",
      description:
        "Eficiência energética e gestão responsável reduzem gastos e desperdícios.",
      icon: (
          <CreditCard className="w-12 h-12 text-[#9EF5C2]" />
      ),
    },
    {
      title: "Acesso a Linhas de Crédito Verde",
      description:
        "Empresas ESG qualificadas têm prioridade em incentivos e financiamentos sustentáveis.",
      icon: (
          <Users className="w-12 h-12 text-[#9EF5C2]" />
      ),
    },
  ];

  return (
    <section
      id="por-que-esg"
      className="relative py-28 scroll-mt-24 text-white overflow-hidden" // NOVO: overflow-hidden
      style={{
        background: "radial-gradient(circle, #1A5249, #0B2B27 70%)",
      }}
    >
      {/* NOVO: Fundo animado - requer CSS global */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, #50FFB1, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Container className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center leading-tight max-w-3xl mx-auto"
        >
          Por que ser uma <span className="text-[#9EF5C2]">Empresa ESG?</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {beneficios.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out" // Removido hover
              variants={itemVariants}
              // NOVO: Interação de hover mais fluida
              whileHover={{
                y: -8,
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="mb-6 h-12 w-12 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-[#EAFDF4] text-xl mb-2 font-semibold">
                {item.title}
              </h3>
              <p className="text-[#CFEFE3] text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};