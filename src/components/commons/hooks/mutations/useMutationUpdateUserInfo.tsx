import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUserInfoArgs
} from "../../../../commons/types/generated/types";

export const UPDATE_USER_INFO = gql`
  mutation updateUserInfo($updateUserInfoInput: UpdateUserInfoInput!) {
    updateUserInfo(updateUserInfoInput: $updateUserInfoInput) {
      user_id
      user_email
      user_name
      user_portfolio
    }
  }
`;

export const useMutationUpdateUserInfo = () => {
  const Mutation = useMutation<
    Pick<IMutation, "updateUserInfo">,
    IMutationUpdateUserInfoArgs
  >(UPDATE_USER_INFO);

  return Mutation;
};
