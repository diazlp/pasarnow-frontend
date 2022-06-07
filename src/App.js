import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="default" element={<SearchPage />} />
        {/* <Route path="image" element={<SearchPage />} /> */}
        {/* <Route path="news" element={<SearchPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
