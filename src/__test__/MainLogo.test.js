import { render, screen } from "@testing-library/react";
import MainLogo from "../components/MainLogo";

describe("MainLogo unit testing", () => {
  it("should render MainLogo on component mount", () => {
    render(<MainLogo />);
    expect(screen.getByText("SearchParty")).toBeInTheDocument();
  });
});
