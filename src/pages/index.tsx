import Head from "next/head";

import { AboutMeSection } from "@screen-components/Home/AboutMeSection";
import { ContactSection } from "@screen-components/Home/ContactSection";
import { MainSection } from "@screen-components/Home/MainSection";
import { ProjectsSection } from "@screen-components/Home/ProjectsSection";
import { ServicesSection } from "@screen-components/Home/ServicesSection";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ramon Pinheiro Trovão | Desenvolvedor de software</title>
        <link rel="icon" type="image/x-icon" href="/assets/logo.svg" />
        <meta name="title" content="Ramon Pinheiro Trovão" />
        <meta name="language" content="pt-br" />
        <meta
          name="description"
          content="Ramon Pinheiro Trovão é um desenvolvedor mobile & front-end brasileiro que utiliza as melhores tecnologias atuais do mercado para construir softwares de alta qualidade e fidelidade."
        />
        <meta
          name="keywords"
          content="Ramon Trovão, Ramon Pinheiro Trovão, Ramon Pinheiro, Ramon, Ramon Trovao, Desenvolvedor"
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ramontrovao.tech/" />
        <meta property="og:title" content="Ramon Pinheiro Trovão" />
        <meta
          property="og:description"
          content="Ramon Pinheiro Trovão é um desenvolvedor mobile & front-end brasileiro que utiliza as melhores tecnologias atuais do mercado para construir softwares de alta qualidade e fidelidade."
        />
        <meta
          property="og:image"
          content="https://wallpaperaccess.com/full/201322.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ramontrovao.tech" />
        <meta property="twitter:title" content="Ramon Pinheiro Trovão" />
        <meta
          property="twitter:description"
          content="Ramon Pinheiro Trovão é um desenvolvedor mobile & front-end brasileiro que utiliza as melhores tecnologias atuais do mercado para construir softwares de alta qualidade e fidelidade."
        />
        <meta
          property="twitter:image"
          content="https://wallpaperaccess.com/full/201322.jpg"
        />
      </Head>

      <div className="bg-gray-200">
        <DefaultLayout>
          <MainSection />
          <AboutMeSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </DefaultLayout>
      </div>
    </>
  );
};

export default Home;
