import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import ImageContent from "../components/ImageContent";
import { fetchImage } from "../actions/searchAction";
import { act } from "react-dom/test-utils";

jest.setTimeout(20000);

beforeEach(() => {
  cleanup();
});

describe.skip("ImageContent unit testing", () => {
  it("renders ImageContent Loading on component mount", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <ImageContent />
        </Provider>
      </Router>
    );

    expect(screen.getAllByTestId("image-loading")).toBeTruthy();
  });

  it("renders ImageContent on search action All dispatch", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <ImageContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchImage("hello"));
    });

    await waitFor(
      () => {
        expect(screen.queryAllByTestId("image-content")).toBeTruthy();
      },
      {
        timeout: 10000,
      }
    );
  });

  it("opens a new tab on Card Image click", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <ImageContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchImage("hello"));
    });

    await waitFor(() => {
      fireEvent.click(screen.getAllByTestId("image-content")[0]);
    });
  });
});
