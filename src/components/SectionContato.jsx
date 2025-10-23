import React, { useState } from "react";
import { Container } from "./Container";
import selo from "../assets/selo cor fundo transparente.png";

export const SectionContato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem enviada:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", empresa: "", mensagem: "" });
  };

  return (
    <section id="contato" className="bg-[#102F2C] py-20 scroll-mt-24">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
          {/* Coluna esquerda: selo + texto */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
            <img
              src={selo}
              alt="Selo ESG Alfenas"
              className="h-36 w-auto animate-bounce-slow"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Quer saber como sua empresa pode conquistar o Selo ESG Alfenas?
            </h2>
            <p className="text-lg md:text-xl text-[#50FFB1]">
              O futuro sustentável de Alfenas começa com você. Seja uma empresa
              certificada ESG Alfenas e inspire outras a seguirem o mesmo
              caminho. Adotar práticas ESG fortalece sua marca, atrai
              investidores e dá acesso a incentivos e linhas de crédito verde.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0F4D3C] rounded-xl p-6 flex flex-col gap-4 shadow-lg"
            >
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-600 bg-[#0F4D3C] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-600 bg-[#0F4D3C] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1]"
                required
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-600 bg-[#0F4D3C] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1]"
              />
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-md border border-gray-600 bg-[#0F4D3C] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1]"
                required
              />
              <button
                type="submit"
                className="mt-4 cursor-pointer bg-[#50FFB1] text-[#0B2B27] font-semibold px-6 py-3 rounded-full hover:brightness-90 transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
