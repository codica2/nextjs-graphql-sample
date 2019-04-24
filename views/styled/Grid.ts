import styled, { StyledComponent } from "styled-components";

import common, { CommonProps } from "./types/common";
import { gridContainer, GridContainerProps } from "./types/grid";

type Props = CommonProps & GridContainerProps;

const Grid: StyledComponent<Props> = styled("div")(
  {
    display: "grid"
  },

  common,
  gridContainer
);

Grid.defaultProps = {
  gridGap: "30px"
};

export default Grid;
