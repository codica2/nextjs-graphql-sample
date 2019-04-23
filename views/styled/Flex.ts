import styled from "styled-components";
import {
  alignItems,
  AlignItemsProps,
  flex,
  flexDirection,
  FlexDirectionProps,
  FlexProps,
  flexWrap,
  FlexWrapProps,
  justifyContent,
  JustifyContentProps,
  justifySelf,
  JustifySelfProps,
  order,
  OrderProps
} from "styled-system";

type PropsFlex = FlexWrapProps &
  AlignItemsProps &
  JustifyContentProps &
  FlexDirectionProps;

type PropsFlexItem = FlexProps & OrderProps & JustifySelfProps;

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
  ${justifySelf}
`;

export { FlexItem };

export default Flex;
