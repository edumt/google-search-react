import "./App.css";
import BigLogo from "./components/BigLogo";
import styled from "styled-components";

import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <MainHeader />
      <MainWrapper>
        <BigLogo />
        <input type="text" name="" id="" />
        <div>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
      </MainWrapper>
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

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
