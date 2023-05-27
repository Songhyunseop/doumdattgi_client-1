import { gql, useMutation } from "@apollo/client";
import type { IMutation } from "../../../../commons/types/generated/types";

export const LOGOUT = gql`
  mutation {
    logout
  }
`;

export const useMutationLogout = () => {
  const Mutation = useMutation<Pick<IMutation, "logout">>(LOGOUT);

  return Mutation;
};
