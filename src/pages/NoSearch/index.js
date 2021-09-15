import styled from "styled-components";

import MainHeader from "./MainHeader";
import MainSection from "./MainSection";
import FooterLinks from "./FooterLinks";

const NoSearch = () => {
  return (
    <AppWrapper>
      <MainHeader />
      <MainSection />
      <FooterLinks />
    </AppWrapper>
  );
};

export default NoSearch;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
