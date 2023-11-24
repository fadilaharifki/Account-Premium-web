import { useState } from "react";
import { dummyMenus } from "./constanta";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [menus, setMenus] = useState(dummyMenus);
  const [open, setOpen] = useState(false);

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
    <nav className="bg-[#262626] border-gray-200 fixed max-[768px]:bg-transparent w-full  max-[768px]:top-0 min-[768px]:bottom-0 z-10">
      <div className="w-ful flex flex-wrap items-center justify-between">
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-16 h-16 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden md:w-full md:flex md:order-1" id="navbar-default">
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
        {open && (
          <div className="bg-[#262626] h-screen md:hidden items-center absolute justify-between w-3/6 md:order-1 top-0 left-0" id="navbar-default">
            <button
              onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center right-0 p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg aria-hidden="true" className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col w-full justify-between font-medium md:p-0 mt-4 borderrounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {menus.map((menu, idx) => {
                return (
                  <li
                    onClick={() => onClickMenu(idx)}
                    key={idx}
                    className={` bg-[#262626] w-full flex-1 ${menu.isActive ? "bg-[#AB5CFA]" : idx < 3 ? "border-[#EF9533] border-r-2" : "bg-[#262626]"} py-2 justify-center items-center text-center`}
                  >
                    <a href="#" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${menu.isActive ? "text-[#FCFCFC]" : idx < 3 ? "text-[#EF9533]" : "text-[#9F9E9F]"}`} aria-current="page">
                      {menu.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
