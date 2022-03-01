import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";
import App from "./App";

const setupTestServer = (response: object): void => {
  const server = setupServer(
    rest.get("https://www.omdbapi.com", (req, res, ctx) => {
      return res(ctx.json(response));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};

describe("App", () => {
  it("should contain an input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Search Title")).toBeInTheDocument();
  });
  it("should contain search button", () => {
    render(<App />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
  it("should display No Movies by default", () => {
    render(<App />);
    expect(screen.getByText("No Movies")).toBeInTheDocument();
  });

  // // integration test
  // describe("When request is successful", () => {
  //   setupTestServer({
  //     Title: "Titanic",
  //     Ratings: [],
  //     Released: "",
  //     Genre: "",
  //     Director: "",
  //     Write: "",
  //     Actors: "",
  //     Language: "",
  //     Awards: "",
  //   });
  //   it("should render movie details", async () => {
  //     render(<App />);
  //     const button = screen.getByText("Search");
  //     const titleInput = screen.getByPlaceholderText("Search Title");
  //     userEvent.type(titleInput, "Titanic");
  //     fireEvent.click(button);
  //     await waitFor(() => screen.getByText("Titanic"));
  //     expect(screen.getByText("Titanic")).toBeInTheDocument();
  //   });
  // });

  // describe("When request is not successful", () => {
  //   setupTestServer({ Error: "Invalid API key" });

  //   it("should render error badge with correct error", async () => {
  //     render(<App />);

  //     const button = screen.getByText("Search");
  //     const titleInput = screen.getByPlaceholderText("Search Title");
  //     userEvent.type(titleInput, "Titanic");
  //     fireEvent.click(button);

  //     await waitFor(() => screen.getByRole("error-badge"));

  //     expect(screen.getByRole("error-badge")).toHaveTextContent(
  //       "Invalid API key"
  //     );
  //   });
  // });
});
