import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import { useQuery } from "./useQuery";
import { renderHook, act } from "@testing-library/react-hooks";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

describe("useQuery hook", () => {
  it("should have correct initial state", () => {
    const { result } = renderHook(() => useQuery());
    const { loading, error, data, url } = result.current;
    // assert initial state
    expect(loading).toBe(false);
    expect(error).toEqual("");
    expect(data).toEqual({});
    expect(url).toEqual("");
  });

  describe("when request is successful", () => {
    const response = { data: "i am data" };

    const server = setupServer(
      rest.get("http://example.com", (req, res, ctx) => {
        return res(ctx.json(response));
      })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it("should return data", async () => {
      const { result } = renderHook(() => useQuery());
      const { setUrl } = result.current;

      act(() => {
        setUrl("http://example.com");
      });

      await delay(1000);

      expect(result.current.data).toEqual(response);
    });
  });

  describe("setUrl callback", () => {
    it("should set url state with given value", () => {
      const { result } = renderHook(() => useQuery());
      const { setUrl } = result.current;

      act(() => {
        setUrl("http://example.com");
      });

      expect(result.current.url).toEqual("http://example.com");
    });

    it("shouldn't trigger API call when called with empty value", () => {
      const { result } = renderHook(() => useQuery());
      const { setUrl } = result.current;

      const spyOnFetch = jest.spyOn(global, "fetch");
      spyOnFetch.mockImplementation((): any =>
        Promise.resolve({
          json: (): Promise<object> => Promise.resolve([{}]),
        })
      );

      act(() => {
        setUrl("");
      });

      expect(spyOnFetch).toBeCalledTimes(0);
    });
    it("should API call once when called with url", () => {
      const { result } = renderHook(() => useQuery());
      const { setUrl } = result.current;

      const spyOnFetch = jest.spyOn(global, "fetch");
      spyOnFetch.mockImplementation((): any =>
        Promise.resolve({
          json: (): Promise<object> => Promise.resolve([{}]),
        })
      );

      act(() => {
        setUrl("http://example.com");
      });

      expect(spyOnFetch).toBeCalledTimes(1);
    });
  });
});
