import { AiOutlineMobile } from "react-icons/ai";

export const ProjectCard = () => {
  return (
    <div className="w-80 h-auto py-10 px-6 flex flex-col justify-center items-center bg-gradient-to-r border-2 border-gray-300 from-gray-200 to-gray-300 rounded-lg">
      <div className="w-16 h-16 flex justify-center items-center rounded-lg bg-gray-300 border-2 border-gray-400">
        <AiOutlineMobile size={32} className="text-purple-500" />
      </div>

      <div className="mt-10 flex flex-col justify-center align-center">
        <strong className="text-center text-lg font-bold text-zinc-900">
          Front-end Development
        </strong>

        <p className="mt-2 text-center text-md text-zinc-900">
          Utilizando as tecnologias mais recentes do mercado, desenvolvo o
          layout proposto para Web, me preocupando com os mínimos detalhes e
          responsividade.
        </p>
      </div>
    </div>
  );
};
