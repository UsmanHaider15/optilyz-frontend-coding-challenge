import QueryStateType from "./types";

export const initialState: QueryStateType = {
  loading: false,
  error: "",
  data: {},
  url: "",
};

// factory function for creating QueryState object
export const QueryState = (
  newState: Partial<QueryStateType>
): QueryStateType => ({
  ...initialState,
  ...newState,
});
