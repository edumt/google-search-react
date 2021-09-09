import "./App.css";

import MainHeader from "./components";

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <p>Google logo</p>
        <input type="text" name="" id="" />
        <div>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </main>
      <footer>
        <div>
          <a href="#">About</a>
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
        </div>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </footer>
    </>
  );
}

export default App;
