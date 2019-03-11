import * as React from "react";

import redirect from "../lib/redirect";
import {
  ConfirmUserMutation,
  ConfirmUserVariables
} from "../generated/apolloComponents";
import { confirmUserMutation } from "../graphql/user/mutations/confirmUser";
import { MyContext } from "../interfaces/MyContext";

class Confirm extends React.Component {
  static async getInitialProps({
    query: { token },
    apolloClient,
    ...ctx
  }: MyContext) {
    if (!token) return {};

    await apolloClient.mutate<ConfirmUserMutation, ConfirmUserVariables>({
      mutation: confirmUserMutation,
      variables: {
        token: token as string
      }
    });

    redirect(ctx, "/login");

    return {};
  }

  render() {
    return "something went wrong";
  }
}

export default Confirm;
