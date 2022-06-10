import { render, screen, fireEvent } from "@testing-library/react";
import SearchType from "./SearchType";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

describe("SearchType unit testing", () => {
  it("renders SearchType on component mount", () => {
    const store = createStore(rootReducer);
    render(
      <Provider store={store}>
        <SearchType />
      </Provider>
    );
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Images")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
  });

  it("should highlight the All button", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <SearchType />
      </Provider>
    );

    const button = screen.getByText("All");

    fireEvent.click(button);

    expect(screen.getByText("All").classList.contains("btn-active")).toBe(true);
  });

  it("should highlight the Images button", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <SearchType />
      </Provider>
    );

    const button = screen.getByText("Images");

    fireEvent.click(button);

    expect(screen.getByText("Images").classList.contains("btn-active")).toBe(
      true
    );
  });

  it("should highlight the News button", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <SearchType />
      </Provider>
    );

    const button = screen.getByText("News");

    fireEvent.click(button);

    expect(screen.getByText("News").classList.contains("btn-active")).toBe(
      true
    );
  });
});
