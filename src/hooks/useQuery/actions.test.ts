import {
  createQueryingAction,
  createQuerySuccessAction,
  createQueryErrorAction,
  createSetUrlAction,
  QueryActionTypes,
} from "./actions";

describe("actions", () => {
  it("createQueryingAction create action with payload set to true", () => {
    expect(createQueryingAction(true)).toEqual({
      type: QueryActionTypes.QUERYING,
      payload: true,
    });
  });

  it("createQuerySuccessAction create action with payload set to data", () => {
    expect(createQuerySuccessAction({ Title: "Titanic" })).toEqual({
      type: QueryActionTypes.QUERY_SUCCESS,
      payload: { Title: "Titanic" },
    });
  });

  it("createQueryErrorAction create action with payload error message", () => {
    expect(createQueryErrorAction("error occurred")).toEqual({
      type: QueryActionTypes.QUERY_ERROR,
      payload: "error occurred",
    });
  });

  it("createSetUrlAction create action with payload set to query string", () => {
    expect(createSetUrlAction("query")).toEqual({
      type: QueryActionTypes.SET_URL,
      payload: "query",
    });
  });
});
