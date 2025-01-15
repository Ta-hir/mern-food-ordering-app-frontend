import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "../api/RestaurantApi";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import SearchResultsCard from "@/components/SearchResutlsCard";
import { useState } from "react";
import Searchbar, { SearchForm } from "@/components/Searchbar";
import PaginationSelector from "@/components/PaginationSelector";
import CuisinesFilter from "@/components/CuisinesFilter";
import SortOptionDropdown from "@/components/SortOptionDropdown";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortoption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortoption: "bestMatch",
  });

  const { results, isLoading } = useSearchRestaurants(searchState, city);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const setSortOption = (sortoption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortoption,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  if (isLoading) {
    <span>Loading...</span>;
  }
  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-col-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        <CuisinesFilter
          selectedCuisines={searchState.selectedCuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandClick={() =>
            setIsExpanded((prevIsExpanded) => !prevIsExpanded)
          }
        />
      </div>
      <div id="main-content" className="flex flex-col gsp-5">
        <Searchbar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeholder="Search by cuisine or by restaurant name"
          onReset={resetSearch}
        />
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultsInfo total={results.pagination.total} city={city} />
          <SortOptionDropdown
            sortoption={searchState.sortoption}
            onChange={(value) => setSortOption(value)}
          />
        </div>
        {results.data.map((restaurant) => (
          <SearchResultsCard restaurant={restaurant} />
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
