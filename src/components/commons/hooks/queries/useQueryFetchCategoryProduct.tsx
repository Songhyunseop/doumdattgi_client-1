import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchCategoryProductArgs
} from "../../../../commons/types/generated/types";

// ======== 카테고리별 조회 =========

export const FETCH_CATEGORY_PRODUCT = gql`
  query fetchCategoryProduct(
    $product_category: String!
    $page: Float!
    $pageSize: Float!
  ) {
    fetchCategoryProduct(
      product_category: $product_category
      page: $page
      pageSize: $pageSize
    ) {
      product_product_id
      product_product_title
      product_product_category
      product_product_sellOrBuy
      product_product_workDay
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

// ========= 전체 목록 조회 ==========

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

export const useQueryFetchCategoryProduct = (category: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchCategoryProduct">,
    IQueryFetchCategoryProductArgs
  >(
    FETCH_CATEGORY_PRODUCT,

    {
      variables: {
        product_category: category,
        page: 1,
        pageSize: 10
      }
    }
  );

  return Query;
};
