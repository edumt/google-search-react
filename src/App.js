import styled from "styled-components";

import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";
import FooterLinks from "./components/FooterLinks";

function App() {
  return (
    <AppWrapper>
      <MainHeader />
      <MainSection />
      <FooterLinks />
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
