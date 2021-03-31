import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";

export const Wrapper = styled.div``;
// display: ${({ resultOpen }) => (resultOpen ? "flex" : "none")};

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ImgElement = styled.img`
  height: 15vh;
  width: 12vw;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    height: 120px;
    width: 120px;
  }
`;
