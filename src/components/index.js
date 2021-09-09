import AppsIcon from "@material-ui/icons/Apps";
import HeaderWrapper from "./styled";

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <a href="#">Gmail</a>
      <a href="#">Images</a>
      <a href="#">
        <AppsIcon />
      </a>
      <a href="#">Profile pic placeholder</a>
    </HeaderWrapper>
  );
};

export default MainHeader;
