import React from "react";
import MainLogo from "../components/MainLogo";
import SearchBox from "../components/SearchBox";

function HomePage() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center">
        <MainLogo />
        <SearchBox />
      </div>
    </>
  );
}

export default HomePage;
