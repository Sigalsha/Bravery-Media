import styled from "styled-components";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const H1Element = styled.h1`
  font-size: 40px;
  letter-spacing: 0.8;
  font-weight: bold;
  margin: 30px 0 0 0;
  text-align: center;
  color: ${colors.DARK_BLUE};

  @media ${device.mobileS} {
  }

  @media ${device.mobileL} {
  }
`;
