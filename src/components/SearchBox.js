import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("default");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    if (e.key === "Enter") {
      // const { data } = await axios.get(
      //   `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchTerm}`,
      //   {
      //     headers: {
      //       "X-User-Agent": "desktop",
      //       "X-Proxy-Location": "SG",
      //       "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      //       "X-RapidAPI-Key":
      //         "78d1284d4cmsh70c40a76d1a3c36p139354jsnb20955a3a89e",
      //     },
      //   }
      // );

      if (searchType === "default") {
        navigate(`/default/?search=${searchTerm}`);
      }
      // console.log(data);

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
