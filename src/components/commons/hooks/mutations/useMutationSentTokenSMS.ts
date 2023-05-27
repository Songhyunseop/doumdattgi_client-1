import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationSendTokenSmsArgs
} from "../../../../commons/types/generated/types";

export const SEND_TOKEN_SMS = gql`
  mutation sendTokenSMS($user_phone: String!) {
    sendTokenSMS(user_phone: $user_phone)
  }
`;

export const useMutationSendTokenSMS = () => {
  const mutation = useMutation<
    Pick<IMutation, "sendTokenSMS">,
    IMutationSendTokenSmsArgs
  >(SEND_TOKEN_SMS);

  return mutation;
};
