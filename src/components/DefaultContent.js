import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import { fetchAll, unmountAll } from "../actions/searchAction";

import DefaultLoading from "./DefaultLoading";

function DefaultContent() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const { searchResult } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(unmountAll());
    dispatch(fetchAll(searchParams.get("search")));
  }, [searchParams]);

  const renderMobileCard = (content) => (
    <div
      className="cursor-pointer"
      onClick={() => window.open(content.link, "_blank")}
    >
      <div className="card w-full bg-accent">
        <div className="card-body">
          <h2 className="card-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  );

  const renderDefaultCard = (content) => (
    <div className="card w-full bg-accent shadow-md shadow-secondary text-white">
      <div className="card-body flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => window.open(content.link, "_blank")}
          >
            Visit
          </button>
        </div>
      </div>
    </div>
  );

  if (!searchResult.length) {
    return (
      <>
        <DefaultLoading />
        <DefaultLoading />
        <DefaultLoading />
        <DefaultLoading />
      </>
    );
  }

  return (
    <>
      {searchResult.map((result) => {
        return isMobile ? renderMobileCard(result) : renderDefaultCard(result);
      })}
    </>
  );
}

export default DefaultContent;
