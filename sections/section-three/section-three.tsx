import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionThree from "./index";

describe("SectionThree", () => {
  it("should render", () => {
    render(<SectionThree />);
    expect(screen.getByTestId("section-three")).toBeInTheDocument();
  });
});
