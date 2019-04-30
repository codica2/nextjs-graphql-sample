import styled from "styled-components";
import { themeGet } from "styled-system";

export default styled("div")`
  position: relative;
  margin-bottom: 20px;
  input {
    position: relative;
    box-sizing: border-box;
    font-size: 16px;
    border: 0;
    padding: 5px 10px;
    border-bottom: 1px solid ${themeGet("colors.gray")};
    outline: none;
    width: 100%;
    background-color: transparent;
    color: ${themeGet("colors.primary")};
    &::placeholder {
      color: ${themeGet("colors.font")};
    }
    &:focus ~ .focus-border {
      width: 100%;
      transition: 0.4s;
      left: 0;
    }
    &.error {
      border-color: ${themeGet("colors.error")};
    }
  }
  .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${themeGet("colors.primary")};
    transition: 0.4s;
  }
  & > .error-message {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 14px;
    color: ${themeGet("colors.error")};
    ::first-letter {
      text-transform: uppercase;
    }
  }
`;
