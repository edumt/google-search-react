import "./App.css";
import BigLogo from "./components/BigLogo";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import MainHeader from "./components/MainHeader";
import SearchArea from "./components/SearchArea";
import SearchButton from "./components/SearchButton";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 420px)" });

  return (
    <AppWrapper>
      <MainHeader />
      <MainWrapper>
        <BigLogo />
        <SearchArea />
        {!isMobile && (
          <ButtonsWrapper className="buttons-wrapper">
            <SearchButton>Google Search</SearchButton>
            <SearchButton>I'm Feeling Lucky</SearchButton>
          </ButtonsWrapper>
        )}
      </MainWrapper>
      <footer>
        <div>
          <a href="#root">About</a>
          <a href="#root">Advertising</a>
          <a href="#root">Business</a>
          <a href="#root">How Search works</a>
        </div>
        <div>
          <a href="#root">Privacy</a>
          <a href="#root">Terms</a>
          <a href="#root">Settings</a>
        </div>
      </footer>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  // maybe display as columns on small screens
`;
