import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import thunderShopPreview from "@assets/thunder-shop-preview.png";
import coffeeDeliveryPreview from "@assets/coffee-delivery-preview.png";
import githubBlogPreview from "@assets/github-blog-preview.png";
import codesecPreview from "@assets/codesec-preview.png";
import portfolioPreview from "@assets/portfolio-preview.png";

import { ProjectCard } from "./ProjectCard";

const projectsList = [
  {
    title: "Thunder Shop",
    description:
      "Desenvolvi um ecommerce utilizando a API de pagamentos da Stripe, através de uma loja fictícia. Nesse projeto utilizei NextJS, Stitches e Axios. :)",
    repoUrl: "https://github.com/ramontrovao/thunder-shop",
    productionUrl: "https://thunder-shop.vercel.app/",
    preview: thunderShopPreview,
  },
  {
    title: "Coffee Delivery",
    description:
      "Esse projeto é um ecommerce que pode ser integrado com chats. Nela eu utilizei a lib RHF com zod para validação e a API pública viacep pra validação de CEP.",
    repoUrl: "https://github.com/ramontrovao/coffee-delivery",
    productionUrl: "https://bit.ly/coffeedeliveryrocket",
    preview: coffeeDeliveryPreview,
  },
  {
    title: "Github Blog",
    description:
      "Desenvolvi esse projeto para treinar minhas skills com Axios + ReactJS, onde usufrui do máximo que o axios tem a fornecer para requisições de API de forma simples e objetiva.",
    repoUrl: "https://github-blog-vert.vercel.app/",
    productionUrl: "https://github-blog-vert.vercel.app/",
    preview: githubBlogPreview,
  },
  {
    title: "Codesec",
    description:
      "Esse projeto é uma simulação de divulgação de curso de Hacking. Desenvolvi ele em aprox. 2 dias e a ideia dele foi treinar uma entrega ágil e consistente no menor tempo possível",
    repoUrl: "https://github.com/ramontrovao/codesec",
    productionUrl: "https://codesec.vercel.app/",
    preview: codesecPreview,
  },
  {
    title: "Meu portfólio",
    description:
      "Sim, você está nesse projeto agora. Desenvolvi ele com Next + Tailwind + ThreeJS + Framer Motion, até que ele ficou bonitão, o que você acha? ",
    repoUrl: "https://github.com/ramontrovao/my-portfolio",
    productionUrl: "https://ramontrovao.tech",
    preview: portfolioPreview,
  },
];

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
            slidesPerView: 1.25,
          },
        }}
        spaceBetween={20}
        className="mt-16 w-full h-full cursor-grab"
      >
        {projectsList.map(
          ({ title, description, productionUrl, repoUrl, preview }) => (
            <SwiperSlide key={title}>
              <ProjectCard
                title={title}
                description={description}
                productionUrl={productionUrl}
                repoUrl={repoUrl}
                preview={preview}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};
