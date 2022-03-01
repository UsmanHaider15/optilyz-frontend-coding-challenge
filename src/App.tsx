import React from "react";
import "./App.css";
import { Button } from "./components/common/Button";
import { StyledInput } from "./components/Styled";

function App() {
  return (
    <div className="App">
      <StyledInput placeholder="Search Title" />
      <Button>Search</Button>
      <div>No Movie</div>
    </div>
  );
}

export default App;
