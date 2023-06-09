import { useRef } from "react";
import { motion } from "framer-motion";

export const AboutMeSection = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      ref={constraintsRef}
      className="relative min-h-fit pt-12 pb-12 px-5 md:pt-44 md:pb-24 md:px-10 flex flex-col justify-start items-start overflow-hidden bg-gray-200"
      id="sobre-mim"
    >
      <div className="absolute w-full h-full flex justify-center align-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-md:hidden">
        <strong className="bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-5 text-8xl text-center cursor-default selection:bg-transparent">
          ARRASTE OS ÍCONES
        </strong>
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col justify-start items-start gap-5">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 font-bold text-4xl">
          Sobre mim
        </h2>

        <p className=" text-zinc-900 text-xl">
          Olá, seja bem vindo ao meu portfólio! Meu nome é Ramon, e eu programo
          há mais de um ano. Sou apaixonado por Typescript e utilizo React,
          React Native e NextJS no meu dia a dia. Atualmente sou desenvolvedor
          mobile e front-end, estudando cada dia mais para masterizar meus
          conhecimentos nesse ecossistema. Atualmente estudo lendo documentação,
          mas já finalizei o curso da Onebitcode e a trilha React do programa
          Ignite da Rocketseat.
        </p>
      </div>

      <div className="absolute z-30 grid grid-cols-2 self-end gap-5 max-md:hidden">
        <motion.div
          className="bg-typescript bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-next-js bg-no-repeat bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-react bg-no-repeat bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />

        <motion.div
          className="bg-tailwind bg-no-repeat bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="bg-nodejs bg-no-repeat bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />
        <motion.div
          className="bg-jest bg-no-repeat bg-contain w-12 h-12 cursor-grab"
          drag
          dragConstraints={constraintsRef}
        />
      </div>
    </motion.section>
  );
};
