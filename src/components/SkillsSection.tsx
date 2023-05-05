import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineNodeIndex,
} from "react-icons/ai";

import { SkillCard } from "./SkillCard";

export const SkillsSection = () => {
  return (
    <section className="py-24 px-10 flex flex-col justify-center items-center bg-gray-200 min-h-screen">
      <div className="flex justify-center">
        <h2 className="text-center text-zinc-900 font-bold text-4xl">
          Serviços que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
            constroem
          </span>{" "}
          seu projeto
        </h2>
      </div>

      <div className="mt-16 w-full flex gap-36 justify-center items-center flex-wrap">
        <SkillCard
          icon={<AiOutlineDesktop size={32} />}
          title="Front-end Development"
          description="Desenvolvo aplicações web de fácil manutenção e escaláveis, além de adotar métodos de SEO e acessibilidade para que o website tenha uma ótimo ranqueamento nas buscas. Também busco ao máximo deixar o website performático e responsivo para todos os dispositivos."
        />

        <SkillCard
          icon={<AiOutlineMobile size={32} />}
          title="Mobile Development"
          description="Desenvolvo aplicações mobile utilizando tecnologias de desenvolvimento híbrido tanto para Android quanto para IOS. Aplico as melhores práticas do mercado para que a aplicação possua a melhor avaliação possível nas plataformas na qual será distribuída."
        />
        <SkillCard
          icon={<AiOutlineNodeIndex size={32} />}
          title="Back-end Development"
          description="Sou focado no desenvolvimento do backend para o front-end (BFFS), onde construo um backend que facilita o trabalho do front-end com gerenciamento dos endpoints retornados da API, além de melhor estruturação e compreensão do código pelo lado do front-end."
        />
      </div>
    </section>
  );
};
