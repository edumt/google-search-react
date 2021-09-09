import AppsIcon from "@material-ui/icons/Apps";
import styled from "styled-components";

import profilePicPath from "../../assets/profile-pic.jpeg";

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <a href="#">
        <BackgroundWrapper>
          <AppsIcon />
        </BackgroundWrapper>
      </a>
      <a href="https://github.com/edumt" target="_blank" rel="noreferrer">
        <BackgroundWrapper>
          <ProfilePic src={profilePicPath} alt="" />
        </BackgroundWrapper>
      </a>
    </HeaderWrapper>
  );
};

export default MainHeader;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 10px 8px;
  font-size: 13px;
  color: #000000de;
  a {
    padding: 0 8px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const BackgroundWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #eee;
  }
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;
