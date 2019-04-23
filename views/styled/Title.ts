import { Typography } from "antd";
import styled from "styled-components";
import {
  color,
  ColorProps,
  fontSize,
  space,
  SpaceProps,
  textAlign,
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
