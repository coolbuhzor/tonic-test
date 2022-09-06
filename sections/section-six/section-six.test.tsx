import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionSix from "./section-six";

describe("SectionSix", () => {
  it("should render", () => {
    render(<SectionSix />);
    expect(screen.getByTestId("section-six")).toBeInTheDocument();
  });
});
