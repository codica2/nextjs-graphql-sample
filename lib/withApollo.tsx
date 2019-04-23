import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import cookie from "cookie";
import { NextAppContext } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import { getDataFromTree } from "react-apollo";

import initApollo, { isBrowser } from "./initApollo";
import redirect from "./redirect";

function parseCookies(req?: any, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || "" : document.cookie,
    options
  );
}

export default (App: any) => {
  return class WithData extends React.Component {
    public static displayName = `WithData(${App.displayName})`;
    public static propTypes = {
      apolloState: PropTypes.object.isRequired
    };

    public static async getInitialProps(ctx: NextAppContext) {
      const {
        Component,
        router,
        ctx: { req, res }
      } = ctx;
      const apollo = initApollo(
        {},
        {
          getToken: () => parseCookies(req).qid
        }
      );

      (ctx as any).ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error);

          if (error.message.includes("not authenticated")) {
            redirect(ctx.ctx, "/login");
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    public apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token;
        }
      });
    }

    public render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
