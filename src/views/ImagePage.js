import NavigationBar from "../components/NavigationBar";
import ImageContent from "../components/ImageContent";

function SearchPage() {
  return (
    <div className="m-5 md:m-10 flex flex-col gap-5">
      <NavigationBar logoColor="text-secondary" />
      <ImageContent />
    </div>
  );
}

export default SearchPage;
