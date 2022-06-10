import { render, screen } from "@testing-library/react";
import NewsLoading from "./NewsLoading";

describe("NewsLoading unit testing", () => {
  it("renders NewsLoading on component mount", () => {
    render(<NewsLoading />);
    expect(screen.getByTestId("news-loading")).toBeInTheDocument();
  });
});
