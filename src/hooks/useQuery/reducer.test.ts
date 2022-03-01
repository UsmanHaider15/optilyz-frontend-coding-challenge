import useQueryReducer from "./reducer";
import {
  createQueryingAction,
  createQuerySuccessAction,
  createQueryErrorAction,
  createSetUrlAction,
} from "./actions";
import { initialState, QueryState } from "./QueryState";

describe("useQuery reducer", () => {
  it("set loading to true", () => {
    expect(useQueryReducer(initialState, createQueryingAction(true))).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("sets data field in state", () => {
    expect(
      useQueryReducer(
        initialState,
        createQuerySuccessAction({ Title: "Titanic" })
      )
    ).toEqual(QueryState({ data: { Title: "Titanic" } }));
  });

  it("sets error field in state", () => {
    expect(
      useQueryReducer(initialState, createQueryErrorAction("error occurred"))
    ).toEqual(QueryState({ error: "error occurred" }));
  });

  it("set query in state", () => {
    expect(
      useQueryReducer(initialState, createSetUrlAction("http://example.com"))
    ).toEqual(QueryState({ url: "http://example.com" }));
  });
});
