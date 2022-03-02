import { ApiResponse } from "../../types";

export enum QueryActionTypes {
  QUERYING = "QUERYING",
  QUERY_SUCCESS = "QUERY_SUCCESS",
  QUERY_ERROR = "QUERY_ERROR",
  SET_URL = "SET_URL",
}

export const createQueryingAction = (querying: boolean) => ({
  type: QueryActionTypes.QUERYING as const,
  payload: querying,
});

type QueryingAction = ReturnType<typeof createQueryingAction>;

export const createQuerySuccessAction = (data: Partial<ApiResponse>) => ({
  type: QueryActionTypes.QUERY_SUCCESS as const,
  payload: data,
});

type QuerySuccessAction = ReturnType<typeof createQuerySuccessAction>;

export const createQueryErrorAction = (error: string) => ({
  type: QueryActionTypes.QUERY_ERROR as const,
  payload: error,
});

type QueryErrorAction = ReturnType<typeof createQueryErrorAction>;

export const createSetUrlAction = (url: string) => ({
  type: QueryActionTypes.SET_URL as const,
  payload: url,
});

type SetQueryAction = ReturnType<typeof createSetUrlAction>;

export type UseQueryAction =
  | QueryingAction
  | QuerySuccessAction
  | QueryErrorAction
  | SetQueryAction;
