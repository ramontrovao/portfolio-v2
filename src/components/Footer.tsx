import Image from "next/image";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

import logo from "@assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full p-10 flex justify-between items-center border-t-2 bg-gray-300 border-gray-800 ">
      <div>
        <div>
          <p className="text-sm font-body text-zinc-900">
            &copy; Todos os direitos reservados - Ramon Pinheiro
          </p>
          <p className="mt-1 text-sm font-body text-zinc-900">
            Feito com muito <span className="text-purple-700">&hearts;</span>
          </p>
        </div>

        <nav className="mt-5 flex gap-2">
          <a
            href=""
            className="text-2xl text-zinc-900 transition-all duration-500 hover:text-purple-700"
          >
            <IoLogoGithub />
          </a>

          <a
            href=""
            className="text-2xl text-zinc-900 transition-all duration-500 hover:text-purple-700"
          >
            <IoLogoLinkedin />
          </a>
        </nav>
      </div>

      <a href="#">
        <Image src={logo} alt="" className="w-12" />
      </a>
    </footer>
  );
};
