import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import withApollo from "../lib/withApollo";

import theme from "../src/views/styled/theme";
import "../src/views/styles/index.less";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    line-height: 1;
  }
`;

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
          <GlobalStyle />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
