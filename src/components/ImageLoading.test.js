import { render, screen } from "@testing-library/react";
import ImageLoading from "./ImageLoading";

describe("ImageLoading unit testing", () => {
  it("renders ImageLoading on component mount", () => {
    render(<ImageLoading />);
    expect(screen.getByTestId("image-loading")).toBeInTheDocument();
  });
});
