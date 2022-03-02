import { useEffect, useReducer } from "react";
import useQueryReducer from "./reducer";
import { initialState } from "./QueryState";
import {
  createQueryingAction,
  createQuerySuccessAction,
  createQueryErrorAction,
  createSetUrlAction,
} from "./actions";

export const useQuery = () => {
  const [state, dispatch] = useReducer(useQueryReducer, initialState);

  useEffect(() => {
    if (!state.url || !state.url.trim()) return;

    dispatch(createQueryingAction(true));
    fetch(state.url)
      .then((response) => response.json())
      .then((response) => dispatch(createQuerySuccessAction(response)))
      .catch((error) => dispatch(createQueryErrorAction("Request Failed.")));
  }, [state.url]);

  return {
    ...state,
    setUrl: (url: string) => dispatch(createSetUrlAction(url)),
  };
};
