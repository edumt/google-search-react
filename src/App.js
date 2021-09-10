import "./App.css";
import BigLogo from "./components/BigLogo";
import styled from "styled-components";

import MainHeader from "./components/MainHeader";
import SearchArea from "./components/SearchArea";

function App() {
  return (
    <AppWrapper>
      <MainHeader />
      <MainWrapper>
        <BigLogo />
        <SearchArea />
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
    </AppWrapper>
  );
}

export default App;

const MainWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
