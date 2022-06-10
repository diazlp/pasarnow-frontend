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
import SearchPage from "../views/SearchPage";

describe("SearchPage integration test", () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  it("renders SearchPage", () => {
    render(
      <Router>
        <Provider store={store}>
          <SearchPage />
        </Provider>
      </Router>
    );
    expect(screen.getByTestId("default-page")).toBeInTheDocument();
  });
});
