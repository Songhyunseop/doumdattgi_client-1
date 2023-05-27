import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchPickUserProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_PICK_USER_PRODUCT = gql`
  query fetchPickUserProduct($page: Float!, $pageSize: Float!) {
    fetchPickUserProduct(page: $page, pageSize: $pageSize) {
      pick_pick_id
      p_product_id
      p_product_title
      p_product_category
      p_product_workDay
      p_product_sellOrBuy
      p_product_summary
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

export const useQueryFetchPickUserProduct = () => {
  const Query = useQuery<
    Pick<IQuery, "fetchPickUserProduct">,
    IQueryFetchPickUserProductArgs
  >(FETCH_PICK_USER_PRODUCT, {
    variables: {
      page: 1,
      pageSize: 10
    }
  });

  return Query;
};
