import * as S from "./styles";
import Link from "next/link";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/useQueryFetchLoginUser";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage/index";
import { useQueryFetchUserSlot } from "../../../commons/hooks/queries/useQueryfetchUserSlot";
import { useUser } from "../../../commons/hooks/custom/useUser/index";
import ProfileMyProduct from "./myProduct";
import ProfileMyFavorite from "./myFavorite";
import { useState } from "react";
import { fallback } from "../../../../commons/libraries/fallback";

export default function Profile(): JSX.Element {
  const { data: login } = useQueryFetchLoginUser();
  const { data: slot } = useQueryFetchUserSlot();
  const { imageSrc, userTitle } = useUser();
  const { onClickMoveToPage } = useMoveToPage();

  const [isList, setIsList] = useState(true);

  const onClickMoveToMyProduct = (): void => {
    setIsList(true);
  };

  const onClickMoveToMyFavorite = (): void => {
    setIsList(false);
  };

  // 슬롯
  const isAble = slot?.fetchUserSlot;

  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperLeft>
          <S.UserBox>
            <S.UserIcon
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = fallback;
              }}
              src={login?.fetchLoginUser?.user_profileImage}
            />
            <S.UserName>{login?.fetchLoginUser?.user_name}</S.UserName>
            <S.UserIntroduce>
              {login?.fetchLoginUser?.user_introduce}
            </S.UserIntroduce>
            <S.ProfileEdit onClick={onClickMoveToPage("/mypage/settings")}>
              프로필 수정하기
            </S.ProfileEdit>
          </S.UserBox>
          <S.DivideLine />
          <S.ContentWrap className="first">
            <S.SubTitle>포트폴리오</S.SubTitle>
            <S.PortfolioLink>
              {login?.fetchLoginUser?.user_portfolio !== ""
                ? login?.fetchLoginUser?.user_portfolio
                : "나를 소개하는 포트폴리오 주소를 올려보세요."}
            </S.PortfolioLink>
          </S.ContentWrap>
          <S.ContentWrap>
            <S.SubTitle>슬롯</S.SubTitle>
            <S.SlotBox>
              {isAble?.slot_first === false ? (
                <S.Slot>가능</S.Slot>
              ) : (
                <S.SlotDisable>닫힘</S.SlotDisable>
              )}
              {isAble?.slot_second === false ? (
                <S.Slot>가능</S.Slot>
              ) : (
                <S.SlotDisable>닫힘</S.SlotDisable>
              )}
              {isAble?.slot_third === false ? (
                <S.Slot>가능</S.Slot>
              ) : (
                <S.SlotDisable>닫힘</S.SlotDisable>
              )}
            </S.SlotBox>
          </S.ContentWrap>
          <S.ContentWrap>
            <S.SubTitle>통계</S.SubTitle>
            <S.StatisticsWrap>
              <S.StatisticsBox>
                <S.StatisticsNum>
                  {login?.fetchLoginUser?.user_workRate ?? "0"}건
                </S.StatisticsNum>
                <S.StatisticsTitle>총 작업 수</S.StatisticsTitle>
              </S.StatisticsBox>
              <S.StatisticsBox>
                <S.TierIcon
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                  src={imageSrc}
                />
                <S.StatisticsTitle>{userTitle}</S.StatisticsTitle>
              </S.StatisticsBox>
            </S.StatisticsWrap>
          </S.ContentWrap>
        </S.WrapperLeft>
        <S.WrapperRight>
          <S.RightTitleBox>
            <div>
              <S.ListBtn onClick={onClickMoveToMyProduct}>
                게시글 목록
              </S.ListBtn>
              <S.ListBtn onClick={onClickMoveToMyFavorite}>
                찜한 글 목록
              </S.ListBtn>
            </div>
            <Link href={"/create"}>
              <S.CreateLink>
                <S.CreateIcon src="/pencil.png" />새 게시글 작성하기
              </S.CreateLink>
            </Link>
          </S.RightTitleBox>
          {isList ? <ProfileMyProduct /> : <ProfileMyFavorite />}
        </S.WrapperRight>
      </S.Container>
    </S.Wrapper>
  );
}
