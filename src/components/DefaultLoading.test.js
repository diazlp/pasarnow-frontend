import { render, screen } from "@testing-library/react";
import DefaultLoading from "./DefaultLoading";

describe("DefaultLoading unit testing", () => {
  it("renders DefaultLoading on component mount", () => {
    render(<DefaultLoading />);
    expect(screen.getByTestId("default-loading")).toBeInTheDocument();
  });
});
