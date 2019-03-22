import styled from "styled-components";
import { Typography } from "antd";
import {
  fontSize,
  textAlign,
  space,
  color,
  SpaceProps,
  ColorProps,
  TextAlignProps
} from "styled-system";

type Props = SpaceProps & ColorProps & TextAlignProps;

/**
 * TODO: Fix `textAlign` prop on a DOM element warning
 */

export default styled(Typography.Title)<Props>`
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
`;
