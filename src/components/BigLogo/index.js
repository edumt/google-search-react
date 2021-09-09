import styled from "styled-components";
import google from "../../assets/logo.png";

const BigLogo = () => {
  return <Logo src={google} />;
};

export default BigLogo;

const Logo = styled.img`
  max-width: 272px;
  width: 50%;
  margin-top: 15vh;
`;