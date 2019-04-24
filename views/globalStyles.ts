import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    font-family: Roboto;
    line-height: 1;
    margin: 0;
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
