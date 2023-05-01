import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { Keyboard } from "./Keyboard";

export const MainSection = () => {
  return (
    <section
      className="min-h-screen px-10 flex justify-between items-center"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-gray-200 text-lg">Olá, meu nome é</p>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 md:text-7xl">
          Ramon Pinheiro
        </h1>
        <p className="text-gray-200 text-xl">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            mobile & front-end
          </span>
        </p>
      </div>

      <div className="flex visible max-lg:hidden">
        <Canvas style={{ width: "350px", height: "350px" }} linear flat>
          <Stage environment="city" intensity={1}>
            <Keyboard />
            <OrbitControls enableZoom={false} />
          </Stage>
        </Canvas>
      </div>
    </section>
  );
};
