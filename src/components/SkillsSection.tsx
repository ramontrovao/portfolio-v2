import { SkillCard } from "./SkillCard";

export const SkillsSection = () => {
  return (
    <section className="py-24 px-10 flex flex-col justify-center items-center bg-gray-200 min-h-screen">
      <div className="flex justify-center">
        <h2 className="text-zinc-900 font-bold text-4xl">
          Serviços que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
            constroem
          </span>{" "}
          seu projeto
        </h2>
      </div>

      <div className="mt-16 w-full flex gap-36 justify-center items-center flex-wrap">
        <SkillCard />

        <SkillCard />
        <SkillCard />
      </div>
    </section>
  );
};
