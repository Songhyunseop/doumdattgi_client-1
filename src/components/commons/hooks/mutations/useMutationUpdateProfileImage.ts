import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateProfileImageArgs
} from "../../../../commons/types/generated/types";

export const UPDATE_PROFILE_IMAGE = gql`
  mutation updateProfileImage($user_url: String!) {
    updateProfileImage(user_url: $user_url) {
      user_profileImage
    }
  }
`;

export const useMutationUpdateProfileImage = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateProfileImage">,
    IMutationUpdateProfileImageArgs
  >(UPDATE_PROFILE_IMAGE);

  return mutation;
};
