import { ReactNode, AnchorHTMLAttributes } from "react";

interface IAnchorProps extends AnchorHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Anchor = ({ children, ...rest }: IAnchorProps) => {
  return (
    <a
      className="text-zinc-900 transition-all duration-500 hover:text-opacity-75"
      {...rest}
    >
      {children}
    </a>
  );
};
