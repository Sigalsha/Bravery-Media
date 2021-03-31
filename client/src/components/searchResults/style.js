import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Item = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  padding: 0.5rem;
  &:hover {
    background-color: ${colors.HOVER_COLOR_1}.;
  }
`;


export const Grid = styled.div`
  display: ${({ resultOpen }) => (resultOpen ? "none" : "grid")};
  width: 90%;
  padding-left: 10%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;
