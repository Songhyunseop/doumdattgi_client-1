import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateProductArgs
} from "../../../../commons/types/generated/types";

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      product_id
    }
  }
`;

export const useMutationCreateProduct = () => {
  const mutation = useMutation<
    Pick<IMutation, "createProduct">,
    IMutationCreateProductArgs
  >(CREATE_PRODUCT);

  return mutation;
};
