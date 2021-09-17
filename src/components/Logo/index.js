// todo
import styled from "styled-components";
import logoPath from "../../assets/logo.png";

const Logo = () => {
  return <Test src={logoPath} />;
};

export default Logo;

const Test = styled.img`
  height: 100%;
  max-width: 272px;
`;
