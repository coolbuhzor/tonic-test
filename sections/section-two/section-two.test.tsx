import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTwo from "./index";

describe("SectionTwo", () => {
  it("should render", () => {
    render(<SectionTwo />);
    expect(screen.getByTestId("section-two")).toBeInTheDocument();
  });
});
