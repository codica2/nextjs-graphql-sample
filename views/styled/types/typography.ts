import * as SS from "styled-system";

export type TypographyProps = SS.FontFamilyProps &
  SS.TextAlignProps &
  SS.LineHeightProps &
  SS.FontWeightProps &
  SS.FontStyleProps &
  SS.LetterSpacingProps;

export default SS.compose(
  SS.fontFamily,
  SS.textAlign,
  SS.lineHeight,
  SS.fontWeight,
  SS.fontStyle,
  SS.letterSpacing
);
