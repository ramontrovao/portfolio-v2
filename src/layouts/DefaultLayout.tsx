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
    <div className="relative overflow-hidden">
      <Header />
      <main className={`${poppins.className} bg-gray-500`}>{children}</main>
      <Footer />
    </div>
  );
};
