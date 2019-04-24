import * as SS from "styled-system";

export type FlexContainerProps = SS.AlignItemsProps &
  SS.AlignContentProps &
  SS.JustifyContentProps &
  SS.FlexWrapProps &
  SS.FlexDirectionProps;

export const flexContainer = SS.compose(
  SS.alignItems,
  SS.alignContent,
  SS.justifyContent,
  SS.flexWrap,
  SS.flexDirection
);

export type FlexItemProps = SS.FlexProps &
  SS.FlexBasisProps &
  SS.AlignSelfProps &
  SS.JustifySelfProps &
  SS.FlexDirectionProps;

export const flexItem = SS.compose(
  SS.flex,
  SS.flexBasis,
  SS.alignSelf,
  SS.justifySelf
);
