import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import * as S from "../progress.styles";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useQueryFetchSellerWork } from "../../../../commons/hooks/queries/useQueryFetchSellerWork";

export default function ProgressSellerWaiting(): JSX.Element {
  const { data } = useQueryFetchSellerWork();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchSellerWork.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "WAITING" ? (
            <S.List>
              <S.ListLeft>
                <S.ListStatusWaiting>대기중</S.ListStatusWaiting>
                <S.ListTitle>{el.request_title}</S.ListTitle>
              </S.ListLeft>
              <S.ListRight>
                <S.ListDate>{getDateTime(el.request_createAt)}</S.ListDate>
                <S.UserBox>
                  <S.UserIcon
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/noimage.png";
                    }}
                    src={el.buyer_profileImage}
                  />
                  <S.UserName>{el.buyer_nickname}</S.UserName>
                </S.UserBox>
              </S.ListRight>
            </S.List>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
}
