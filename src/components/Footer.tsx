import Image from "next/image";
import { Poppins } from "next/font/google";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

import logo from "@assets/logo.svg";
import { Anchor } from "./Anchor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Footer = () => {
  return (
    <footer
      className={`w-full p-10 flex flex-col justify-between items-left gap-10 border-t-[1px] bg-gray-200 border-zinc-400 md:items-center md:flex-row ${poppins.className}`}
    >
      <div>
        <div>
          <p className="text-sm font-body text-zinc-900">
            &copy; Todos os direitos reservados - Ramon Pinheiro
          </p>
          <p className="mt-1 text-sm font-body text-zinc-900">
            Feito com muito <span className="text-purple-700">&hearts;</span>
          </p>
        </div>

        <nav className="mt-5 flex align-center gap-2">
          <Anchor href="https://github.com/ramontrovao">
            <IoLogoGithub size={28} />
          </Anchor>

          <Anchor href="https://linkedin.com/ramon-pinheiro">
            <IoLogoLinkedin size={28} />
          </Anchor>
        </nav>
      </div>

      <a href="#inicio">
        <Image src={logo} alt="" className="w-12" />
      </a>
    </footer>
  );
};
