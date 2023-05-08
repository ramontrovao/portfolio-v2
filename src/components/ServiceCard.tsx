import { ReactNode } from "react";
import { motion } from "framer-motion";
import { AiOutlineMobile } from "react-icons/ai";

interface IServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: IServiceCard) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 5,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 50px",
        transition: { duration: 0.25 },
      }}
      className="w-80 min-h-[30rem] py-10 px-6 flex gap-10 flex-col justify-center items-center bg-gradient-to-r border-2 border-gray-300 from-gray-200 to-gray-300 rounded-lg"
    >
      <div className="w-16 h-16 flex justify-center items-center rounded-lg bg-gray-300 border-2 border-gray-400 text-purple-400">
        {icon}
      </div>

      <div className="flex flex-col justify-center align-center">
        <strong className="text-center text-lg font-bold text-zinc-900">
          {title}
        </strong>

        <p className="mt-2 text-center text-md text-zinc-900">{description}</p>
      </div>
    </motion.div>
  );
};
