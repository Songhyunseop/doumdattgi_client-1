import { useRecoilState } from "recoil";
import { ModalCancelState, refetchAtom } from "../../../../commons/stores";
import UseModal from "../../../../components/commons/hooks/custom/useModal/index";
import ChargeModal from "../../../commons/parts/Modals/Charge/index";
import * as S from "./index.styles";
import { MouseEvent, useEffect, useState } from "react";
import PayList from "../../../commons/parts/Point/paylist";
import { useQueryFetchUserPaymentInfo } from "../../../commons/hooks/queries/useQueryFetchUserPaymentInfo";
import RefundPoint from "../../../commons/parts/Modals/Refund";
import { IValueArgs } from "./index.types";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function PaymentPresenter(): JSX.Element {
  const router = useRouter();

  const [isCancel, setIsCancel] = useRecoilState(ModalCancelState);
  const [refetches, setRefetch] = useRecoilState(refetchAtom);

  const [isRefund, setIsRefund] = useState(false);
  const [refundInfo, setRefundInfo] = useState(["", ""]);
  const [status, setStatus] = useState([
    { title: "전체", key: 0, isSelected: false },
    { title: "충전내역", key: 1, isSelected: false },
    { title: "입금내역", key: 2, isSelected: false },
    { title: "의뢰요청", key: 3, isSelected: false },
    { title: "의뢰취소", key: 4, isSelected: false },
    { title: "환불내역", key: 5, isSelected: false }
  ]);
  const [payState, setPayState] = useState<string>("");

  const { clickModal, openModal, setOpenModal } = UseModal();
  const { data: UserData, refetch: loginRefetch } = useQueryFetchLoginUser();
  const {
    data,
    fetchMore,
    refetch: payRefetch
  } = useQueryFetchUserPaymentInfo(payState);

  const dataArr = data?.fetchPayments ?? [];

  useEffect(() => {
    if (isCancel) {
      setOpenModal(false);
    }
  }, [isCancel]);

  //  결제내역 refetch
  useEffect(() => {
    setRefetch(prev => ({ ...prev, login: loginRefetch, payment: payRefetch }));
  }, [loginRefetch, payRefetch]);

  // 환불요청
  const clickRefund = (value: IValueArgs) => () => {
    const Info = [...refundInfo];

    Info[0] = value.payment_impUid;
    Info[1] = value.payment_type;

    setIsRefund(true);
    setRefundInfo(Info);
  };

  const TrnaslatePointSelect: { [key: string]: string } = {
    전체: "",
    충전내역: "PAYMENT",
    입금내역: "SELL",
    의뢰요청: "REQUEST",
    의뢰취소: "REFUND",
    환불내역: "CANCEL"
  };

  // 포인트 내역 네비게이션 바 선택 체크
  const selectState = async (e: MouseEvent<HTMLDivElement>) => {
    const selectedId = e.currentTarget.id;

    setStatus(prev =>
      prev.map(el => ({ ...el, isSelected: el.title === selectedId }))
    );
    setPayState(TrnaslatePointSelect[selectedId]);

    const status = TrnaslatePointSelect[selectedId];
    payRefetch({ page: 1, pageSize: 10, payment_status: status });

    router.push({
      pathname: `/mypage/point/`,
      query: { status }
    });
  };

  // 결제 내역 무한스크롤
  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchPayments?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchPayments === undefined) {
          return {
            fetchPayments: [...prev.fetchPayments]
          };
        }

        return {
          fetchPayments: [
            ...prev.fetchPayments,
            ...fetchMoreResult.fetchPayments
          ]
        };
      }
    });
  };

  return (
    <>
      <RefundPoint
        refundInfo={refundInfo}
        setIsRefund={setIsRefund}
        isRefund={isRefund}
      />
      <ChargeModal openModal={openModal} setOpenModal={setOpenModal} />
      <S.Wrapper>
        <S.Container>
          <S.Title>포인트</S.Title>
          <S.SelectBar>
            {status.map(el => (
              <S.selectOption
                isSelect={el.isSelected}
                id={el.title}
                key={el.key}
                onClick={selectState}
              >
                {el.title}
              </S.selectOption>
            ))}
          </S.SelectBar>
          <S.HoldingBox>
            <S.HoldTitle>보유포인트</S.HoldTitle>
            <S.CurrentHold>
              <S.HoldPoint>{`${
                UserData?.fetchLoginUser.user_point ?? "0"
              } P`}</S.HoldPoint>
              <S.ChargeBtn onClick={clickModal}>포인트 충전</S.ChargeBtn>
            </S.CurrentHold>
          </S.HoldingBox>
          <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
            {data?.fetchPayments.map(el => (
              <PayList
                dataArr={dataArr}
                clickRefund={clickRefund}
                el={el}
                key={el.payment_id}
              />
            )) ?? []}
          </InfiniteScroll>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
