import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";
import { device } from "../../styles/devices";
import SearchIcon from "@material-ui/icons/Search";

export const SearchContainer = styled.div`
  width: 25%;
  margin: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.LIGHT_GREY};
  border: 1px solid ${colors.BLACK};
  border-radius: 5px;

  @media ${device.laptop} {
    width: 20%;
  }

  @media ${device.laptopL} {
    width: 15%;
  }
`;

export const Input = styled.input`
  background-color: ${colors.TRANSPARENT};
  border: none;
  outline: none;
  color: ${colors.BLACK};
  margin-top: 1%;
  width: 80%;
  padding-left: 2%;
  font-size: ${fontSizes.fontM};

  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  text-decoration: none;
  outline: none;
  border: transparent;
  border-radius: 4px;
  margin: 1% 1% 1% auto;
  width: 20%;
  background-color: ${colors.LIGHT_GREY};
`;

export const StyledIcon = styled(SearchIcon)`
  color: ${colors.MAIN_BLUE};
  background-color: ${colors.LIGHT_GREY};

  &:hover {
    color: ${colors.DARK_BLUE};
  }
`;
