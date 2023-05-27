import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginArgs
} from "../../../../commons/types/generated/types";

export const LOGIN = gql`
  mutation login($user_email: String!, $user_password: String!) {
    login(user_email: $user_email, user_password: $user_password)
  }
`;

export const useMutationLogin = () => {
  const Mutation = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  return Mutation;
};
