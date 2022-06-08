import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { searchType } = useSelector((state) => state.search);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    if (e.key === "Enter") {
      if (searchType === "default") {
        navigate(`/default?search=${searchTerm}`);
      } else if (searchType === "images") {
        navigate(`/image?search=${searchTerm}`);
      } else if (searchType === "news") {
        navigate(`/news?search=${searchTerm}`);
      }

      setSearchTerm("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered input-sm w-full md:input-md md:max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => submitHandler(e)}
      />
    </>
  );
}
