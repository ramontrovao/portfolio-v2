import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-24 px-10 bg-gray-200"
      id="projetos"
    >
      <h2 className="text-center text-zinc-900 font-bold text-4xl">
        Meus melhores{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
          projetos
        </span>{" "}
        inovadores
      </h2>

      <Swiper
        breakpoints={{
          0: {
            spaceBetween: 30,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 1.1,
          },
        }}
        className="mt-16 w-full h-full cursor-grab"
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
