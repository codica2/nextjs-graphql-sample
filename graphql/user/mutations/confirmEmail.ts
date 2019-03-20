import { gql } from "apollo-boost";

export const confirmEmailMutation = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token)
  }
`;
