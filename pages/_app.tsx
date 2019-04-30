import App, { Container } from "next/app";
import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import withApollo from "@utils/withApollo";

import theme from "@views/theme";
import GlobalStyles from "@views/globalStyles";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
