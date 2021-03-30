import styled from "styled-components";
import { colors } from "../../styles/colors";

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
