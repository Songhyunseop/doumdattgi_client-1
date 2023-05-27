import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationResetPasswordArgs
} from "../../../../commons/types/generated/types";

export const RESET_PASSWORD = gql`
  mutation resetPassword($user_phone: String!, $new_password: String!) {
    resetPassword(user_phone: $user_phone, new_password: $new_password)
  }
`;

export const useMutationResetPassword = () => {
  const Mutation = useMutation<
    Pick<IMutation, "resetPassword">,
    IMutationResetPasswordArgs
  >(RESET_PASSWORD);

  return Mutation;
};
