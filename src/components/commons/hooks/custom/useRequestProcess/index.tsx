import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REQUEST_PROCESS } from "../../mutations/useMutationRequestProcess";
import { useQueryFetchOneRequest } from "../../queries/useQueryFetchOneRequest";

interface IMutationData {
  process: string;
  request_id: string;
}

export const useRequestProcess = () => {
  const router = useRouter();

  const [requestProcess] = useMutation(REQUEST_PROCESS);

  const { data } = useQueryFetchOneRequest(router.query.id as string);
  const request_id = data?.fetchOneRequest.request_id;

  // ===============신청자 작업 완료 여부 기능 ===============
  const onClickRequestProcessBuyer = async () => {
    try {
      const result = await requestProcess({
        variables: {
          request_id: request_id,
          process: "작업 완료 확정하기"
        }
      });
      alert("작업 확정이 전달되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // ===============작업자 작업 완료 여부 기능 ===============
  const onClickRequestProcessSeller = async () => {
    try {
      const result = await requestProcess({
        variables: {
          request_id: request_id,
          process: "작업 완료하기"
        }
      });
      alert("작업 완료가 전달되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
    router.reload();
  };
  return { onClickRequestProcessBuyer, onClickRequestProcessSeller };
};
