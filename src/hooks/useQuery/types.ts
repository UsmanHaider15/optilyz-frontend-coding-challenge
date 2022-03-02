import * as React from "react";
import { ApiResponse } from "../../types";

type QueryStateType = {
  loading: boolean;
  error: string;
  data: Partial<ApiResponse>;
  url: string;
};

export default QueryStateType;
