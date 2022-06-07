import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SearchBox from "./SearchBox";

function NavigationBar({ logoColor }) {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <div className="flex flex-row border-b-2 gap-2 pb-4 md:pb-5 items-center justify-between">
      <div className="flex flex-row">
        <article
          className="prose select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className={`text-2xl md:text-3xl font-bold ${logoColor}`}>
            SearchParty
          </h1>
        </article>
      </div>
      <div className="flex flex-row w-2/5">
        <SearchBox placeholder="Search" />
      </div>
      {isMobile ? <></> : <div></div>}
    </div>
  );
}

export default NavigationBar;
