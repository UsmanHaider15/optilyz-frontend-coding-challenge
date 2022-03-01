import "./App.css";
import { Main } from "./components/Main";
import { SearchTitle } from "./components/SearchTitle";
import { useQuery } from "./hooks/useQuery";

function App() {
  const { loading, data, error, setUrl } = useQuery();

  return (
    <div className="App">
      <SearchTitle onSetUrl={setUrl} />
      <Main loading={loading} data={data} error={error} />
    </div>
  );
}

export default App;
