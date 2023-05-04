import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Anchor } from "./Anchor";

export const ContactSection = () => {
  return (
    <section className="pt-24 pb-48 px-10 flex flex-col justify-center items-center gap-10 bg-gray-200">
      <strong className="text-center text-2xl text-zinc-900 font-bold md:text-3xl">
        e aí, vamos trabalhar juntos?
      </strong>

      <h2 className="text-2xl p-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 md:text-6xl">
        ramontrov@gmail.com
      </h2>

      <nav>
        <ul className="flex gap-5">
          <li>
            <Anchor href="https://github.com/ramontrovao">
              <AiOutlineGithub size={32} />
            </Anchor>
          </li>
          <li>
            <Anchor href="https://linkedin.com/ramon-pinheiro">
              <AiOutlineLinkedin size={32} />
            </Anchor>
          </li>
        </ul>
      </nav>
    </section>
  );
};
