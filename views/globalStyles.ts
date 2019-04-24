import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: Roboto;
    line-height: 1;
  }

  #__next {
    display: flex;
    height: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
