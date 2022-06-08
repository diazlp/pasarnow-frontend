import MainLogo from "../components/MainLogo";
import SearchBox from "../components/SearchBox";
import SearchType from "../components/SearchType";

function HomePage() {
  return (
    <div className="m-10">
      <SearchType />
      <div className="flex flex-col gap-5 justify-center items-center translate-y-48">
        <MainLogo />
        <SearchBox placeholder="What's up today?" />
      </div>
    </div>
  );
}

export default HomePage;
