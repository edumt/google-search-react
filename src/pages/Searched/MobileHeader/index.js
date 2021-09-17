import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ProfilePic from "../../../components/ProfilePic";
import Logo from "../../../components/Logo";

const MobileHeader = () => {
  return (
    <Header>
      <MenuIcon />
      <Logo />
      <ProfilePic />
    </Header>
  );
};

export default MobileHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin: 10px;
`;
