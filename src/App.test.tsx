import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should contain an input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search Title")).toBeInTheDocument();
  });
  it("should contain search button", () => {
    render(<App />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
  it("should display No Movie by default", () => {
    render(<App />);
    expect(screen.getByText("No Movie")).toBeInTheDocument();
  });
});
