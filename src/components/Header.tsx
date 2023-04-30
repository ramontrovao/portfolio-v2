import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "@assets/logo.svg";

import { Button } from "./Button";
import { Anchor } from "./Anchor";

export const Header = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsMinimized(window.scrollY > 50);
    };
  }, [isMinimized]);

  return (
    <header
      className={`px-10 py-5 fixed w-full transition-all duration-500 font-body ${
        isMinimized ? "bg-zinc-900 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="flex flex-col items-center md:flex-row">
        <div className="max-md:w-full max-md:flex max-md:justify-between max-md:items-center">
          <a href="#">
            <Image
              src={logo}
              alt=""
              className={`${
                isMinimized ? "w-12" : "w-8"
              } transition-all duration-500`}
            />
          </a>

          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="text-white visible md:hidden"
          >
            {menuIsOpen && <AiOutlineClose size={32} />}
            {!menuIsOpen && <AiOutlineMenu size={32} />}
          </button>
        </div>

        <ul
          className={`${
            menuIsOpen ? "left-0 pl-10" : "left-[-880px]"
          } bg-zinc-900 top-20 flex flex-col gap-4 w-full absolute pt-10 pb-2 transition-all duration-500 md:static md:py-0 md:flex md:flex-row md:justify-end md:items-center md:gap-5 md:visible`}
        >
          <li>
            <Anchor href="#">Início</Anchor>
          </li>
          <li>
            <Anchor href="#">Sobre mim</Anchor>
          </li>
          <li>
            <Anchor href="#">Habilidades</Anchor>
          </li>
          <li>
            <Anchor href="#">Projetos</Anchor>
          </li>

          <li>
            <a href="#" className="animate-pulse">
              <Button>Vamos conversar?</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
