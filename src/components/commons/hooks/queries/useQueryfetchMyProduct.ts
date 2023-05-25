import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_MY_PRODUCT = gql`
  query fetchMyProduct($page: Float!, $pageSize: Float!) {
    fetchMyProduct(page: $page, pageSize: $pageSize) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      i_image_url
      u_user_id
      product_product_summary
    }
  }
`;

export const useQueryFetchMyProduct = () => {
  const Query = useQuery<Pick<IQuery, "fetchMyProduct">>(FETCH_MY_PRODUCT, {
    variables: {
      page: 1,
      pageSize: 10
    }
  });

  return Query;
};
