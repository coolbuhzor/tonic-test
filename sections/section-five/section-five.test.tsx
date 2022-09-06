import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionFive from "./index";

describe("SectionFive", () => {
  it("should render", () => {
    render(<SectionFive />);
    expect(screen.getByTestId("section-five")).toBeInTheDocument();
  });
});
