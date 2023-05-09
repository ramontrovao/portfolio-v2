import Image, { StaticImageData } from "next/image";

import test from "@assets/codesec-preview.png";

import { Button } from "./Button";
import { Anchor } from "./Anchor";

interface IProjectCard
  extends Record<
    "title" | "description" | "repoUrl" | "productionUrl",
    string
  > {
  preview: StaticImageData;
}

export const ProjectCard = ({
  title,
  description,
  productionUrl,
  repoUrl,
  preview,
}: IProjectCard) => {
  return (
    <div className="rounded-md flex flex-col-reverse bg-gray-300 md:max-w-[65rem] md:max-h-[25rem] md:flex-row">
      <div className="flex flex-col gap-5 p-6 md:p-12">
        <strong className="text-zinc-900 text-2xl">{title}</strong>
        <p className="text-zinc-900 text-lg">{description}</p>

        <Anchor href={repoUrl} target="_blank">
          <Button>Repositório</Button>
        </Anchor>
        <Anchor href={productionUrl} target="_blank">
          <Button>Produção</Button>
        </Anchor>
      </div>

      <Image
        src={preview}
        alt=""
        className="w-full object-cover rounded-tr-md rounded-tl-md md:w-1/2 md:rounded-tl-none md:rounded-br-md"
      />
    </div>
  );
};
