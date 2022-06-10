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
import ImagePage from "../views/ImagePage";

describe("ImagePage integration test", () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

  it("renders ImagePage", () => {
    render(
      <Router>
        <Provider store={store}>
          <ImagePage />
        </Provider>
      </Router>
    );
    expect(screen.getByTestId("image-page")).toBeInTheDocument();
  });
});
