import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchSearchProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_SEARCH_PRODUCT = gql`
  query fetchSearchProduct($search: String!, $page: Float!, $pageSize: Float!) {
    fetchSearchProduct(search: $search, page: $page, pageSize: $pageSize) {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      product_product_sellOrBuy
      u_user_nickname
      u_user_profileImage
      i_image_url
      product_product_summary
    }
  }
`;

export const useQueryfetchSearchProduct = (keyword: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchSearchProduct">,
    IQueryFetchSearchProductArgs
  >(FETCH_SEARCH_PRODUCT, {
    variables: { search: keyword, page: 1, pageSize: 10 }
  });

  return Query;
};
