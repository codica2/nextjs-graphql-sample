import { Box } from "rebass";
import styled from "styled-components";
import { boxShadow, BoxShadowProps } from "styled-system";

type Props = BoxShadowProps;

export default styled(Box)<Props>`
  max-width: 500px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  ${boxShadow}
`;
