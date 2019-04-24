import * as SS from "styled-system";

export type CommonProps = SS.SpaceProps &
  SS.WidthProps &
  SS.HeightProps &
  SS.ColorProps &
  SS.FontSizeProps;

export default SS.compose(
  SS.space,
  SS.width,
  SS.height,
  SS.color,
  SS.fontSize
);
