import styled from "styled-components";
import { colors } from "../../styles/colors";


export const Item = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
<<<<<<< HEAD
  padding: 0.5rem;
  &:hover {
    background-color: #a1ffff;
=======
  padding: .5rem;
  &:hover
  {
    background-color: ${colors.HOVER_COLOR_1}.;
>>>>>>> d1eed0b014f21744279a17fb193f1b21387652de
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
