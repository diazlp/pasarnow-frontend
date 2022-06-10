import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import DefaultContent from "../components/DefaultContent";
import { fetchAll } from "../actions/searchAction";
import { act } from "react-dom/test-utils";

jest.setTimeout(20000);

describe("DefaultContent unit testing", () => {
  it("renders DefaultContent Loading on component mount", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <DefaultContent />
        </Provider>
      </Router>
    );

    expect(screen.getAllByTestId("default-loading")).toBeTruthy();
  });

  it("renders DefaultContent on search action All dispatch", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <DefaultContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchAll("hello"));
    });

    await waitFor(
      () => {
        expect(screen.queryAllByTestId("default-content")).toBeTruthy();
      },
      {
        timeout: 20000,
      }
    );
  });

  it("opens a new tab on Visit button click", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <DefaultContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchAll("hello"));
    });

    await waitFor(() => {
      fireEvent.click(screen.getAllByTestId("desktop-click")[0]);
    });
  });
});
