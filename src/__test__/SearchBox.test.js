import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { selectSearch, unmountAll } from "../actions/searchAction";
import { act } from "react-dom/test-utils";
import rootReducer from "../reducer/rootReducer";
import SearchBox from "../components/SearchBox";

beforeEach(cleanup);

describe.only("SearchBox unit testing", () => {
  it("renders SearchBox on component mount", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </Router>
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("should render the search input", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </Router>
    );

    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("should move to search result page when enter key is pressed", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Router>
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </Router>
    );

    const input = screen.getByTestId("search-input");

    fireEvent.keyDown(input, { key: "Enter" });

    expect(input.value).toBe("");
  });

  it("should move to image result page when enter key is pressed", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Router>
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </Router>
    );

    await act(() => {
      store.dispatch(selectSearch("images"));
      store.dispatch(unmountAll());
    });

    const input = screen.getByTestId("search-input");

    fireEvent.keyDown(input, { key: "Enter" });

    expect(input.value).toBe("");
  });

  it("should move to news result page when enter key is pressed", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    await act(() => {
      store.dispatch(selectSearch("news"));
      store.dispatch(unmountAll());
    });

    render(
      <Router>
        <Provider store={store}>
          <SearchBox />
        </Provider>
      </Router>
    );

    const input = screen.getByTestId("search-input");

    fireEvent.keyDown(input, { key: "Enter" });

    expect(input.value).toBe("");
  });
});
