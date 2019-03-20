import * as React from "react";

import redirect from "../lib/redirect";
import { MyContext } from "../interfaces/MyContext";

import { confirmEmailMutation } from "../graphql/user/mutations/confirmEmail";

import {
  ConfirmEmailMutation,
  ConfirmEmailVariables
} from "../generated/apolloComponents";

class Confirm extends React.Component {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyContext) {
    if (!token) return {};

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

  render() {
    return "something went wrong";
  }
}

export default Confirm;
