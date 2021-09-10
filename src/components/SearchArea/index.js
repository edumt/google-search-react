import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const SearchArea = () => {
  return (
    <SearchWrapper>
      <SearchIcon style={{ color: "#9AA0A6", margin: "0 10px" }} />
      <Input type="text" name="" id="" />
      <MicIcon
        style={{ color: "#4285F4", margin: "0 10px", cursor: "pointer" }}
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
`;
