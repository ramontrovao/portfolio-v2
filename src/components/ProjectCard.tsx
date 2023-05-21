import Image, { StaticImageData } from "next/image";

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
    <div className="rounded-md flex flex-col-reverse bg-gray-300 h-[35rem] md:h-[32rem] md:max-w-[65rem] md:flex-row">
      <div className="flex flex-col gap-5 p-6 md:p-12">
        <div className="flex-1">
          <strong className="text-zinc-900 text-2xl">{title}</strong>
          <p className="mt-5 text-zinc-900 text-lg">{description}</p>
        </div>

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
        priority
      />
    </div>
  );
};
