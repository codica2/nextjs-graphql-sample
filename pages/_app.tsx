import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";

import withApollo from "../lib/withApollo";

import "../views/styles/index.less";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
