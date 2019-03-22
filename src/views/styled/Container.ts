import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type Props = SpaceProps;

export default styled("div")<Props>`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  ${space}
`;
