import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import withApollo from "../lib/withApollo";

import theme from "@views/theme";
import GlobalStyles from "@views/globalStyles";

class MyApp extends App<any> {
  public render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>

        <GlobalStyles />
      </Container>
    );
  }
}

export default withApollo(MyApp);
