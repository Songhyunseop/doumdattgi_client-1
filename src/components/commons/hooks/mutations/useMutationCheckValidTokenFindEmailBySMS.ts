import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCheckValidTokenFindEmailBySmsArgs
} from "../../../../commons/types/generated/types";

export const FIND_EMAIL_BY_SMS = gql`
  mutation checkValidTokenFindEmailBySMS(
    $user_phone: String!
    $user_token: String!
  ) {
    checkValidTokenFindEmailBySMS(
      user_phone: $user_phone
      user_token: $user_token
    )
  }
`;

export const useMutationCheckValidTokenFindEmailBySMS = () => {
  const mutation = useMutation<
    Pick<IMutation, "checkValidTokenFindEmailBySMS">,
    IMutationCheckValidTokenFindEmailBySmsArgs
  >(FIND_EMAIL_BY_SMS);

  return mutation;
};
