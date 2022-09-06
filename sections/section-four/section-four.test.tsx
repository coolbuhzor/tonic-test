import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionFour from "./index";

describe("SectionFour", () => {
  it("should render", () => {
    render(<SectionFour />);
    expect(screen.getByTestId("section-four")).toBeInTheDocument();
  });
});
