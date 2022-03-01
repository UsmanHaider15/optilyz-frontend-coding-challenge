import { baseUrl, getUrl } from "./httpService";

describe("getUrl function", () => {
  it("return with query in url", () => {
    expect(getUrl("test")).toEqual(
      `${baseUrl}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=test`
    );
  });
});
