import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineNodeIndex,
} from "react-icons/ai";

import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section
      className="py-24 px-10 flex flex-col justify-center items-center bg-gray-200 min-h-screen"
      id="servicos"
    >
      <div className="flex justify-center">
        <h2 className="text-center text-zinc-900 font-bold text-4xl">
          Serviços que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
            constroem
          </span>{" "}
          seu projeto
        </h2>
      </div>

      <div className="mt-16 w-full flex gap-10 justify-between items-center flex-wrap md:gap-0">
        <ServiceCard
          icon={<AiOutlineDesktop size={32} />}
          title="Front-end Development"
          description="Desenvolvo aplicações web performáticas, além de adotar métodos de SEO e acessibilidade para que o website tenha uma ótimo ranqueamento nas buscas. Também busco ao máximo deixar o website responsivo para todos os dispositivos."
        />

        <ServiceCard
          icon={<AiOutlineMobile size={32} />}
          title="Mobile Development"
          description="Desenvolvo aplicações mobile utilizando tecnologias de desenvolvimento híbrido tanto para Android quanto para IOS. Aplico as melhores práticas do mercado para que a aplicação possua a melhor avaliação possível nas plataformas na qual a mesma será distribuída para download."
        />
        <ServiceCard
          icon={<AiOutlineNodeIndex size={32} />}
          title="Back-end Development"
          description="Sou focado no desenvolvimento do backend para o front-end (BFFS), onde construo um backend que facilita o trabalho do front-end com gerenciamento dos endpoints retornados da API, além de melhor estruturação e compreensão do código pelo lado do front-end."
        />
      </div>
    </section>
  );
};
