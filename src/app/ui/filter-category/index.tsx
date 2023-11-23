import PenaIcon from "@/app/assets/svg/pena";
import Button from "../button";
import { listCategory } from "./constanta";

interface FilterCategoryProps {}

const FilterCategory: React.FC<FilterCategoryProps> = () => {
  return (
    <div className="grid max-[1024px]:gap-4 max-[1024px]:grid-cols-1 min-[1024px]:flex  items-center bg-[#1E1E1E] my-4 py-4 px-6 rounded-lg">
      <div className="px-2 col-span-1">Category</div>
      <div className="grid max-[720px]:grid-cols-1 max-[1024px]:gap-4 min-[1024px]:flex justify-center items-center">
        <div className="grid max-[1024px]:gap-4 max-[640px]:grid-cols-1 max-[720px]:grid-cols-2 max-[1024px]:grid-cols-3 min-[1024px]:flex">
          {listCategory.map((list, idx) => {
            return (
              <div className="flex items-center" key={idx}>
                <div key={idx} className="px-1">
                  <Button className="rounded-xl">{list.label}</Button>
                </div>
                {idx === listCategory.length - 1 && (
                  <div className="flex px-1 cursor-pointer">
                    <PenaIcon />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
