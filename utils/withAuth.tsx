import * as React from "react";

import { MeQuery } from "generated/apolloComponents";
import { NextContextWithApollo } from "../interfaces/NextContextWithApollo";
import redirect from "./redirect";

import { meQuery } from "../graphql/user/queries/me";

export const withAuth = <T extends object>(
  C: React.ComponentClass<T> | React.FC
) => {
  return class AuthComponent extends React.Component<T> {
    public static async getInitialProps({
      apolloClient,
      ...ctx
    }: NextContextWithApollo) {
      const response = await apolloClient.query<MeQuery>({ query: meQuery });
      if (!response || !response.data || !response.data.me) {
        redirect(ctx, "/login");

        return {
          me: null
        };
      }

      return {
        me: response.data.me
      };
    }

    public render() {
      return <C {...this.props} />;
    }
  };
};
