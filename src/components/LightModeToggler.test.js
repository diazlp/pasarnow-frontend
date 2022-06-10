import { render, screen, fireEvent } from "@testing-library/react";
import LightModeToggler from "./LightModeToggler";

describe("LightModeToggler unit testing", () => {
  it("renders LightModeToggler on component mount", () => {
    render(<LightModeToggler />);
    expect(screen.getByTestId("light-toggler")).toBeInTheDocument();
  });

  it("should change the screen to dark mode", () => {
    render(<LightModeToggler />);

    const darkToggler = screen.getByTestId("dark-toggler-svg");

    fireEvent.click(darkToggler);

    expect(localStorage.getItem("colormode")).toBe("halloween");
  });

  it("should change the screen to light mode", () => {
    render(<LightModeToggler />);

    const lightToggler = screen.getByTestId("light-toggler-svg");

    fireEvent.click(lightToggler);

    expect(localStorage.getItem("colormode")).toBe("emerald");
  });
});
