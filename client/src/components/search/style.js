import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";

export const SearchContainer = styled.div`
  width: 30%;
  margin: 2%;
  display: flex;
  align-items: center;
  background-color: ${colors.TRANSPARENT};
  border-style: solid;
  border-width: 1px;
  border-color: ${colors.BLACK};
`;

export const Input = styled.input`
  background-color: ${colors.TRANSPARENT};
  border: none;
  outline: none;
  color: ${colors.BLACK};
  margin-top: 1%;

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
  border: transparent;
  border-radius: 4px;
  margin: 1%;
  padding: 1.5%;
  font-size: ${fontSizes.fontS2};
`;
