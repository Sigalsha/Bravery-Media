import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontSizes } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { device } from "../../styles/devices";

export const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  border-radius: 3%;
  background-color: ${({ isActiveRoute }) =>
    isActiveRoute ? `${colors.FOCUS_BLUE}` : `${colors.DARK_BLUE}`};
  cursor: pointer;
  padding: 1.5% 5%;
  margin: 1.5%;

  &:hover {
    opacity: 0.8;
    border: none;
  }

  &:focus {
    background-color: ${colors.FOCUS_BLUE};
    outline: none;
  }

  @media ${device.mobileS} {
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
  }
`;

export const LinkTitle = styled.span`
  font-size: ${fontSizes.fontS};
  color: ${colors.WHITE};

  @media ${device.mobileS} {
    font-size: ${fontSizes.fontXS};
  }

  @media ${device.tablet} {
    font-size: ${fontSizes.fontS2};
  }

  @media ${device.laptop} {
    font-size: ${fontSizes.fontS};
  }
`;
