import React from "react";
import "./App.css";
import { Button } from "./components/common/Button";
import { StyledInput } from "./components/Styled";
import { Badge } from "./components/Badge";
import { SearchTitle } from "./components/SearchTitle";
import { useQuery } from "./hooks/useQuery";

function App() {
  const { loading, data, error, setUrl } = useQuery();

  if (error) return <Badge label={error} type="error" />;
  return (
    <div className="App">
      <SearchTitle onSetUrl={setUrl} />
      <Badge label="No Movies" />
      <div>{data.Title}</div>
    </div>
  );
}

export default App;
