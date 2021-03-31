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
  justify-content: left;
  width: 100%;
  padding: 0.5rem;
  &:hover {
    background-color: #a1ffff;
  }
`;
//

export const Grid = styled.div`
  display: grid;
  width: 90%;
  padding-left: 10%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
`;
// display: ${({ open }) => (open ? "none" : "grid")};
