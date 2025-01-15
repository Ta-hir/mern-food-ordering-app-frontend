import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultsInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:flex-row lg:items-center m-5">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold inderline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
      Insert sort dropdown here
    </div>
  );
};

export default SearchResultsInfo;
