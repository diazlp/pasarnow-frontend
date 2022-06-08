import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "../actions/searchAction";

function SearchType() {
  const dispatch = useDispatch();

  const { searchType } = useSelector((state) => state.search);

  return (
    <div className="btn-group justify-end cursor-pointer">
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md ${
          searchType === "default" ? "btn-active" : ""
        }`}
        onClick={() => dispatch(selectSearch("default"))}
      >
        All
      </button>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md ${
          searchType === "images" ? "btn-active" : ""
        }`}
        onClick={() => dispatch(selectSearch("images"))}
      >
        Images
      </button>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md ${
          searchType === "news" ? "btn-active" : ""
        }`}
        onClick={() => dispatch(selectSearch("news"))}
      >
        News
      </button>
    </div>
  );
}

export default SearchType;
