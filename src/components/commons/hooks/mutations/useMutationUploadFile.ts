import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs
} from "../../../../commons/types/generated/types";

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export const useMutationUploadFile = () => {
  const mutation = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  return mutation;
};
