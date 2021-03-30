import styled from "styled-components";
import { colors } from "../../styles/colors";

// export const SearchResultContainer = styled.div`
//   width: 30%;
//   margin: 2%;
//   display: flex;
//   align-items: center;
//   background-color: ${colors.RED};
//   border-style: solid;
//   border-width: 1px;
//   border-color: ${colors.BLACK};
// `;



export const Item = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: .5rem;
  &:hover
  {
    background-color: #a1ffff;
  }
`;



export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;  
`;