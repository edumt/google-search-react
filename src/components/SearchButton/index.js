import styled from "styled-components";

const SearchButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default SearchButton;

const Button = styled.button`
  padding: 9px 18px;
  margin: 5px 5px;
  font-size: 14px;
  color: #404040;
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;
  box-shadow: 0px 0px 1px #00000018;

  :hover {
    border: 1px solid #d3d3d3;
  }
`;
