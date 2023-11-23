import SearchIcon from "@/app/assets/svg/search";

interface SearchProps {
  placeholder?: string;
  suffix?: boolean;
}

const Search: React.FC<SearchProps> = ({ placeholder = "Search product", suffix = true }) => {
  return (
    <div className="relative w-4/12">
      <input type="text" className="w-full border bg-black rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-[#AA5AFA]" placeholder={placeholder} />
      {suffix && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500">
            <SearchIcon />
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
