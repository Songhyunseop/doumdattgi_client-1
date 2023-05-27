import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_RANDOM_PRODUCT = gql`
  query {
    fetchRandomProduct {
      product_product_id
      product_product_title
      product_product_workDay
      product_product_category
      u_user_nickname
      u_user_profileImage
      i_image_url
    }
  }
`;

export const useQueryFetchRandomProduct = () => {
  const Query =
    useQuery<Pick<IQuery, "fetchRandomProduct">>(FETCH_RANDOM_PRODUCT);

  return Query;
};
