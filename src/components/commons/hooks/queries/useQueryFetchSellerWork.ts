import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_SELLER_WORK = gql`
  query {
    fetchSellerWork {
      request_id
      request_isAccept
      request_createAt
      request_title
      seller_id
      seller_nickname
      seller_profileImage
      buyer_nickname
      buyer_profileImage
    }
  }
`;

export const useQueryFetchSellerWork = () => {
  const Query = useQuery<Pick<IQuery, "fetchSellerWork">>(FETCH_SELLER_WORK);

  return Query;
};
