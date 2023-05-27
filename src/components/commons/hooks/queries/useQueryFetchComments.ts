import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchCommentsArgs
} from "../../../../commons/types/generated/types";

export const FETCH_COMMENTS = gql`
  query fetchComments($request_id: String!) {
    fetchComments(request_id: $request_id) {
      comment_text
      sender_id
      user {
        user_nickname
        user_profileImage
      }
      comment_createdAt
    }
  }
`;

export const useQueryFetchComments = (id: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
    variables: {
      request_id: id
    }
  });

  return query;
};
