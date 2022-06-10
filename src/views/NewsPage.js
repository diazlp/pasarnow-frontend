import NavigationBar from "../components/NavigationBar";
import NewsContent from "../components/NewsContent";

function NewsPage() {
  return (
    <div className="m-5 md:m-10 flex flex-col gap-5" data-testid="news-page">
      <NavigationBar logoColor="text-accent" />
      <NewsContent />
    </div>
  );
}

export default NewsPage;
