import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/typography";
import Typography from "@material-ui/core/Typography";

export const Wrapper = styled.div``;
// display: ${({ resultOpen }) => (resultOpen ? "flex" : "none")};

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 1% 2% 1% 2.5%;
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

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: transparent;
  border-radius: 4px;
  padding: 1.5% 0;
  margin: 0.5% 0;
`;

export const Label = styled.label`
  margin-right: 1%;
  font-size: ${fontSizes.fontL};
  color: ${colors.LOGO_BLUE};
  display: ${({ isPlot }) => (isPlot ? "block" : "inherit")};
  width: ${({ isPlot }) => (isPlot ? "100%" : "inherit")};
  line-heigt: ${({ isPlot }) => (isPlot ? "1.5" : "inherit")};
`;

export const Divider = styled.hr`
  border: 0.5px solid ${colors.BORDER_GREY};
  margin: 0.5% 0;
`;

export const Text = styled(Typography)`
  margin-bottom: 0;
  margin-top: 0.25%;
  background-color: ${colors.TRANSPARENT};
`;
