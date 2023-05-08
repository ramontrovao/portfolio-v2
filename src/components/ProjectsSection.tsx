import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-12 px-5 md:px-10 md:py-24 bg-gray-200"
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
          768: {
            slidesPerView: 1.1,
          },
        }}
        spaceBetween={20}
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
