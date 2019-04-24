import * as SS from "styled-system";

export type PositionProps = SS.PositionProps &
  SS.ZindexProps &
  SS.TopProps &
  SS.RightProps &
  SS.BottomProps &
  LeftProps;

export default SS.compose(
  SS.position,
  SS.zIndex,
  SS.top,
  SS.right,
  SS.bottom,
  SS.left
);
