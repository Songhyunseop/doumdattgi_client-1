import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateNicknameIntroduceArgs
} from "../../../../commons/types/generated/types";

export const UPDATE_NICKNAME_INTRODUCE = gql`
  mutation updateNicknameIntroduce(
    $updateNicknameIntroduceInput: UpdateNicknameIntroduceInput!
  ) {
    updateNicknameIntroduce(
      updateNicknameIntroduceInput: $updateNicknameIntroduceInput
    ) {
      user_id
      user_email
      user_name
      user_nickname
      user_introduce
    }
  }
`;

export const useMutationUpdateNicknameIntroduce = () => {
  const Mutation = useMutation<
    Pick<IMutation, "updateNicknameIntroduce">,
    IMutationUpdateNicknameIntroduceArgs
  >(UPDATE_NICKNAME_INTRODUCE);

  return Mutation;
};
