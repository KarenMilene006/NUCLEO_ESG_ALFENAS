import React, { useState } from "react";
import { Container } from "./Container";
import selo from "../assets/selo cor fundo transparente.png";
import { motion } from "framer-motion"; // Importar motion

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
        <div className="flex flex-col md:flex-row items-start gap-16 max-w-6xl mx-auto">
          {/* Coluna esquerda: selo + texto */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={selo}
              alt="Selo ESG Alfenas"
              className="h-36 w-auto animate-bounce-slow" // 'animate-bounce-slow' precisa estar definido no seu tailwind.config.js
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Quer saber como sua empresa pode conquistar o Selo ESG Alfenas?
            </h2>
            <p className="text-lg md:text-xl text-[#9EF5C2]">
              O futuro sustentável de Alfenas começa com você. Adotar práticas
              ESG fortalece sua marca, atrai investidores e dá acesso a
              incentivos e linhas de crédito verde.
            </p>
          </motion.div>

          {/* Coluna direita: formulário */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0F4D3C] rounded-2xl p-8 flex flex-col gap-5 shadow-2xl"
            >
              {/* ALTERADO: input para motion.input */}
              <motion.input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1] backdrop-blur-sm transition-all"
                required
                // NOVO: Animação de foco
                whileFocus={{
                  scale: 1.03,
                  borderColor: "#50FFB1",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1] backdrop-blur-sm transition-all"
                required
                whileFocus={{
                  scale: 1.03,
                  borderColor: "#50FFB1",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              />
              <motion.input
                type="text"
                name="empresa"
                placeholder="Empresa (Opcional)"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full p-4 rounded-md border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1] backdrop-blur-sm transition-all"
                whileFocus={{
                  scale: 1.03,
                  borderColor: "#50FFB1",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              />
              {/* ALTERADO: textarea para motion.textarea */}
              <motion.textarea
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className="w-full p-4 rounded-md border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#50FFB1] backdrop-blur-sm transition-all"
                required
                whileFocus={{
                  scale: 1.03,
                  borderColor: "#50FFB1",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              />
              {/* ALTERADO: button para motion.button */}
              <motion.button
                type="submit"
                className="mt-4 cursor-pointer bg-[#50FFB1] text-[#0B2B27] font-bold text-lg px-6 py-4 rounded-full transition-all duration-300 ease-in-out" // Removido hovers
                // NOVO: Interações mais ricas
                whileHover={{ scale: 1.05, brightness: 1.1 }}
                whileTap={{ scale: 0.98, brightness: 0.95 }}
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};