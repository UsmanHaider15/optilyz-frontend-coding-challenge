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
    if (!state.url) return;

    dispatch(createQueryingAction(true));
    fetch(state.url.href)
      .then((response) => response.json())
      .then((response) => {
        if (response.hasOwnProperty("Error")) {
          dispatch(createQueryErrorAction(response["Error"]));
        } else {
          dispatch(createQuerySuccessAction(response));
        }
      })
      .catch((error) => dispatch(createQueryErrorAction(error.message)));
  }, [state.url]);

  return {
    ...state,
    setUrl: (url: URL) => {
      if (url) dispatch(createSetUrlAction(new URL(url)));
    },
  };
};
