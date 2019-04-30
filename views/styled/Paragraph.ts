import styled, { StyledComponent } from "styled-components";

import common, { CommonProps } from "./types/common";
import typography, { TypographyProps } from "./types/typography";

type Props = CommonProps & TypographyProps;

const Paragraph: StyledComponent<Props> = styled("p")(
  { margin: "0 0 10px" },

  common,
  typography
);

Paragraph.defaultProps = {
  fontSize: [1, 2],
  color: "font"
};

Paragraph.displayName = "Paragraph";

export default Paragraph;
