import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import { fetchAll } from "../actions/searchAction";

import DefaultLoading from "./DefaultLoading";

function DefaultContent() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const { searchResult } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchAll(searchParams.get("search")));
  }, [searchParams]);

  const renderMobileCard = (content, index) => (
    <div
      className="cursor-pointer"
      onClick={() => window.open(content.link, "_blank")}
      key={index}
      data-testid="mobile-click"
    >
      <div className="card w-full text-gray-900 shadow-md bg-white">
        <div className="card-body">
          <h2 className="card-title text-[20px] font-bold">{content.title}</h2>
          <p className="text-[16px] truncate">{content.description}</p>
          <p className="text-gray-500 text-[14px]">{content.link}</p>
        </div>
      </div>
    </div>
  );

  const renderDefaultCard = (content, index) => (
    <div
      className="card w-full shadow-md text-gray-900"
      key={index}
      data-testid="default-content"
    >
      <div className="card-body flex flex-row justify-between items-center bg-white">
        <div className="flex flex-col gap-1">
          <h2 className="card-title font-bold">{content.title}</h2>
          <p>{content.description}</p>
          <p className="text-gray-500 text-sm">{content.link}</p>
        </div>

        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => window.open(content.link, "_blank")}
            data-testid="desktop-click"
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
      {searchResult.map((result, index) => {
        return isMobile
          ? renderMobileCard(result, index)
          : renderDefaultCard(result, index);
      })}
    </>
  );
}

export default DefaultContent;
