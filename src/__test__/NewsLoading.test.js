import { render, screen } from "@testing-library/react";
import NewsLoading from "../components/NewsLoading";

describe("NewsLoading unit testing", () => {
  it("renders NewsLoading on component mount", () => {
    render(<NewsLoading />);
    expect(screen.getByTestId("news-loading")).toBeInTheDocument();
  });
});
