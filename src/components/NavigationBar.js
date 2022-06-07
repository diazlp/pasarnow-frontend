import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="m-5 md:m-10 flex flex-row gap-5 border-b-2 pb-4 md:pb-5">
      <div className="flex flex-row gap-8 items-center md:gap-36 md:w-[800px]">
        <article
          className="prose select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            SearchParty
          </h1>
        </article>
        <SearchBox placeholder="Search" />
      </div>
    </div>
  );
}

export default NavigationBar;
