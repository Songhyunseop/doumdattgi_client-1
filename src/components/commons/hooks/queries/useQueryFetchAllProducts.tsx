import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchProductsArgs
} from "../../../../commons/types/generated/types";

export const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Float!, $pageSize: Float!) {
    fetchProducts(page: $page, pageSize: $pageSize) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      u_user_nickname
      i_image_url
    }
  }
`;

export const useQueryFetchAllProducts = () => {
  const Query = useQuery<
    Pick<IQuery, "fetchProducts">,
    IQueryFetchProductsArgs
  >(FETCH_PRODUCTS, {
    variables: {
      page: 1,
      pageSize: 10
    }
  });

  return Query;
};
