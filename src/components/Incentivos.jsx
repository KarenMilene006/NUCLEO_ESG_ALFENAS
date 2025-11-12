import { BookOpen, Activity, Zap, MapPin, DollarSign, Sparkles, TrendingUp, Award } from "lucide-react";
import { Container } from "./Container";

export const Incentivos = () => {
  const incentivos = [
    {
      titulo: "Lei Rouanet",
      descricao: "Apoio a projetos culturais e educacionais",
      detalhes: "Deduções fiscais de até 4% do IR para projetos culturais aprovados",
      icon: BookOpen,
      color: "from-emerald-400 to-teal-500",
      badge: "Até 4% IR",
    },
    {
      titulo: "Lei do Esporte",
      descricao: "Incentivo a ações esportivas e sociais",
      detalhes: "Patrocine projetos esportivos com benefícios fiscais de até 1% do IR",
      icon: Activity,
      color: "from-cyan-400 to-blue-500",
      badge: "Até 1% IR",
    },
    {
      titulo: "Lei de Inovação",
      descricao: "Fomento à pesquisa e desenvolvimento sustentável",
      detalhes: "Incentivos para P&D com redução de tributos e subvenções governamentais",
      icon: Zap,
      color: "from-purple-400 to-pink-500",
      badge: "P&D",
    },
    {
      titulo: "Leis estaduais e municipais",
      descricao: "Deduções e benefícios locais para sua empresa",
      detalhes: "Programas regionais adaptados às necessidades do seu negócio ESG",
      icon: MapPin,
      color: "from-amber-400 to-orange-500",
      badge: "Regional",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/40">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Pattern grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
    backgroundColor: "rgb(28, 93, 75)",

          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative z-10">
        {/* Cabeçalho com estilo premium */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Soluções ESG Inteligentes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Incentivos Fiscais
            <br />
            & Recursos Públicos
          </h2>
          
          <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            Transforme oportunidades legais em <span className="font-semibold text-primary">vantagem competitiva</span> para sua empresa
          </p>
        </div>

        {/* Grid moderno de cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {incentivos.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-white/60 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
                
                {/* Gradiente de fundo sutil */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <div className={`px-3 py-1.5 bg-gradient-to-r ${item.color} rounded-full shadow-md`}>
                      <span className="text-xs font-bold text-white">{item.badge}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.titulo}
                  </h3>
                  
                  <p className="text-foreground/80 mb-3 text-lg font-medium leading-relaxed">
                    {item.descricao}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.detalhes}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Saiba mais</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card destaque premium - Crédito Verde */}
        <div className="relative group animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="absolute -inset-1 bg-gradient-hero rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-12 shadow-xl border border-white/60 overflow-hidden">
            {/* Padrão decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <DollarSign className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl md:text-4xl font-black text-foreground">
                    Linhas de crédito verdes
                  </h3>
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                
                <p className="text-foreground/80 mb-4 text-xl leading-relaxed font-medium">
                  BNDES Finem, Fundos Clima e Verde facilitam financiamento sustentável
                </p>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Acesso a taxas diferenciadas para projetos com impacto ambiental positivo e desenvolvimento sustentável
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm font-semibold text-primary">BNDES Finem</span>
                  </div>
                  <div className="px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                    <span className="text-sm font-semibold text-secondary">Fundo Clima</span>
                  </div>
                  <div className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                    <span className="text-sm font-semibold text-accent">Fundo Verde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl backdrop-blur-sm border border-primary/20">
            <p className="text-foreground/80 text-lg md:text-xl">
              <span className="font-bold text-primary">Nossa consultoria especializada</span> identifica as melhores oportunidades para maximizar seus benefícios fiscais
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
