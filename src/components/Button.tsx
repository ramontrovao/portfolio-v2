import { ReactNode, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button
      className="min-w-full bg-gradient-to-r from-cyan-500 to-purple-700 text-gray-200 px-5 py-4 rounded-lg font-bold shadow-indigo-500/50 transition-all duration-500 hover:bg-purple-700 hover:text-opacity-9 hover:shadow-2xl hover:scale-90"
      {...rest}
    >
      {children}
    </button>
  );
};
