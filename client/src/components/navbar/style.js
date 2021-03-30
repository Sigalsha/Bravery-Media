import styled from "styled-components";
import { colors } from "../../styles/colors";

export const NavGroup = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-around;
  max-width: 100%;
  height: 5%;
  background-color: ${colors.GREY};
`;
