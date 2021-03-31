import styled from "styled-components";
import { colors } from "../../styles/colors";




export const Item = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  padding: .5rem;
  &:hover
  {
    background-color: ${colors.HOVER_COLOR_1}.;
  }
`;



export const Grid = styled.div`
  width: 90%;
  padding-left: 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;  
`;