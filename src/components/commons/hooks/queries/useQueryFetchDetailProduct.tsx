import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchDetailProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_DETAIL_PRODUCT = gql`
  query fetchDetailProduct($product_id: String!) {
    fetchDetailProduct(product_id: $product_id) {
      product_id
      user {
        user_id
        user_email
        user_nickname
        user_profileImage
        user_introduce
        user_portfolio
        user_workRate
        user_point
      }
      images {
        image_id
        image_url
      }
      product_title
      product_category
      product_sub_category
      product_summary
      product_main_text
      product_sellOrBuy
      product_workDay
      product_startTime
      product_endTime
      product_postNum
      product_roadAddress
      product_detailAddress
    }

  }
`;

export const useQueryFetchDetailProduct = (Id: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchDetailProduct">,
    IQueryFetchDetailProductArgs
  >(FETCH_DETAIL_PRODUCT, {
    variables: { product_id: Id }
  });

  return Query;
};
