import MainLogo from "../components/MainLogo";
import SearchBox from "../components/SearchBox";

function HomePage() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center mx-10">
        <MainLogo />
        <SearchBox placeholder="What's up today?" />
      </div>
    </>
  );
}

export default HomePage;
