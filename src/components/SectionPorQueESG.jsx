import { Container } from "./Container";
import { Star, TrendingUp, CreditCard, Users } from "lucide-react";

export const SectionPorQueESG = () => {
  const beneficios = [
    {
      title: "Fortalecimento da Marca",
      description: "Empresas certificadas aumentam a confiança e reconhecimento no mercado.",
      icon: <Star className="w-12 h-12 text-[#B6F3D8]" />,
    },
    {
      title: "Atração de Investidores",
      description: "Investidores preferem empresas com práticas sustentáveis e transparentes.",
      icon: <TrendingUp className="w-12 h-12 text-[#B6F3D8]" />,
    },
    {
      title: "Redução de Custos Operacionais",
      description: "Eficiência energética e gestão responsável reduzem gastos e desperdícios.",
      icon: <CreditCard className="w-12 h-12 text-[#B6F3D8]" />,
    },
    {
      title: "Acesso a Linhas de Crédito Verde",
      description: "Empresas ESG qualificadas têm prioridade em incentivos e financiamentos sustentáveis.",
      icon: <Users className="w-12 h-12 text-[#B6F3D8]" />,
    },
  ];

  return (
    <section
      id="por-que-esg"
      className="relative py-28 scroll-mt-24 text-white"
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400'><rect width='1440' height='400' fill='%230B2B27'/><path fill='%231A5249' fill-opacity='0.38' d='M0,300 Q360,350 720,300 T1440,300 V400 H0 Z'/><ellipse cx='1200' cy='100' rx='220' ry='40' fill='%23165046' fill-opacity='0.18'/><ellipse cx='240' cy='320' rx='180' ry='35' fill='%23297265' fill-opacity='0.12'/></svg>")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center leading-tight max-w-3xl mx-auto">
          Por que ser uma <span className="text-[#9EF5C2]">Empresa ESG?</span>
        </h2>
        <div className="flex flex-col md:flex-row bg-[#161C1B] rounded-md overflow-hidden max-w-5xl mx-auto shadow-lg">
          {beneficios.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center justify-center text-center px-8 py-12 border-r border-[#23302C] last:border-r-0"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-[#EAFDF4] text-xl mb-2 font-semibold">
                {item.title}
              </h3>
              <p className="text-[#CFEFE3] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};