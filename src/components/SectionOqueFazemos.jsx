import React from "react";
import { Container } from "./Container";
import { CheckCircle } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion"; // NOVO: Imports

// ... (variantes containerVariants e itemVariants mantidas)
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

// NOVO: Componente de Card com Efeito 3D
const TiltCard = ({ item }) => {
  // Valores para rastrear a posição do mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapeia a posição do mouse para valores de rotação
  const rotateX = useTransform(y, [-100, 100], [10, -10]); // Inclin. vertical
  const rotateY = useTransform(x, [-100, 100], [-10, 10]); // Inclin. horizontal

  // Usa 'spring' para suavizar o retorno
  const smoothRotateX = useSpring(rotateX, { stiffness: 250, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 250, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calcula a posição do mouse de -100 a 100
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-start gap-5 group" // 'transition-all' não é mais necessário aqui
      variants={itemVariants}
      // NOVO: Aplicando os handlers e estilos 3D
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: "1000px", // Habilita a perspectiva 3D
      }}
      // O 'whileHover' antigo foi substituído pela lógica 3D, mas mantemos o 'y' e 'scale'
      whileHover={{ y: -8, scale: 1.02, shadow: "var(--shadow-2xl)" }}
      transition={{ type: "spring", stiffness: 100 }} // Transição para o whileHover
    >
      <div
        className="p-4 bg-[#0B2B27] rounded-full mb-4 transition-all duration-300 group-hover:bg-[#50FFB1]
                   group-hover:shadow-[0_0_25px_5px_rgba(80,255,177,0.5)]"
      >
        {React.cloneElement(item.icon, {
          className:
            "w-10 h-10 text-[#50FFB1] transition-colors duration-300 group-hover:text-[#0B2B27]",
        })}
      </div>
      <h3 className="text-2xl font-semibold text-[#0B2B27] transition-colors duration-300 group-hover:text-[#2E7D32]">
        {item.title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{item.description}</p>
    </motion.div>
  );
};

export const SectionOqueFazemos = () => {
  const servicos = [
    // ... (array de servicos mantido)
    {
      title: "Diagnóstico ESG Personalizado",
      description:
        "Avaliação completa da sua empresa para identificar oportunidades e pontos de melhoria nas práticas ESG.",
      icon: <CheckCircle />, // Ícone base
    },
    {
      title: "Plano Estratégico de Sustentabilidade",
      description:
        "Criação de um plano detalhado para implementação de práticas sustentáveis e de governança corporativa.",
      icon: <CheckCircle />,
    },
    {
      title: "Implantação de Políticas ESG",
      description:
        "Auxílio na adoção de políticas corporativas, indicadores de desempenho e práticas ambientais e sociais.",
      icon: <CheckCircle />,
    },
    {
      title: "Auditorias Internas e Externas",
      description:
        "Verificação de conformidade e acompanhamento do desempenho ESG da empresa.",
      icon: <CheckCircle />,
    },
    {
      title: "Emissão do Selo ESG Alfenas",
      description:
        "Certificação oficial que reconhece empresas comprometidas com práticas sustentáveis e de governança.",
      icon: <CheckCircle />,
    },
    {
      title: "Capacitação e Consultoria Continuada",
      description:
        "Treinamentos e suporte técnico contínuo para fortalecer a cultura ESG dentro da empresa.",
      icon: <CheckCircle />,
    },
  ];

  return (
    <section id="o-que-fazemos" className="bg-gray-50 py-24 scroll-mt-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#0B2B27] mb-16 text-center tracking-wide"
        >
          O que Fazemos
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicos.map((item, index) => (
            // NOVO: Usando o TiltCard
            <TiltCard key={index} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};