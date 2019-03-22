import styled from "styled-components";
import {
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  order,
  FlexProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  OrderProps
} from "styled-system";

type PropsFlex = FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps &
  FlexDirectionProps;

type PropsFlexItem = FlexProps & OrderProps;

const Flex = styled("div")<PropsFlex>`
  display: flex;
  width: 100%;
  height: 100%;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

const FlexItem = styled("div")<PropsFlexItem>`
  ${flex}
  ${order}
`;

export { FlexItem };

export default Flex;
