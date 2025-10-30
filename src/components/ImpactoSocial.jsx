import { Users, Heart, Handshake, Star, Smile } from "lucide-react";
import { Container } from "./Container";
import { motion } from "framer-motion";

// Configurações de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// NOVO: Componente de ícone animado
const AnimatedIcon = ({ icon: Icon, animation }) => {
  const animations = {
    pulse: { scale: [1, 1.1, 1] },
    float: { y: [0, -3, 0] },
    sway: { rotate: [-5, 5, -5] },
  };
  return (
    <motion.div
      animate={animations[animation] || animations.pulse}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
    >
      <Icon className="w-10 h-10" style={{ color: "#06C35D" }} />
    </motion.div>
  );
};

export const ImpactoSocial = () => {
  const impactos = [
    {
      titulo: "Programas de Apoio",
      descricao: "Treinamentos estratégicos e lideranças conscientes impulsionam resultados.",
      icon: Users,
      animation: "float",
    },
    {
      titulo: "Diversidade e Inclusão",
      descricao: "Equidade em todas as etapas e times da empresa.",
      icon: Star,
      animation: "pulse",
    },
    {
      titulo: "Voluntariado Corporativo",
      descricao: "Projetos sociais conectando empresa e comunidade.",
      icon: Heart,
      animation: "pulse",
    },
    {
      titulo: "Retenção de Talentos",
      descricao: "Cultura forte que retém e atrai profissionais qualificados.",
      icon: Handshake,
      animation: "sway",
    },
    {
      titulo: "Clima Organizacional",
      descricao: "Ambiente saudável e produtivo.",
      icon: Smile,
      animation: "sway",
    },
  ];

  const verdeCirculado = "#06C35D";
  const linhaTimeline = "rgba(6,195,93,0.25)";

  return (
    <section className="relative py-32 overflow-hidden">
      {/* SVG de fundo (ALTERADO) */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="grad-impacto" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#092925" />
            <stop offset="100%" stopColor="#0A3835" />
          </linearGradient>
        </defs>
        {/* NOVO: Animação de "onda" */}
        <motion.path
          fill="url(#grad-impacto)"
          d="M0,320 C360,400 1080,200 1440,320 L1440,800 L0,800 Z"
          animate={{
            d: [
              "M0,320 C360,400 1080,200 1440,320 L1440,800 L0,800 Z",
              "M0,340 C360,380 1080,220 1440,340 L1440,800 L0,800 Z",
              "M0,320 C360,400 1080,200 1440,320 L1440,800 L0,800 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill={verdeCirculado}
          opacity="0.1"
          d="M0,480 C480,300 960,600 1440,400 L1440,800 L0,800 Z"
          animate={{
            d: [
              "M0,480 C480,300 960,600 1440,400 L1440,800 L0,800 Z",
              "M0,500 C480,280 960,620 1440,420 L1440,800 L0,800 Z",
              "M0,480 C480,300 960,600 1440,400 L1440,800 L0,800 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 bg-[#092925]/90" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-5xl font-extrabold text-[#E5F5F0] drop-shadow-xl">
            Impacto Social & Organizacional
          </h2>
          <p className="mt-4 text-lg text-[#A4C4BE] max-w-2xl mx-auto">
            Criamos valor real para pessoas, equipes e comunidades, com
            propósito e resultados mensuráveis.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center w-full z-10">
          {/* Linha da timeline - ALTERADO */}
          <motion.div
            className="hidden md:block absolute left-0 right-0 top-[90px] h-1 w-full max-w-5xl mx-auto rounded-full"
            style={{ backgroundColor: linhaTimeline }}
            // NOVO: Animação para "desenhar" a linha
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col items-center md:flex-row md:justify-between md:items-start w-full max-w-5xl mx-auto relative gap-y-12 md:gap-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {impactos.map(({ titulo, descricao, icon: Icone, animation }) => (
              <motion.div
                key={titulo}
                className="flex flex-col items-center relative z-10"
                variants={itemVariants}
              >
                <div
                  className="z-20 bg-[#0A3835] rounded-full border-4 shadow-xl flex items-center justify-center w-20 h-20 mb-2"
                  style={{ borderColor: verdeCirculado }}
                >
                  {/* NOVO: Ícone animado */}
                  <AnimatedIcon icon={Icone} animation={animation} />
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};