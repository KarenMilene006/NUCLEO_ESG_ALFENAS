import React from "react";

export const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:"url('https://etica-ambiental.com.br/wp-content/uploads/2022/05/2022-06-agenda-esg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Transformando Alfenas em referência nacional em ESG"
    >
      <div className="absolute inset-0 bg-[#173b37]/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Transformando Alfenas em referência nacional em ESG
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Conectando empresas, poder público e sociedade civil em prol do desenvolvimento sustentável
        </p>
        <a
          href="https://wa.me/55SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#50FFB1] text-[#0B2B27] font-semibold px-8 py-4 rounded-md shadow-lg hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-[#0B2B27] transition"
          aria-label="Agende seu diagnóstico pelo WhatsApp"
        >
          Agende seu diagnóstico
        </a>
      </div>
    </section>
  );
};
