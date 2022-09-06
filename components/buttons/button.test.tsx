import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./index";

describe("Button", () => {
  it("should render", () => {
    render(<Button className="class-name" text="text" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
