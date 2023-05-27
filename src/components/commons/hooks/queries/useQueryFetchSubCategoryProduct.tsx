import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchSubCategoryProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_SUB_CATEGORY_PRODUCT = gql`
  query fetchSubCategoryProduct(
    $product_sub_category: String!
    $page: Float!
    $pageSize: Float!
  ) {
    fetchSubCategoryProduct(
      product_sub_category: $product_sub_category
      page: $page
      pageSize: $pageSize
    ) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      product_product_sellOrBuy
      product_product_sub_category
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

export const useQueryfetchSubCategoryProduct = (sub: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchSubCategoryProduct">,
    IQueryFetchSubCategoryProductArgs
  >(FETCH_SUB_CATEGORY_PRODUCT, {
    variables: {
      product_sub_category: sub,
      page: 1,
      pageSize: 10
    }
  });

  return Query;
};
