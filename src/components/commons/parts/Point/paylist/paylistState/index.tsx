import * as S from "./paylistState.styles";
import { IValueArgs } from "../../../../../units/myPage/point/index.types";
import { useQueryFetchUserCanceldPaymentInfo } from "../../../../hooks/queries/useQueryFetchUserPaymentInfo";

interface IProps {
  el: {
    payment_impUid: string;
    payment_type: string;
    payment_createdAt: string;
    payment_amount: number;
    payment_status?: string;
  };

  arr: string[];
  clickRefund: (value: IValueArgs) => () => void;
}

export default function PayState(props: IProps) {
  const { data } = useQueryFetchUserCanceldPaymentInfo();

  const Component = { key: <div></div> };

  const canceled = data?.fetchPayments.map(el => el.payment_impUid);

  if (
    canceled?.filter(el => el === props.el.payment_impUid).length > 0 &&
    props.el.payment_status === "PAYMENT"
  ) {
    Component["key"] = <S.ChargeDone>충전완료</S.ChargeDone>;

    return Component["key"];
  }

  if (
    // 충전을 완료한 경우
    props.el.payment_status === "PAYMENT" &&
    String(props.el.payment_amount)[0] !== "-" &&
    props.arr.includes(props.el.payment_impUid) === false
  ) {
    Component["key"] = (
      <S.Box>
        <S.RefundBtn onClick={props.clickRefund(props.el)}>
          환불요청
        </S.RefundBtn>
        <S.ChargeDone>충전완료</S.ChargeDone>
      </S.Box>
    );
  } else if (
    // 충전 후 환불을 한 경우
    props.el.payment_status === "CANCEL" &&
    String(props.el.payment_amount)[0] === "-"
  ) {
    Component["key"] = <S.RefundDone>환불완료</S.RefundDone>;
  } else if (
    // 환불 후 기존 충전 컴포넌트에서 환불 버튼 제거
    props.el.payment_status === "PAYMENT" &&
    props.arr.filter((el: string) => el === props.el.payment_impUid).length > 0
  ) {
    Component["key"] = <S.ChargeDone>충전완료</S.ChargeDone>;
  } else if (props.el.payment_status === "SELL") {
    // 작업 후 근로 임금을 받았을 경우
    Component["key"] = <S.SoldBtn>입금완료</S.SoldBtn>;
  } else if (props.el.payment_status === "REQUEST") {
    // 고용주 입장에서 작업 요청을 한 경우
    Component["key"] = <S.Request_BuyBtn>포인트 차감</S.Request_BuyBtn>;
  } else if (props.el.payment_status === "REFUND") {
    // 요청한 작업이 거절되었을 경우
    Component["key"] = <S.Request_RefundBtn>포인트 환급</S.Request_RefundBtn>;
  }

  return Component["key"];
}
