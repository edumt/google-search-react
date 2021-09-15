import styled from "styled-components";
import profilePicPath from "../../assets/profile-pic.jpeg";

const ProfilePic = () => {
  return <Image src={profilePicPath} alt="" />;
};

export default ProfilePic;

const Image = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;
