import styled, { StyledComponent } from "styled-components";
import { themeGet } from "styled-system";

import common, { CommonProps } from "./types/common";
import typography, { TypographyProps } from "./types/typography";

type Props = CommonProps & TypographyProps;

const NavLink: StyledComponent<Props> = styled("a")`
  position: relative;
  margin: 0 10px;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid ${themeGet("colors.secondary")};
  transition: ease-out 0.5s color;
  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 1px;
    width: 1px;
    background-color: ${themeGet("colors.primary")};
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;
    left: 0;
    transform: scaleX(0);
    width: 100%;
  }
  &:hover {
    color: ${themeGet("colors.secondary")};
    :after {
      width: 100%;
      visibility: visible;
      transform: scaleX(1);
    }
  }
  ${common}
  ${typography}
`;

NavLink.defaultProps = {
  fontSize: [1, 2],
  color: "primary"
};

NavLink.displayName = "NavLink";

export default NavLink;
