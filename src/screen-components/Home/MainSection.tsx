import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import { Keyboard } from "@components/Keyboard";
import { Anchor } from "@components/Anchor";

export const MainSection = () => {
  return (
    <section
      className="py-48 px-5 md:p-24 md:px-10 flex items-center bg-gray-200"
      id="inicio"
    >
      <div className="w-full flex flex-col gap-2">
        <p className="text-zinc-900 text-lg">Olá, meu nome é</p>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700 md:text-6xl">
          Ramon Pinheiro
        </h1>
        <p className="text-zinc-900 text-xl">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
            mobile & front-end
          </span>
        </p>

        <nav>
          <ul className="flex gap-3">
            <li>
              <Anchor href="https://github.com/ramontrovao">
                <AiOutlineGithub size={28} />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://linkedin.com/ramon-pinheiro">
                <AiOutlineLinkedin size={28} />
              </Anchor>
            </li>
            <li>
              <Anchor href="/assets/ramon-pinheiro-cv.pdf">
                <AiOutlineMail size={28} />
              </Anchor>
            </li>
          </ul>
        </nav>
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
