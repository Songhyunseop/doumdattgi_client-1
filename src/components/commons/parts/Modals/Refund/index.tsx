import { Modal } from "antd";
import * as S from "./refund.styles";
import { useMutationCancelPayment } from "../../../hooks/mutations/useMutationCancelPointTransaction";
import { refetchAtom } from "../../../../../commons/stores";
import { useRecoilValue } from "recoil";
import { IPropsRefund } from "./refund.types";
import { useRouter } from "next/router";

export default function RefundPoint(props: IPropsRefund) {
  const router = useRouter();
  const refetches = useRecoilValue(refetchAtom);

  const [CancelPayment] = useMutationCancelPayment();

  const cancelRefund = () => {
    props.setIsRefund(false);
  };

  const status = router.query.status === undefined ? "" : router.query.status;

  console.log(status);

  const GotoRefund = async () => {
    try {
      const result = await CancelPayment({
        variables: {
          payment_impUid: props.refundInfo[0],
          payment_type: props.refundInfo[1]
        }
      });
      alert("환불성공");

      router.reload();

      props.setIsRefund(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <Modal
      className="RefundModal"
      open={props.isRefund}
      onCancel={cancelRefund}
      footer={null}
    >
      <S.Page>
        <S.Title>정말로 환불하시겠습니까?</S.Title>
        <S.RefundBtn onClick={GotoRefund}>환불하기</S.RefundBtn>
      </S.Page>
    </Modal>
  );
}
