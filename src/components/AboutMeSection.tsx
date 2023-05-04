import { useRef } from "react";
import { motion } from "framer-motion";

export const AboutMeSection = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      ref={constraintsRef}
      className="relative min-h-fit pt-44 pb-24 px-10 flex flex-col justify-start items-start overflow-hidden bg-gray-200"
    >
      <div className="absolute w-full h-full flex justify-center align-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-md:hidden">
        <strong className="bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-5 text-8xl text-center cursor-default selection:bg-transparent">
          ARRASTE OS ITENS
        </strong>
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col justify-start items-start gap-5">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 font-bold text-4xl">
          Sobre mim
        </h2>

        <p className=" text-zinc-900 text-xl">
          Olá, seja bem vindo ao meu portfólio! Meu nome é Ramon, e eu programo
          há quase um ano. Sou apaixonado por Typescript e utilizo React e
          NextJS no meu dia a dia. Atualmente sou desenvolvedor front-end, porém
          tenho interesse em migrar para área mobile no futuro. Sou apaixonado
          por tecnolgia desde os meus 8 anos, mas só fiz meu primeiro curso no
          ínicio do ano passado. Completei o curso Fullstack da Onebitcode e
          estou quase terminando o curso Ignite (avançado) da Rocketseat na área
          de React! :)
        </p>
      </div>

      <div className="absolute z-30 flex self-end flex-col justify-center items-center max-md:hidden">
        <motion.div
          className="bg-arrow-left bg-cover w-24 h-24 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-arrow-down bg-cover w-24 h-24 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-arrow-up bg-cover w-24 h-24 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-arrow-right bg-cover w-24 h-24 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />
      </div>
    </motion.section>
  );
};
