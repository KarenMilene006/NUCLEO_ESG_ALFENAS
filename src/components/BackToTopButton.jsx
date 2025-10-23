
import { useEffect, useState } from "react";

export const BackToTopButton = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.offsetTop;
      if (scrollPosition >= footerTop) {
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
    <>
      {show && (
        <div className="fixed bottom-6 right-24 z-50 flex flex-col items-center">
         
          {hover && (
            <div className="mb-2 px-3 py-1 bg-[#0B2B27] text-white text-sm rounded-lg shadow-lg select-none whitespace-nowrap">
              Voltar ao topo
            </div>
          )}

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="bg-[#50FFB1] text-[#0B2B27] p-4 rounded-full shadow-lg hover:brightness-90 transition"
            aria-label="Voltar ao topo"
          >
            ↑
          </button>
        </div>
      )}
    </>
  );
};
