import DefaultContent from "../components/DefaultContent";
import NavigationBar from "../components/NavigationBar";

function SearchPage() {
  return (
    <div className="m-5 md:m-10 flex flex-col gap-5" data-testid="default-page">
      <NavigationBar logoColor="text-primary" />
      <DefaultContent />
    </div>
  );
}

export default SearchPage;
