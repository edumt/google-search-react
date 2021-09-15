import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ProfilePic from "../../../components/ProfilePic";

const MobileHeader = () => {
  return (
    <Header>
      <MenuIcon />
      logo
      <ProfilePic />
    </Header>
  );
};

export default MobileHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;
