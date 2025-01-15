import langingImage from "../assets/landing.png";
import downloadImage from "../assets/appDownload.png";
import Searchbar, { SearchForm } from "@/components/Searchbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text.5xl font-bold tracking-tight text-orange-600">
          Tack into a take away today
        </h1>
        <Searchbar
          placeholder="search by city or town"
          onSubmit={handleSearchSubmit}
        />
        <span className="text-xl">Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={langingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster
          </span>
          <span>
            Download for faster deliveries and a personalised experience
          </span>
          <img src={downloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
