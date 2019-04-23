import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { NextContext } from "next";

export interface NextContextWithApollo extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
