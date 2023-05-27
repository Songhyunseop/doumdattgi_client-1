import { gql, useMutation } from "@apollo/client";

export const CHECK_EMAIL = gql`
  mutation checkValidTokenEMAIL($user_email: String!, $user_token: String!) {
    checkValidTokenEMAIL(user_email: $user_email, user_token: $user_token)
  }
`;

export const useMutationCheckEmail = () => {
  const mutation = useMutation(CHECK_EMAIL);

  return mutation;
};
