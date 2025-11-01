import { BookOpen, Activity, Zap, MapPin, DollarSign } from "lucide-react";
import { Container } from "./Container";

export const Incentivos = () => {
  const incentivos = [
    { titulo: "Lei Rouanet", descricao: "Apoio a projetos culturais e educacionais.", icon: BookOpen },
    { titulo: "Lei do Esporte", descricao: "Incentivo a ações esportivas e sociais.", icon: Activity },
    { titulo: "Lei de Inovação", descricao: "Fomento à pesquisa e desenvolvimento sustentável.", icon: Zap },
    { titulo: "Leis estaduais e municipais", descricao: "Deduções e benefícios locais para sua empresa.", icon: MapPin },
    { titulo: "Linhas de crédito verdes", descricao: "BNDES Finem, Fundos Clima e Verde facilitam financiamento sustentável.", icon: DollarSign },
  ];

  const verdePrincipal = "#06C35D";
  const fundoSecao = "#DFFCF4"; // verde clarinho quase branco

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: fundoSecao }}>
      {/* SVG de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1422 800"
          className="w-full h-full"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
              <stop stopColor="#417505" stopOpacity="1" offset="0%" />
              <stop stopColor="#417505" stopOpacity="1" offset="100%" />
            </linearGradient>
          </defs>
          <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round" opacity="0.18">
            <path d="M 0 598 Q 355.5 -100 711 400 Q 1066.5 900 1422 598" />
            <path d="M 0 575 Q 355.5 -100 711 400 Q 1066.5 900 1422 575" />
            <path d="M 0 552 Q 355.5 -100 711 400 Q 1066.5 900 1422 552" />
            <path d="M 0 529 Q 355.5 -100 711 400 Q 1066.5 900 1422 529" />
          </g>
        </svg>
      </div>

      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-[#0B2B27]">
            Incentivos Fiscais & Recursos Públicos
          </h2>
          <p className="text-[#0B2B27]/80 text-lg max-w-2xl mx-auto">
            Aproveite oportunidades legais e financeiras que fortalecem sua empresa e projetos sustentáveis.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">
          {incentivos.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex-1 flex items-start gap-5 p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg transform transition-all duration-700 hover:-translate-y-2 hover:scale-105 cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-[#06C35D]/20 shadow-md">
                  <Icon className="w-8 h-8" style={{ color: verdePrincipal }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0B2B27]">
                    {item.titulo}
                  </h3>
                  <p className="leading-relaxed text-[#0B2B27]/70">{item.descricao}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};