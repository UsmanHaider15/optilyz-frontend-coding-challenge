import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";
import App from "./App";
import { baseUrl } from "./services/httpService";

const submitForm = (
  formInput: string,
  formPlaceholder: string,
  buttonText: string
): void => {
  const button = screen.getByText(buttonText);
  const titleInput = screen.getByPlaceholderText(formPlaceholder);
  userEvent.type(titleInput, formInput);
  fireEvent.click(button);
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
  it("should display No Movie by default", () => {
    render(<App />);
    expect(screen.getByText("No Movie")).toBeInTheDocument();
  });

  // integration test
  describe("When request is successful", () => {
    const response = {
      Title: "Titanic",
      Ratings: [],
      Released: "",
      Genre: "",
      Director: "",
      Write: "",
      Actors: "",
      Language: "",
      Awards: "",
    };
    const server = setupServer(
      rest.get(baseUrl, (req, res, ctx) => {
        return res(ctx.json(response));
      })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it("should render movie details", async () => {
      render(<App />);

      submitForm("Titanic", "Search Title", "Search");

      await waitFor(() => screen.getByText("Titanic"));
      expect(screen.getByText("Titanic")).toBeInTheDocument();
    });
  });

  describe("When request is not successful", () => {
    const response = { Error: "Invalid API key" };
    const server = setupServer(
      rest.get(baseUrl, (req, res, ctx) => {
        return res(ctx.json(response));
      })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("should render error badge with correct error", async () => {
      render(<App />);

      submitForm("Titanic", "Search Title", "Search");

      await waitFor(() => screen.getByRole("error-badge"));

      expect(screen.getByRole("error-badge")).toHaveTextContent(
        "Invalid API key"
      );
    });
  });

  describe("API", () => {
    it("should be called per submit", async () => {
      render(<App />);

      const spyOnFetch = jest.spyOn(global, "fetch");
      spyOnFetch.mockImplementation((): any =>
        Promise.resolve({
          json: (): Promise<object> => Promise.resolve([{}]),
        })
      );

      submitForm("titanic", "Search Title", "Search");

      expect(spyOnFetch).toBeCalledTimes(1);
    });

    it("shouldn't be called if input is empty", async () => {
      render(<App />);

      const spyOnFetch = jest.spyOn(global, "fetch");
      spyOnFetch.mockImplementation((): any =>
        Promise.resolve({
          json: (): Promise<object> => Promise.resolve([{}]),
        })
      );

      submitForm("", "Search Title", "Search");

      expect(spyOnFetch).toBeCalledTimes(0);
    });
  });
});
