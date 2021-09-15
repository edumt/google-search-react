import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import BigLogo from "../BigLogo";
import SearchArea from "../../../components/SearchArea";
import SearchButtons from "../SearchButtons";

const MainSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <MainWrapper>
      <BigLogo />
      <SearchArea />
      {!isMobile && <SearchButtons />}
    </MainWrapper>
  );
};

export default MainSection;

const MainWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
