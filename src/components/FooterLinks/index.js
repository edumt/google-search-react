import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const FooterLinks = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  return (
    <FooterWrapper>
      <LinksWrapper>
        <a href="#root">About</a>
        <a href="#root">Advertising</a>
        <a href="#root">Business</a>
        {!isMobile && <a href="#root">How Search works</a>}
      </LinksWrapper>

      <LinksWrapper>
        <a href="#root">Privacy</a>
        <a href="#root">Terms</a>
        <a href="#root">Settings</a>
      </LinksWrapper>
    </FooterWrapper>
  );
};

export default FooterLinks;

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #eee;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LinksWrapper = styled.nav`
  padding: 15px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  color: #0000008c;
  border-bottom: 1px solid #ddd;

  a {
    margin: 0 10px;
  }
  a:hover {
    text-decoration: underline;
  }
`;
