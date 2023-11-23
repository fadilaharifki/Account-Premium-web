import React from "react";

interface NextArrowIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const NextArrowIcon: React.FC<NextArrowIconProps> = ({ width = 20, height = 21, fill = "#FCFCFC" }) => {
  return (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg>
  );
};

export default NextArrowIcon;
