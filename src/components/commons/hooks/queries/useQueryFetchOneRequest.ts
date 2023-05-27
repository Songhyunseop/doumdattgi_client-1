import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchOneRequestArgs
} from "../../../../commons/types/generated/types";

export const FETCH_ONE_REQUEST = gql`
  query fetchOneRequest($request_id: String!) {
    fetchOneRequest(request_id: $request_id) {
      request_id
      request_isAccept
      request_title
      request_content
      request_price
      seller_nickname
      seller_email
      seller_id
      seller_profileImage
      buyer_nickname
      buyer_email
      buyer_id
      buyer_profileImage
      request_createAt
      request_startAt
      request_sendAt
      request_completedAt
    }
  }
`;

export const useQueryFetchOneRequest = (id: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchOneRequest">,
    IQueryFetchOneRequestArgs
  >(FETCH_ONE_REQUEST, {
    variables: { request_id: id }
  });

  return Query;
};
