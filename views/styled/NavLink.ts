import styled, { StyledComponent } from "styled-components";

import common, { CommonProps } from "./types/common";
import typography, { TypographyProps } from "./types/typography";

type Props = CommonProps & TypographyProps;

const NavLink: StyledComponent<Props> = styled("a")(
  { margin: "0" },

  common,
  typography
);

NavLink.defaultProps = {
  fontSize: [1, 2],
  px: "10px"
};

NavLink.displayName = "NavLink";

export default NavLink;
