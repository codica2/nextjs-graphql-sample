import fetch from "isomorphic-unfetch";
import Router from "next/router";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject
} from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export const isBrowser: boolean = (process as any).browser;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

interface Options {
  getToken: () => string;
}

function create(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        cookie: token ? `qid=${token}` : ""
      }
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );

        if (isBrowser && message.includes("not authenticated")) {
          Router.replace("/login");
        }
      });

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    // link: authLink.concat(httpLink),
    link: ApolloLink.from([errorLink, authLink, httpLink]), // Composing Links
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
