import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import ImagePage from "./views/ImagePage";
import NewsPage from "./views/NewsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/default" element={<SearchPage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
