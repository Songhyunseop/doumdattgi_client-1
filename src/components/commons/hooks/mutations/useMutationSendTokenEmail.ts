import { gql, useMutation } from "@apollo/client";

export const SEND_TOKEN_EMAIL = gql`
  mutation sendTokenEmail($user_email: String!) {
    sendTokenEmail(user_email: $user_email)
  }
`;

export const useMutationSendTokenEmail = () => {
  const Mutation = useMutation(SEND_TOKEN_EMAIL);

  return Mutation;
};
