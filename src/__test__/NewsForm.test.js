import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import NewsForm from "../components/NewsForm";
import { addNews } from "../actions/newsAction";

describe("NewsForm unit testing", () => {
  it("renders NewsForm on component mount", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    expect(screen.getByText("Add More News!")).toBeInTheDocument();
    expect(screen.getByText("Send Message")).toBeInTheDocument();
    expect(screen.getByTestId("news-form")).toBeInTheDocument();
  });

  it("should render the title input", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    const input = screen.getByTestId("title-input");

    act(() => {
      fireEvent.change(input, { target: { value: "test" } });
    });
    expect(input.value).toBe("test");
  });

  it("should render the source input", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    const input = screen.getByTestId("source-input");

    act(() => {
      fireEvent.change(input, { target: { value: "test" } });
    });
    expect(input.value).toBe("test");
  });

  it("should render the url input", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    const input = screen.getByTestId("url-input");

    act(() => {
      fireEvent.change(input, { target: { value: "test" } });
    });
    expect(input.value).toBe("test");
  });

  it("should not submit the form due to empty news title", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    const input = screen.getByTestId("title-input");

    const submitBtn = screen.getByText("Send Message");

    act(() => {
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.click(submitBtn);
    });

    expect(screen.getByText(/please enter news title/i)).toBeInTheDocument();
  });

  it("should submit the valid news form", () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

    render(
      <Provider store={store}>
        <NewsForm />
      </Provider>
    );

    const input = screen.getByTestId("title-input");

    const submitBtn = screen.getByText("Send Message");

    act(() => {
      fireEvent.change(input, { target: { value: "hello" } });
      fireEvent.click(submitBtn);
      store.dispatch(
        addNews({
          title: "hello",
        })
      );
    });

    expect(input.value).toBe("hello");
  });
});
