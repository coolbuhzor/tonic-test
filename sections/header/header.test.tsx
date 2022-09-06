import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";

describe("Header", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
