import React from "react";
import "./App.css";
import { Button } from "./components/common/Button";
import { StyledInput } from "./components/Styled";
import { Badge } from "./components/Badge";

function App() {
  return (
    <div className="App">
      <StyledInput placeholder="Search Title" />
      <Button>Search</Button>
      <Badge label="No Movies" />
    </div>
  );
}

export default App;
