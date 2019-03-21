import redirect from "../lib/redirect";
import { MyContext } from "../interfaces/MyContext";
import { logoutMutation } from "../graphql/user/mutations/logout";

const Logout = () => {
  return null;
};

Logout.getInitialProps = async ({ apolloClient, ...ctx }: MyContext) => {
  await apolloClient.mutate({ mutation: logoutMutation });
  await apolloClient.resetStore();

  redirect(ctx, "/login");

  return {};
};

export default Logout;
