import React, { useState } from "react";

export const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Balão de mensagem */}

      {/* Botão WhatsApp com escala separada da animação */}
      <a
        href="https://wa.me/55SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce-slow"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="bg-[#25D366] w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 will-change-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </div>
      </a>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};
