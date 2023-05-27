import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { REQUEST_ACCEPT_REFUSE } from "../../mutations/useMutationRequestAcceptRefuse";
import { MouseEventHandler, useState } from "react";

// interface IMutationData {
//   request_id: string;
//   onClick: () => MouseEventHandler<HTMLButtonElement>;
// }

export const useRequestAcceptRefuse = () => {
  const router = useRouter();
  const [isRefuse, setIsRefuse] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const [RequestAcceptRefuse] = useMutation(REQUEST_ACCEPT_REFUSE);

  // 의뢰 수락하기
  const onClickRequestAccept = async () => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "수락하기",
          request_id: router.query.id as string
        }
      });
      setIsOk(true);
      alert("의뢰가 수락되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 의뢰 거절하기
  const onClickRequestRefuse = async () => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "거절하기",
          request_id: router.query.id
        }
      });
      setIsRefuse(true);
      alert("의뢰가 거절되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 의뢰 완료하기
  const onClickRequestDone = async () => {
    try {
      const result = await RequestAcceptRefuse({
        variables: {
          acceptRefuse: "완료하기",
          request_id: router.query.id
        }
      });
      setIsDone(true);
      alert("의뢰가 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return {
    onClickRequestAccept,
    onClickRequestRefuse,
    onClickRequestDone,
    isOk,
    isRefuse,
    isDone
  };
};
