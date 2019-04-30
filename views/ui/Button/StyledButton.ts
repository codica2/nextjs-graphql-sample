import styled from "styled-components";
import { themeGet } from "styled-system";

export default styled("button").attrs({
  type: "button"
})`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  color: ${themeGet("colors.primary")};
  cursor: pointer;
  background-color: transparent;
  transition: ease-in-out 0.3s background-color;
  transition: all 200ms cubic-bezier(0.39, 0.5, 0.15, 1.36);
  box-shadow: ${themeGet("colors.primary")} 0 0px 0px 2px inset;
  &:hover {
    color: ${themeGet("colors.bg")};
    box-shadow: ${themeGet("colors.primary")} 0 0px 0px 40px inset;
  }
  & > i {
    margin-left: 8px;
  }
`;
