import styled from "styled-components";
import { space, flex, width, WidthProps, SpaceProps } from "styled-system";

// import { StylesProps } from "./types";

type Props = WidthProps & SpaceProps;

export default styled("div")<Props>`
  max-width: 500px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 8px 19px rgba(157, 142, 230, 0.335626);
  border-radius: 4px;
  ${width}
  ${space}
  ${flex}
`;
