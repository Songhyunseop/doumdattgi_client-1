import { getDateTime } from "../../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchBuyerRequest } from "../../../../commons/hooks/queries/useQueryFetchBuyerRequest";
import * as S from "../progress.styles";

export default function ProgressBuyerProgressing(): JSX.Element {
  const { data } = useQueryFetchBuyerRequest();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {data?.fetchBuyerRequest.map(el => (
        <div
          key={el.request_id}
          onClick={onClickMoveToPage(`/${el.request_id}/workAgreement`)}
        >
          {el.request_isAccept === "ACCEPT" ? (
            <S.List>
              <S.ListLeft>
                <S.ListStatusAccept>진행중</S.ListStatusAccept>
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
                    src={el.seller_profileImage}
                  />
                  <S.UserName>{el.seller_nickname}</S.UserName>
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
