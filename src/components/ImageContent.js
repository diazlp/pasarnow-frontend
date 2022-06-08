import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchImage } from "../actions/searchAction";

import ImageLoading from "./ImageLoading";

function ImageContent() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { imageResult } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchImage(searchParams.get("search")));
  }, [searchParams]);

  const renderImageCard = (content, index) => (
    <div
      className="card w-96 bg-base-100 shadow-xl cursor-pointer"
      onClick={() => window.open(content.link?.href, "_blank")}
      key={index}
    >
      <figure>
        <img
          src={content.image?.src}
          alt={content.image?.alt}
          className="h-48 w-full overflow-hidden shadow object-center object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{content.link?.title}</h2>
        <p>{content.image?.alt ? content.image?.alt : <></>}</p>
      </div>
    </div>
  );

  if (!imageResult.length) {
    return (
      <div className="flex flex-row justify-evenly xl:justify-between gap-12 lg:gap-8 flex-wrap">
        <ImageLoading />
        <ImageLoading />
        <ImageLoading />
        <ImageLoading />
        <ImageLoading />
        <ImageLoading />
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-evenly xl:justify-between gap-12 lg:gap-8 flex-wrap">
      {imageResult.map((result, index) => renderImageCard(result, index))}
    </div>
  );
}

export default ImageContent;
