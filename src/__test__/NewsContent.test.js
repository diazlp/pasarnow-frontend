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
import { act } from "react-dom/test-utils";
import NewsContent from "../components/NewsContent";
import { fetchNews } from "../actions/searchAction";
import { deleteNews } from "../actions/newsAction";

jest.setTimeout(20000);

beforeEach(() => {
  cleanup();
});

describe("NewsContent unit testing", () => {
  it("should render NewsContent Loading on component mount", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <NewsContent />
        </Provider>
      </Router>
    );

    expect(screen.getAllByTestId("news-loading")).toBeTruthy();
  });

  it("should render NewsContent on search action All dispatch", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <NewsContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchNews("hello"));
    });

    await waitFor(
      () => {
        expect(screen.queryAllByTestId("news-content")).toBeTruthy();
      },
      {
        timeout: 20000,
      }
    );
  });

  it("should open a new tab on News Title click", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <NewsContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchNews("hello"));
    });

    await waitFor(() => {
      fireEvent.click(screen.getAllByTestId("news-title")[0]);
    });
  });

  it("should delete a News from list", async () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    render(
      <Router>
        <Provider store={store}>
          <NewsContent />
        </Provider>
      </Router>
    );

    await act(async () => {
      await store.dispatch(fetchNews("hello"));
    });

    const deleteBtn = screen.getAllByTestId("delete-news")[0];

    const newsId = deleteBtn.getAttribute("id");

    await act(async () => {
      fireEvent.click(deleteBtn);
      await store.dispatch(deleteNews(newsId));
    });
  });
});
