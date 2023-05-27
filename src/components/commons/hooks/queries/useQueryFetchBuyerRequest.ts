import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_BUYER_REQUEST = gql`
  query {
    fetchBuyerRequest {
      request_id
      request_isAccept
      request_createAt
      request_title
      buyer_id
      buyer_nickname
      buyer_profileImage
      seller_nickname
      seller_profileImage
    }
  }
`;

export const useQueryFetchBuyerRequest = () => {
  const Query =
    useQuery<Pick<IQuery, "fetchBuyerRequest">>(FETCH_BUYER_REQUEST);

  return Query;
};
