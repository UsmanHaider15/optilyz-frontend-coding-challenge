import { QueryActionTypes, UseQueryAction } from "./actions";
import { initialState } from "./QueryState";
import QueryStateType from "./types";

const useQueryReducer = (state: QueryStateType, action: UseQueryAction) => {
  switch (action.type) {
    case QueryActionTypes.QUERYING:
      return { ...initialState, url: state.url, loading: true };
    case QueryActionTypes.QUERY_SUCCESS:
      return { ...initialState, url: state.url, data: action.payload };
    case QueryActionTypes.QUERY_ERROR:
      return { ...initialState, url: state.url, error: action.payload };
    case QueryActionTypes.SET_URL:
      return { ...initialState, url: action.payload };
    default:
      return state;
  }
};

export default useQueryReducer;
