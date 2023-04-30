import { ReactNode, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button
      className="bg-indigo-500 text-white px-5 py-4 rounded-lg font-bold shadow-indigo-500/50 transition-all duration-500 hover:bg-indigo-600 hover:text-opacity-9 hover:shadow-2xl hover:scale-90"
      {...rest}
    >
      {children}
    </button>
  );
};
