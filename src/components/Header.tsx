import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "@assets/logo.svg";

import { Button } from "./Button";
import { Anchor } from "./Anchor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Header = () => {
  const [isMaximized, setIsMinimized] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsMinimized(window.scrollY > 50);
    });
  }, [isMaximized]);

  return (
    <header
      className={`px-5 md:px-10 z-50 py-5 fixed w-full transition-all duration-500 font-body ${
        isMaximized ? "bg-gray-200 shadow-2xl" : "bg-transparent"
      } ${poppins.className}`}
    >
      <nav className="flex flex-col items-center md:flex-row bg">
        <div className="max-md:w-full max-md:flex max-md:justify-between max-md:items-center">
          <a href="#inicio">
            <Image
              src={logo}
              alt=""
              className={`${
                isMaximized ? "w-10" : "w-8"
              } transition-all duration-500`}
            />
          </a>

          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-zinc-900 visible md:hidden"
          >
            {menuIsOpen && <AiOutlineClose size={32} />}
            {!menuIsOpen && <AiOutlineMenu size={32} />}
          </button>
        </div>

        <ul
          className={`${
            menuIsOpen ? "left-0 pl-10" : "left-[-880px]"
          } bg-gray-200 top-20 px-10 flex flex-col gap-4 w-full absolute py-10 transition-all duration-500 md:static md:bg-transparent md:py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-5 md:visible`}
        >
          <li>
            <Anchor href="#inicio" onClick={() => setMenuIsOpen(false)}>
              Início
            </Anchor>
          </li>
          <li>
            <Anchor href="#sobre-mim" onClick={() => setMenuIsOpen(false)}>
              Sobre mim
            </Anchor>
          </li>
          <li>
            <Anchor href="#servicos" onClick={() => setMenuIsOpen(false)}>
              Serviços
            </Anchor>
          </li>
          <li>
            <Anchor href="#projetos" onClick={() => setMenuIsOpen(false)}>
              Projetos
            </Anchor>
          </li>
          <li>
            <Anchor
              href="/assets/ramon-pinheiro-cv.pdf"
              onClick={() => setMenuIsOpen(false)}
            >
              Currículo
            </Anchor>
          </li>

          <li>
            <a href="#contato" onClick={() => setMenuIsOpen(false)}>
              <Button>Vamos conversar?</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
