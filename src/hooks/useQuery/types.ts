import * as React from "react";
import { Data } from "../../types";

type QueryStateType = {
  loading: boolean;
  error: string;
  data: Partial<Data>;
  url: string;
};

export default QueryStateType;
