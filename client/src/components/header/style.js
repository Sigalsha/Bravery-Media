import styled from "styled-components";
import { fontSizes } from "../../styles/typography";
// import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const Text = styled.p`
  font-size: ${fontSizes.fontXS};
  letter-spacing: 0.8;
  font-weight: bold;

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXXS};
  }

  @media ${device.mobileL} {
    font-size: ${fontSizes.fontXS};
  }
`;
