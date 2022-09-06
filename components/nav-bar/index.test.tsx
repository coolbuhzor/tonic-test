import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./index";

describe("Button", () => {
  it("should render", () => {
    render(<NavBar />);
    expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  });
});
