import redirect from "../lib/redirect";
import { NextContextWithApollo } from "../interfaces/NextContextWithApollo";
import { logoutMutation } from "../graphql/user/mutations/logout";

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
