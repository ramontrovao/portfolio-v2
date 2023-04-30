import { ReactNode, AnchorHTMLAttributes } from "react";

interface IAnchorProps extends AnchorHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Anchor = ({ children, ...rest }: IAnchorProps) => {
  return (
    <a
      className="text-gray-300 transition-all duration-500 hover:text-opacity-75"
      {...rest}
    >
      {children}
    </a>
  );
};
