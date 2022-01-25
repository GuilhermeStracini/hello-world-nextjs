
import React from "react";
import { render, screen } from "../test-utils";
import IndexPage from "@pages/index.js";

describe("IndexPage", () => {
  it("should render the heading", () => {
    render(<IndexPage />);

    const heading = screen.getByText(
      /ToDo app/i
    );
    expect(heading).toBeInTheDocument();
  });
});