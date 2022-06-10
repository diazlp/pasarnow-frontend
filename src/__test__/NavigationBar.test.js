import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import NavigationBar from "../components/NavigationBar";

describe("NavigationBar unit testing", () => {
  it("renders NavigationBar on component mount", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <NavigationBar />
        </Provider>
      </Router>
    );
    expect(screen.getByText("SearchParty")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("should render the search input", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <NavigationBar />
        </Provider>
      </Router>
    );

    const input = screen.getByTestId("search-input");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("should move page to home", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <NavigationBar />
        </Provider>
      </Router>
    );

    const homeButton = screen.getByTestId("logo-link");

    fireEvent.click(homeButton);

    expect(screen.getByText("SearchParty")).toBeInTheDocument();
  });
});
