import Image from "next/image";
import ProductIcon from "@/app/assets/svg/product";
import NextArrowIcon from "@/app/assets/svg/next-arrow";
import BackArrowIcon from "@/app/assets/svg/back-arrow";
import { ReactNode } from "react";

export interface HeaderProps {
  backBtn?: boolean;
  nextBtn?: boolean;
  title: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ backBtn, nextBtn, title }) => {
  return (
    <div className="flex w-full justify-between max-[768px]:h-16 h-24 items-center">
      <div>
        {backBtn && (
          <div className="flex max-[768px]:hidden justify-center items-center cursor-pointer">
            <div className="px-2 justify-center items-center">
              <BackArrowIcon width={25} height={25} />
            </div>
            <div className="text-lg">Back</div>
          </div>
        )}
      </div>
      <div>{title}</div>
      <div>
        {nextBtn && (
          <div className="flex justify-center items-center">
            <div className="px-2 justify-center items-center">
              <NextArrowIcon width={25} height={25} />
            </div>
            <div>Next</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
