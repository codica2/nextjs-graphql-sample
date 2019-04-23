import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import withApollo from "../lib/withApollo";

import theme from "@views/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    line-height: 1;
  }

  #__next {
    display: flex;
    height: 100%;
  }

`;

class MyApp extends App<any> {
  public render() {
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
