import styled from "styled-components";

export default styled("div")`
  position: relative;
  margin-bottom: 20px;

  input {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    outline: none;
    background: transparent;

    &:focus ~ .focus-bg {
      transition: 0.3s;
      width: 100%;
    }

    &.error {
      border-color: red;
    }
  }

  .focus-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #ededed;
    transition: 0.3s;
    z-index: -1;
  }

  & > .error-message {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 14px;
    color: red;

    ::first-letter {
      text-transform: uppercase;
    }
  }
`;
