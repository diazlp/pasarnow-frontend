import React from "react";
import { useSearchParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function SearchPage() {
  const [params] = useSearchParams();

  console.log(params.get("search"), "<<<<<");

  return (
    <div>
      <NavigationBar />
      SearchPage
    </div>
  );
}

export default SearchPage;
