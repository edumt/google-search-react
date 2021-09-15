import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
//import MicIconPath from "../../assets/google-microphone.png"

const SearchArea = () => {
  //todo: autofocus, maybe autofocus on render with useeffect hook
  const focusInput = () => document.getElementById("input-area").focus();

  return (
    <SearchWrapper>
      <SearchIcon
        style={{ color: "#9AA0A6", margin: "0 12px" }}
        onClick={focusInput}
      />
      <Input type="text" name="" id="input-area" />
      <MicIcon
        style={{ color: "#4285F4", margin: "0 12px", cursor: "pointer" }}
      />
    </SearchWrapper>
  );
};

export default SearchArea;

const SearchWrapper = styled.div`
  max-width: 580px;
  width: 90%;
  height: 45px;
  margin: 25px 0;

  display: flex;
  align-items: center;

  border: 1px solid #ddd;
  border-radius: 25px;

  :hover {
    box-shadow: 0px 0px 5px #22222244;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;
