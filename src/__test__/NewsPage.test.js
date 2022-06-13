import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import NewsPage from "../views/NewsPage";

describe("NewsPage integration test", () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  it("should render NewsPage", () => {
    render(
      <Router>
        <Provider store={store}>
          <NewsPage />
        </Provider>
      </Router>
    );
    expect(screen.getByTestId("news-page")).toBeInTheDocument();
  });
});
