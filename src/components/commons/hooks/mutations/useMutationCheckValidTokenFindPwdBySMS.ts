import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCheckValidTokenFindPwdBySmsArgs
} from "../../../../commons/types/generated/types";

export const FIND_PWD_BY_SMS = gql`
  mutation checkValidTokenFindPwdBySMS(
    $user_phone: String!
    $user_token: String!
  ) {
    checkValidTokenFindPwdBySMS(
      user_phone: $user_phone
      user_token: $user_token
    )
  }
`;

export const useMutationCheckValidTokenFindPwdBySMS = () => {
  const mutation = useMutation<
    Pick<IMutation, "checkValidTokenFindPwdBySMS">,
    IMutationCheckValidTokenFindPwdBySmsArgs
  >(FIND_PWD_BY_SMS);

  return mutation;
};
