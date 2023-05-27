import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationRequestProcessArgs
} from "../../../../commons/types/generated/types";

export const REQUEST_PROCESS = gql`
  mutation requestProcess($process: String!, $request_id: String!) {
    requestProcess(process: $process, request_id: $request_id)
  }
`;

export const useMutationRequestProcess = () => {
  const Mutation = useMutation<
    Pick<IMutation, "requestProcess">,
    IMutationRequestProcessArgs
  >(REQUEST_PROCESS);

  return Mutation;
};
