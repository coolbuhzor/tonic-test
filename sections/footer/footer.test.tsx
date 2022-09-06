import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./index";

describe("Footer", () => {
  it("should render", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
