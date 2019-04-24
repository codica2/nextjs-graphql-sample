import styled, { StyledComponent } from "styled-components";
import {
  borders,
  boxShadow,
  BordersProps,
  BoxShadowProps
} from "styled-system";

import common, { CommonProps } from "./types/common";
import { flexItem, FlexItemProps } from "./types/flex";
import typography, { TypographyProps } from "./types/typography";
import layout, { LayoutProps } from "./types/layout";

type Props = CommonProps &
  FlexItemProps &
  BordersProps &
  BoxShadowProps &
  TypographyProps &
  LayoutProps;

const Box: StyledComponent<Props> = styled("div")(
  {
    boxSizing: "border-box"
  },

  common,
  flexItem,
  borders,
  boxShadow,
  typography,
  layout
);

Box.displayName = "Box";

export default Box;
