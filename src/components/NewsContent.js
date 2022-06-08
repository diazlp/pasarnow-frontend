import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import { format } from "timeago.js";
import { unmountAll, fetchNews, deleteNews } from "../actions/searchAction";

import NewsLoading from "./NewsLoading";

function NewsContent() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  // const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const { newsResult } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(unmountAll());
    dispatch(fetchNews(searchParams.get("search")));
  }, [searchParams]);

  if (!newsResult.length) {
    return (
      <>
        <NewsLoading />
        <NewsLoading />
        <NewsLoading />
      </>
    );
  }

  const renderDefaultCard = (content, index) => (
    <div
      className="card w-full lg:w-3/5 bg-gray-100 border-b-4 border-blue-500 text-gray-900 p-5 sm:p-5"
      key={index}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 items-center">
          <svg className="w-4 h-4" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-semibold text-sm sm:text-lg">
            {content.title?.split("-")[1]}
          </p>
        </div>
        <button onClick={() => dispatch(deleteNews(content.id))}>
          <svg
            className="h-4 w-4 md:h-6 md:w-6 text-red-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-2 mb-2 sm:mt-0 sm:mb-0 sm:card-body flex flex-col items-center text-center ">
        <div
          className="link link-hover card-title text-sm sm:text-lg"
          onClick={() => window.open(content.link, "_blank")}
        >
          {content.title?.split("-")[0]}
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-start items-center">
        <svg width="12" height="12" viewBox="0 0 97.16 97.16">
          <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
          <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
        </svg>
        <p className="text-secondary text-sm sm:text-lg">
          {format(content.published)}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {newsResult.map((result, index) => {
        return renderDefaultCard(result, index);
      })}
    </>
  );

  // const renderDefaultCard = () => (
  //   <div className="card w-full lg:w-3/5 bg-gray-100 border-b-4 border-blue-500 text-gray-900 p-5 sm:p-5">
  //     <div className="flex flex-row justify-between">
  //       <div className="flex flex-row gap-1 items-center">
  //         <svg className="w-4 h-4" viewBox="0 0 20 20">
  //           <path
  //             fillRule="evenodd"
  //             d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //         <p className="font-semibold text-sm sm:text-lg">
  //           {
  //             "Press Briefing by Vice President Pence and Members of the Coronavirus Task Force | Rockville, MDxz - Whitehouse.gov".split(
  //               "-"
  //             )[1]
  //           }
  //         </p>
  //       </div>
  //       <button>
  //         <svg
  //           className="h-4 w-4 md:h-6 md:w-6 text-red-600"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M6 18L18 6M6 6l12 12"
  //           />
  //         </svg>
  //       </button>
  //     </div>
  //     <div className="mt-2 mb-2 sm:mt-0 sm:mb-0 sm:card-body flex flex-col items-center text-center ">
  //       <h2 className="card-title text-sm sm:text-lg">
  //         {
  //           "Press Briefing by Vice President Pence and Members of the Coronavirus Task Force | Rockville, MDxz - Whitehouse.gov".split(
  //             "-"
  //           )[0]
  //         }
  //       </h2>
  //     </div>
  //     <div className="flex flex-row gap-2 justify-start items-center">
  //       <svg width="12" height="12" viewBox="0 0 97.16 97.16">
  //         <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
  //         <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
  //       </svg>
  //       <p className="text-secondary text-sm sm:text-lg">
  //         {format("Tue, 30 Jun 2020 07:00:00 GMT")}
  //       </p>
  //     </div>
  //   </div>
  // );

  // return (
  //   <>
  //     {renderDefaultCard()}
  //     {renderDefaultCard()}
  //     {renderDefaultCard()}
  //     {renderDefaultCard()}
  //     {renderDefaultCard()}
  //   </>
  // );
}

export default NewsContent;
