import { render, screen } from "@testing-library/react";
import ImageLoading from "../components/ImageLoading";

describe("ImageLoading unit testing", () => {
  it("should render ImageLoading on component mount", () => {
    render(<ImageLoading />);
    expect(screen.getByTestId("image-loading")).toBeInTheDocument();
  });
});
