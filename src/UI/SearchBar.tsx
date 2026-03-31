import { useEffect, type ChangeEventHandler } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  onClose?: () => void;
}

function SearchBar({
  searchValue,
  setSearchValue,
  className = "",
  onClose = () => {},
}: SearchBarProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (searchParams.get("q")) {
      setSearchValue(searchParams.get("q")!.split("+").join(" "));
    } else {
      setSearchValue("");
    }
  }, [pathname]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    let currentPathname = pathname;

    if (pathname === "/" || pathname.includes("branch")) {
      currentPathname = "/search-result";
    }
    navigate({
      pathname: currentPathname,
      search: createSearchParams({
        ...Object.fromEntries([...searchParams]),
        q: searchValue.trim().replace(/\s+/g, " ").split(" ").join("+"),
      }).toString(),
    });

    onClose();
  };

  return (
    <div
      className={`${className} mx-auto mt-4 flex w-[80%] items-center justify-between gap-x-6 rounded border border-gray-400 px-4 py-2 transition-all duration-200 focus-within:border-primary hover:border-primary lg:rounded-lg`}
    >
      <input
        placeholder="جستجو"
        className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-800"
        type="text"
        value={searchValue}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />

      <button onClick={onSearch}>
        <SearchIcon className="icon fill-gray-800" />
      </button>
    </div>
  );
}
export default SearchBar;
