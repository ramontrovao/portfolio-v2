import Head from "next/head";

import { AboutMeSection } from "@screen-components/Home/AboutMeSection";
import { ContactSection } from "@screen-components/Home/ContactSection";
import { MainSection } from "@screen-components/Home/MainSection";
import { ProjectsSection } from "@screen-components/Home/ProjectsSection";
import { ServicesSection } from "@screen-components/Home/ServicesSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ramon Pinheiro | Desenvolvedor de software</title>
        <link rel="icon" type="image/x-icon" href="/assets/logo.svg" />
        <meta name="title" content="Ramon Pinheiro" />
        <meta
          name="description"
          content="Sou desenvolvedor mobile fullstack e trabalho com as melhores tecnologias do mercado."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramontrovao.tech/" />
        <meta property="og:title" content="Ramon Pinheiro" />
        <meta
          property="og:description"
          content="Sou desenvolvedor mobile fullstack e trabalho com as melhores tecnologias do mercado."
        />
        <meta
          property="og:image"
          content="https://wallpaperaccess.com/full/201322.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ramontrovao.tech" />
        <meta property="twitter:title" content="Ramon Pinheiro" />
        <meta
          property="twitter:description"
          content="Sou desenvolvedor mobile fullstack e trabalho com as melhores tecnologias do mercado."
        />
        <meta
          property="twitter:image"
          content="https://wallpaperaccess.com/full/201322.jpg"
        />
      </Head>

      <MainSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
