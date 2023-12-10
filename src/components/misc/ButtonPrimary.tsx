import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        (className || "")
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
