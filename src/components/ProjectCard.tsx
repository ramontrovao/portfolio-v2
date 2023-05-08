import Image from "next/image";
import { AiOutlineMobile } from "react-icons/ai";

import test from "@assets/codesec-preview.png";

import { Button } from "./Button";

export const ProjectCard = () => {
  return (
    <div className="rounded-md flex flex-col-reverse bg-gray-300 md:max-w-[65rem] md:max-h-[25rem] md:flex-row">
      <div className="flex flex-col gap-5 p-12">
        <strong className="text-zinc-900 text-2xl">Codesec</strong>
        <p className="text-zinc-900 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          aliquid et laboriosam maxime minus enim id corporis, natus pariatur
          consectetur!
        </p>

        <Button>Repositório</Button>
        <Button>Produção</Button>
      </div>

      <Image
        src={test}
        alt=""
        className="w-full object-cover rounded-tr-md rounded-tl-md md:w-1/2 md:rounded-tl-none md:rounded-br-md"
      />
    </div>
  );
};
