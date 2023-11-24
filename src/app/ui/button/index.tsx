import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick = () => {}, prefix, suffix, className = "", children }) => {
  return (
    <button onClick={onClick} type="button" className={`flex cursor-pointer justify-center items-center px-4 py-1 border-[1px] bg-transparent text-white rounded-md border-white ${className}`}>
      {prefix && <span className="mr-2">{prefix}</span>}
      {children}
      {suffix && <span className="ml-2">{suffix}</span>}
    </button>
  );
};

export default Button;
