import styled from "styled-components";
import {
  space,
  width,
  color,
  borders,
  boxShadow,
  WidthProps,
  SpaceProps,
  ColorProps,
  BordersProps,
  BoxShadowProps
} from "styled-system";

type Props = WidthProps &
  SpaceProps &
  ColorProps &
  BordersProps &
  BoxShadowProps;

export default styled("div")<Props>`
  max-width: 500px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  ${width}
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
`;
