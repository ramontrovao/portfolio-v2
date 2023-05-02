import { AboutMeSection } from "@/components/AboutMeSection";
import { ArrowUp } from "@/components/ArrowUp";
import { MainSection } from "@/components/MainSection";
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
      <ArrowUp />
    </>
  );
};

export default Home;
