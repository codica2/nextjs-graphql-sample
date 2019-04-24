import styled, { StyledComponent } from "styled-components";

import common, { CommonProps } from "./types/common";
import { flexContainer, FlexContainerProps } from "./types/flex";

type Props = CommonProps & FlexContainerProps;

const Flex: StyledComponent<Props> = styled("div")(
  {
    display: "flex"
  },

  common,
  flexContainer
);

export default Flex;
