import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationSendRequestArgs
} from "../../../../commons/types/generated/types";

export const SEND_REQUEST = gql`
  mutation sendRequest($createRequestInput: CreateRequestInput!) {
    sendRequest(createRequestInput: $createRequestInput) {
      request_id
    }
  }
`;

export const useMutationSendRequest = () => {
  const Mutation = useMutation<
    Pick<IMutation, "sendRequest">,
    IMutationSendRequestArgs
  >(SEND_REQUEST);

  return Mutation;
};
