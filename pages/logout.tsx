import { logoutMutation } from "@graphql/user/mutations/logout";
import { NextContextWithApollo } from "../interfaces/NextContextWithApollo";
import redirect from "@utils/redirect";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({
  apolloClient,
  ...ctx
}: NextContextWithApollo) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();

  redirect(ctx, "/login");

  return {};
};

export default Logout;
