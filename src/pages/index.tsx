import { AboutMeSection } from "@/components/AboutMeSection";
import { ArrowUp } from "@/components/ArrowUp";
import { ContactSection } from "@/components/ContactSection";
import { MainSection } from "@/components/MainSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ramon Pinheiro | Desenvolvedor de software</title>
        <link rel="icon" type="image/x-icon" href="/assets/logo.svg" />
      </Head>

      <MainSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />

      <ArrowUp />
    </>
  );
};

export default Home;
