import { useState } from "react";
import { dummyMenus } from "./constanta";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [menus, setMenus] = useState(dummyMenus);

  const onClickMenu = (idx: number) => {
    const active = menus.map((item, index) => {
      if (idx === index) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setMenus(active);
  };

  return (
    <nav className="bg-[#262626] border-gray-200 fixed w-full bottom-0 z-10">
      <div className="w-ful flex flex-wrap items-center justify-between">
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-language"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden md:w-full md:flex md:order-1">
          <ul className="flex flex-col w-full justify-between font-medium md:p-0 mt-4 border border-gray-100 rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menus.map((menu, idx) => {
              return (
                <li onClick={() => onClickMenu(idx)} key={idx} className={`w-full flex-1 ${menu.isActive ? "bg-[#AB5CFA]" : idx < 3 ? "border-[#EF9533] border-t-2" : "bg-[#262626]"} py-2 justify-center items-center text-center`}>
                  <a href="#" className={`block py-2 px-3 bg-blue-700  rounded md:bg-transparent md:p-0 ${menu.isActive ? "text-[#FCFCFC]" : idx < 3 ? "text-[#EF9533]" : "text-[#9F9E9F]"}`} aria-current="page">
                    {menu.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
