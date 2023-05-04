import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-24 px-10 bg-gray-200">
      <h2 className="text-center text-zinc-900 font-bold text-4xl">
        Meus melhores{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-700">
          projetos
        </span>{" "}
        inovadores
      </h2>

      <Swiper
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 800,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mt-16 w-[90%] h-full cursor-grab"
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
