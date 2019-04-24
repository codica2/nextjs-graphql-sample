import styled, { StyledComponent } from "styled-components";
import { borders, BordersProps } from "styled-system";

import common, { CommonProps } from "./types/common";
import typography, { TypographyProps } from "./types/typography";

type Props = CommonProps & TypographyProps & BordersProps;

const Heading: StyledComponent<Props> = styled("h1")(
  { margin: "0 0 20px" },

  common,
  borders,
  typography
);

Heading.defaultProps = {
  fontSize: [2, 3, 4],
  fontWeight: 5
};

Heading.displayName = "Heading";

export default Heading;
