import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { Keyboard } from "./Keyboard";

export const MainSection = () => {
  return (
    <section
      className="min-h-screen py-24 px-10 flex items-center bg-gray-200"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-zinc-900 text-lg">Olá, meu nome é</p>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 md:text-7xl">
          Ramon Pinheiro
        </h1>
        <p className="text-zinc-900 text-xl">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            mobile & front-end
          </span>
        </p>
      </div>

      <Canvas
        className="visible max-md:hidden"
        style={{ width: "650px", height: "500px" }}
        linear
        flat
      >
        <Stage intensity={1}>
          <Keyboard />
          <OrbitControls autoRotate enableZoom={false} />
        </Stage>
      </Canvas>
    </section>
  );
};
