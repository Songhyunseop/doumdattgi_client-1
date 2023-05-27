import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_NEWBIE_PRODUCT = gql`
  query {
    fetchNewbieProduct {
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

export const useQueryFetchNewbieProduct = () => {
  const Query =
    useQuery<Pick<IQuery, "fetchNewbieProduct">>(FETCH_NEWBIE_PRODUCT);

  return Query;
};
