import { useEffect } from "react";

import LightToggler from "../components/LightModeToggler";
import MainLogo from "../components/MainLogo";
import SearchBox from "../components/SearchBox";
import SearchType from "../components/SearchType";

function HomePage() {
  useEffect(() => {
    localStorage.setItem("colormode", "halloween");
  }, []);

  return (
    <div className="m-10">
      <div className="flex flex-row justify-between items-center">
        <LightToggler />
        <SearchType />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center translate-y-48">
        <MainLogo />
        <SearchBox placeholder="What's up today?" />
      </div>
    </div>
  );
}

export default HomePage;
