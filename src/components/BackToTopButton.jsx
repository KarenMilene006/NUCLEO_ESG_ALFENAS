import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Ícone

export const BackToTopButton = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botão após rolar 400px
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 right-24 z-50 flex flex-col items-center" // Posição ao lado do botão WhatsApp
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="bg-[#50FFB1] text-[#0B2B27] w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:brightness-110 transition-all transform hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};