import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationRequestAcceptRefuseArgs
} from "../../../../commons/types/generated/types";

export const REQUEST_ACCEPT_REFUSE = gql`
  mutation RequestAcceptRefuse($acceptRefuse: String!, $request_id: String!) {
    requestAcceptRefuse(acceptRefuse: $acceptRefuse, request_id: $request_id) {
      request_id
      buyer_id
      seller_id
    }
  }
`;

export const useMutationRequestAcceptRefuse = () => {
  const Mutation = useMutation<
    Pick<IMutation, "requestAcceptRefuse">,
    IMutationRequestAcceptRefuseArgs
  >(REQUEST_ACCEPT_REFUSE);

  return Mutation;
};
