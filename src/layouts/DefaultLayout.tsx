import { ReactNode } from "react";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface IDefaultLayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  return (
    <>
      <Header />
      <main className={`${poppins.className} max-w-[80rem] m-auto`}>
        {children}
      </main>
      <Footer />
    </>
  );
};
