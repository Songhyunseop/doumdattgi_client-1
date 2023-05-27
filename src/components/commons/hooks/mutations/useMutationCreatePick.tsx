import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreatePickArgs
} from "../../../../commons/types/generated/types";

export const CREATE_PICK = gql`
  mutation createPick($product_id: String!) {
    createPick(product_id: $product_id)
  }
`;

export const useMutationcreatePick = () => {
  const Mutation = useMutation<
    Pick<IMutation, "createPick">,
    IMutationCreatePickArgs
  >(CREATE_PICK);

  return Mutation;
};
