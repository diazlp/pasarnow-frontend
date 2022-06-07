import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    if (e.key === "Enter") {
      const { data } = await axios.get(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchTerm}`,
        {
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            "X-RapidAPI-Key":
              "78d1284d4cmsh70c40a76d1a3c36p139354jsnb20955a3a89e",
          },
        }
      );

      console.log(data);

      setSearchTerm("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What's up today?"
        className="input input-bordered w-full input-md max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => submitHandler(e)}
      />
    </>
  );
}
