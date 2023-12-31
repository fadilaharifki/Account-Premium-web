import React from "react";

interface SearchIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ width = 20, height = 20, fill = "#AA5AFA" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7247 13.7247C13.9688 13.4806 14.3645 13.4806 14.6086 13.7247L17.9419 17.058C18.186 17.3021 18.186 17.6978 17.9419 17.9419C17.6979 18.186 17.3021 18.186 17.058 17.9419L13.7247 14.6086C13.4806 14.3645 13.4806 13.9688 13.7247 13.7247Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.16667 3.125C5.82995 3.125 3.125 5.82995 3.125 9.16667C3.125 12.5034 5.82995 15.2083 9.16667 15.2083C10.8381 15.2083 12.35 14.5304 13.4445 13.4331C14.5351 12.3395 15.2083 10.8323 15.2083 9.16667C15.2083 5.82995 12.5034 3.125 9.16667 3.125ZM1.875 9.16667C1.875 5.13959 5.13959 1.875 9.16667 1.875C13.1937 1.875 16.4583 5.13959 16.4583 9.16667C16.4583 11.1765 15.6443 12.9975 14.3295 14.3158C13.0101 15.6387 11.1835 16.4583 9.16667 16.4583C5.13959 16.4583 1.875 13.1937 1.875 9.16667Z"
        fill={fill}
      />
    </svg>
  );
};

export default SearchIcon;
