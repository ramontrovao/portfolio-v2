import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillCard } from "./SkillCard";

export const ProjectsSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-24 px-10 bg-gray-200">
      <h2 className="text-zinc-900 font-bold text-4xl">
        Meus melhores{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
          projetos
        </span>{" "}
        inovadores
      </h2>

      <Swiper className="width-full height-full">
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Teste</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
