import React from "react";

import { NextContextWithApollo } from "../interfaces/NextContextWithApollo";
import redirect from "@utils/redirect";

import { confirmEmailMutation } from "@graphql/user/mutations/confirmEmail";

import {
  ConfirmEmailMutation,
  ConfirmEmailVariables
} from "@generated/apolloComponents";

class Confirm extends React.Component {
  public static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: NextContextWithApollo) {
    if (!token) {
      return {};
    }

    await apolloClient
      .mutate<ConfirmEmailMutation, ConfirmEmailVariables>({
        mutation: confirmEmailMutation,
        variables: {
          token: token as string
        }
      })
      .then(() => redirect(ctx, "/login"))
      .catch(error => console.error(error));

    return {};
  }

  public render() {
    return "something went wrong";
  }
}

export default Confirm;
