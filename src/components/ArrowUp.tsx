import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 200 && window.scrollY < 2000);

      console.log(window.scrollY);
    });
  }, []);

  return (
    <a
      href="#inicio"
      className={`fixed z-50 animate-bounce transition-all duration-1000 right-10 bottom-10 p-2 flex justify-center align-center bg-purple-600 text-white hover:bg-purple-700 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <AiOutlineArrowUp size={24} />
    </a>
  );
};
