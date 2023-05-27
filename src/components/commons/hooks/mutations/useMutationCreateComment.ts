import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateCommentArgs
} from "../../../../commons/types/generated/types";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      comment_text
    }
  }
`;

export const useMutationCreateComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "createComment">,
    IMutationCreateCommentArgs
  >(CREATE_COMMENT);

  return mutation;
};
