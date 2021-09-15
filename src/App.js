import NoSearch from "./pages/NoSearch";
import Searched from "./pages/Searched";

function App() {
  const testSearch = true;

  return testSearch ? <Searched /> : <NoSearch />;
}

export default App;

// todo: better organize components folders
// prob refactor some components to be more modular
