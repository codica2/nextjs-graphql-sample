import { ComponentType } from "react";
import styled, { StyledComponent } from "styled-components";

import common, { commonProps } from "./types/common";
import { flexItem, flexItemProps } from "./types/flex";

type Props = commonProps & flexItemProps;

const Container: StyledComponent<Props> = styled("div")(
  {
    minHeight: 0
  },

  common,
  flexItem
);

Container.displayName = "Container";

export default Container;
