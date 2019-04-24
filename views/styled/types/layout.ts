import * as SS from "styled-system";

export type LayoutProps = SS.DisplayProps &
  SS.MaxWidthProps &
  SS.HeightProps &
  SS.MaxHeightProps &
  SS.MinHeightProps;

export default SS.compose(
  SS.display,
  SS.maxWidth,
  SS.height,
  SS.maxHeight,
  SS.minHeight
);
