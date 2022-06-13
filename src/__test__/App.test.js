import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import App from "../App";

describe("React App integration test", () => {
  it("should render the app without crashing", () => {
    const store = createStore(rootReducer);

    render(
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
  });
});
