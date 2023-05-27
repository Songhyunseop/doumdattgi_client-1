import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import * as S from "../progress.styles";
import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useQueryFetchSellerWork } from "../../../../commons/hooks/queries/useQueryFetchSellerWork";

export default function ProgressSellerAll(): JSX.Element {
  const { data } = useQueryFetchSellerWork();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchSellerWork.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "REFUSE" ? (
            <S.ListRefuse>
              <S.ListLeft>
                <S.ListStatusRefuse>거절됨</S.ListStatusRefuse>
                <S.ListTitleRefuse>{el.request_title}</S.ListTitleRefuse>
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
            </S.ListRefuse>
          ) : (
            <S.List>
              <S.ListLeft>
                {el.request_isAccept === "WAITING" ? (
                  <S.ListStatusWaiting>대기중</S.ListStatusWaiting>
                ) : (
                  <></>
                )}
                {el.request_isAccept === "ACCEPT" ? (
                  <S.ListStatusAccept>진행중</S.ListStatusAccept>
                ) : (
                  <></>
                )}
                {el.request_isAccept === "FINISH" ? (
                  <S.ListStatusFinish>종료</S.ListStatusFinish>
                ) : (
                  <></>
                )}
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
          )}
        </div>
      ))}
    </>
  );
}
