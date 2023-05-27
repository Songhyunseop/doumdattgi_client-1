import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateProductArgs
} from "../../../../commons/types/generated/types";

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $updateProductInput: UpdateProductInput!
    $product_id: String!
  ) {
    updateProduct(
      updateProductInput: $updateProductInput
      product_id: $product_id
    )
  }
`;

export const useMutationUpdateProduct = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateProduct">,
    IMutationUpdateProductArgs
  >(UPDATE_PRODUCT);

  return mutation;
};
