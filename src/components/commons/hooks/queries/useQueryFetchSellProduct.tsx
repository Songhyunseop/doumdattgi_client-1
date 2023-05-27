import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_SELL_PRODUCT = gql`
  query {
    fetchSellProduct {
      product_product_id
      product_product_title
      product_product_category
      product_product_workDay
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

export const useQueryFetchSellProduct = () => {
  const Query = useQuery<Pick<IQuery, "fetchSellProduct">>(FETCH_SELL_PRODUCT);

  return Query;
};
