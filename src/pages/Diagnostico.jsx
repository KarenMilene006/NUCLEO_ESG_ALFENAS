import React, { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const initialQuestions = [
  // Ambiental (8 questões)
  {
    id: 1,
    category: "ambiental",
    question: "A empresa possui políticas ambientais formais e atualizadas?",
  },
  {
    id: 2,
    category: "ambiental",
    question: "Realiza monitoramento de consumo de água e energia?",
  },
  {
    id: 3,
    category: "ambiental",
    question:
      "Há ações para redução ou reuso de água nos processos agrícolas ou industriais?",
  },
  {
    id: 4,
    category: "ambiental",
    question:
      "A empresa realiza o controle e a destinação correta de resíduos orgânicos e industriais?",
  },
  {
    id: 5,
    category: "ambiental",
    question: "Há inventário de emissões de gases de efeito estufa (GEE)?",
  },
  {
    id: 6,
    category: "ambiental",
    question:
      "Utiliza práticas agrícolas sustentáveis (ex: rotação de culturas, controle biológico etc.)?",
  },
  {
    id: 7,
    category: "ambiental",
    question:
      "Mantém áreas de preservação permanente e reserva legal de acordo com a legislação?",
  },
  {
    id: 8,
    category: "ambiental",
    question:
      "Possui certificações ambientais (ex: ISO 14001, Produção Orgânica etc.)?",
  },
  // Social (7 questões)
  {
    id: 9,
    category: "social",
    question:
      "Existem programas de capacitação e treinamento contínuo para colaboradores?",
  },
  {
    id: 10,
    category: "social",
    question:
      "A empresa promove a diversidade e inclusão em suas contratações e políticas internas?",
  },
  {
    id: 11,
    category: "social",
    question:
      "Mantém diálogo ativo com comunidades locais ou agricultores parceiros?",
  },
  {
    id: 12,
    category: "social",
    question:
      "Há ações voltadas à segurança, saúde e bem-estar dos colaboradores?",
  },
  {
    id: 13,
    category: "social",
    question: "Existe um canal de ouvidoria ou denúncias ativo e seguro?",
  },
  {
    id: 14,
    category: "social",
    question:
      "A empresa possui ações sociais, projetos comunitários ou doações estruturadas?",
  },
  {
    id: 15,
    category: "social",
    question:
      "Há acompanhamento de indicadores de clima organizacional e satisfação interna?",
  },
  // Governança (7 questões)
  {
    id: 16,
    category: "governanca",
    question:
      "A empresa possui um código de ética e conduta formalizado e divulgado?",
  },
  {
    id: 17,
    category: "governanca",
    question:
      "Os gestores são capacitados em temas de integridade, conformidade e ESG?",
  },
  {
    id: 18,
    category: "governanca",
    question:
      "Existe uma estrutura de governança clara (conselhos, comitês, controles internos)?",
  },
  {
    id: 19,
    category: "governanca",
    question: "Há políticas anticorrupção e de conformidade (compliance)?",
  },
  {
    id: 20,
    category: "governanca",
    question:
      "A alta liderança participa de decisões estratégicas relacionadas à sustentabilidade?",
  },
  {
    id: 21,
    category: "governanca",
    question:
      "Indicadores ESG são acompanhados e apresentados em reuniões de gestão?",
  },
  {
    id: 22,
    category: "governanca",
    question:
      "A empresa publica ou pretende publicar relatórios de sustentabilidade ou de impacto?",
  },
];

const scaleOptions = [
  { value: 0, label: "0 – Não possui" },
  { value: 1, label: "1 – Existe apenas a intenção" },
  { value: 2, label: "2 – Possui de forma informal" },
  { value: 3, label: "3 – Está parcialmente estruturada" },
  { value: 4, label: "4 – Estruturada e aplicada" },
  { value: 5, label: "5 – Consolidada, atualizada e monitorada" },
];

export const Diagnostico = () => {
  const [stage, setStage] = useState("intro");
  const [companyData, setCompanyData] = useState({
    nome: "",
    cnpj: "",
    setor: "",
    porte: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setStage("questions");
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleInputChange = (field, value) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAnswer = (questionId, score) => {
    setAnswers({ ...answers, [questionId]: score });

    if (currentQuestion < initialQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage("results");
    }
  };

  const calculateScores = () => {
    const scores = { ambiental: 0, social: 0, governanca: 0, total: 0 };

    initialQuestions.forEach((q) => {
      const score = answers[q.id] ?? 0;
      scores[q.category] += score;
      scores.total += score;
    });

    return scores;
  };

  const getClassification = (totalScore) => {
    if (totalScore >= 91) return "Excelência ESG";
    if (totalScore >= 71) return "Maturidade Intermediária";
    if (totalScore >= 41) return "Em Desenvolvimento";
    return "Iniciante";
  };

  // ---------- ETAPA INTRO ----------
  if (stage === "intro") {
    return (
      <main
        className="min-h-screen text-gray-800 py-16"
        style={{
          backgroundImage: `url('https://img.odcdn.com.br/wp-content/uploads/2023/07/cidade-sustentavel.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Diagnóstico ESG
          </h1>

          <p className="text-lg text-center text-gray-600 mb-12">
            Preencha as informações da empresa (não pontuadas) e depois
            responda às perguntas do diagnóstico ESG.
          </p>

          <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-green-100 space-y-6">
            <div>
              <label className="block font-semibold mb-1">Nome da empresa *</label>
              <input
                type="text"
                value={companyData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">CNPJ (opcional)</label>
              <input
                type="text"
                value={companyData.cnpj}
                onChange={(e) => handleInputChange("cnpj", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Setor de atuação *</label>
              <select
                value={companyData.setor}
                onChange={(e) => handleInputChange("setor", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Selecione</option>
                <option value="agro">Agro</option>
                <option value="comércio">Comércio</option>
                <option value="indústria">Indústria</option>
                <option value="serviços">Serviços</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Porte da empresa *</label>
              <select
                value={companyData.porte}
                onChange={(e) => handleInputChange("porte", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Selecione</option>
                <option value="MEI">MEI</option>
                <option value="micro">Micro</option>
                <option value="pequena">Pequena</option>
                <option value="média">Média</option>
                <option value="grande">Grande</option>
              </select>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  if (
                    !companyData.nome.trim() ||
                    !companyData.setor ||
                    !companyData.porte
                  ) {
                    alert("Por favor, preencha todos os campos obrigatórios.");
                    return;
                  }
                  handleStart();
                }}
                className="px-8 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-all"
              >
                Iniciar Diagnóstico
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ---------- ETAPA QUESTIONÁRIO ----------
  if (stage === "questions") {
    const question = initialQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / initialQuestions.length) * 100;

    return (
      <main
        className="min-h-screen text-gray-800 py-16"
        style={{
          backgroundImage: `url('https://img.odcdn.com.br/wp-content/uploads/2023/07/cidade-sustentavel.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="max-w-3xl mx-auto px-6">
          <div className="mb-8 bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Pergunta {currentQuestion + 1} de {initialQuestions.length}
              </span>
              <span className="text-sm font-semibold text-green-700 capitalize">
                {question.category}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              {question.question}
            </h2>

            <div className="space-y-3">
              {scaleOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <Circle className="w-5 h-5 text-gray-400 group-hover:text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ---------- ETAPA RESULTADO ----------
  const scores = calculateScores();
  const classification = getClassification(scores.total);

  return (
    <main
      className="min-h-screen text-gray-800 py-16"
      style={{
        backgroundImage: `url('https://img.odcdn.com.br/wp-content/uploads/2023/07/cidade-sustentavel.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8 mb-8 text-center border border-green-100">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Diagnóstico Concluído!
          </h1>
          <p className="text-xl text-gray-600">
            Nível ESG:{" "}
            <span
              className={
                classification === "Excelência ESG"
                  ? "text-green-700 font-bold"
                  : classification === "Maturidade Intermediária"
                  ? "text-blue-600 font-bold"
                  : classification === "Em Desenvolvimento"
                  ? "text-yellow-600 font-bold"
                  : "text-orange-600 font-bold"
              }
            >
              {classification}
            </span>
          </p>
          <p className="mt-2 text-gray-700 font-semibold">
            Empresa: {companyData.nome} <br />
            CNPJ: {companyData.cnpj || "Não informado"} <br />
            Setor: {companyData.setor} <br />
            Porte: {companyData.porte}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 border border-green-100 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Resultado por Pilar
          </h2>

          <div className="space-y-6">
            {[
              { key: "ambiental", label: "Ambiental", max: 40, color: "bg-green-600" },
              { key: "social", label: "Social", max: 35, color: "bg-blue-600" },
              { key: "governanca", label: "Governança", max: 35, color: "bg-purple-600" },
            ].map(({ key, label, max, color }) => {
              const pct = Math.round((scores[key] / max) * 100);
              return (
                <div key={key}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{label}</span>
                    <span className="text-sm font-bold text-gray-600">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${color} h-3 rounded-full`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-green-50/70 backdrop-blur-sm rounded-xl border border-green-200 text-center">
            <p className="text-lg">
              <span className="font-semibold text-green-700">
                Pontuação Total:
              </span>{" "}
              <span className="text-2xl font-bold text-green-800">
                {scores.total}/110
              </span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setStage("intro")}
            className="px-8 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition-all"
          >
            Fazer Novo Diagnóstico
          </button>
        </div>
      </section>
    </main>
  );
};
