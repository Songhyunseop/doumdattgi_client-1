import {
  faEllipsisVertical,
  faSeedling,
  faBookmark as Bookmark2
} from "@fortawesome/free-solid-svg-icons";
import Slider from "../../commons/parts/slider";
import * as S from "./styles";
import { faBookmark, faClock } from "@fortawesome/free-regular-svg-icons";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryFetchDetailProduct } from "../../commons/hooks/queries/useQueryFetchDetailProduct";
import PreviewContents from "../../commons/parts/main/previewContents";
import { useQueryFetchRandomProduct } from "../../commons/hooks/queries/useQueryFetchRandomProduct";
import DOMPurify from "dompurify";
import { Obj, CategoryObj } from "../../../commons/libraries/translate";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import { useQueryFetchUserSlot } from "../../commons/hooks/queries/useQueryfetchUserSlot";
import { useUser } from "../../commons/hooks/custom/useUser/index";
import { useMutationcreatePick } from "../../commons/hooks/mutations/useMutationCreatePick";
import CardBox from "../../commons/parts/cardBox/col4";
import { useState } from "react";

export default function Detail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const id = String(router.query.id);
  const { data } = useQueryFetchDetailProduct(id);
  const { data: loginData } = useQueryFetchLoginUser();
  const { data: random } = useQueryFetchRandomProduct();
  const { data: slotData } = useQueryFetchUserSlot();
  const { imageSrc, userTitle } = useUser();
  const [picked, setPicked] = useState(false);
  const [createPick] = useMutationcreatePick();

  // fetch 한 이미지들을 담은 배열
  const ImgArr = data?.fetchDetailProduct.images.map(el => el.image_url);
  const workDay = data?.fetchDetailProduct.product_workDay;
  const Day = workDay && Obj[workDay];

  // 작성 글 ID와 로그인 유저 ID
  const writer = data?.fetchDetailProduct.user.user_id;
  const LoginUser = loginData?.fetchLoginUser.user_id;

  // 슬롯
  const slot1 = slotData?.fetchUserSlot.slot_first;
  const slot2 = slotData?.fetchUserSlot.slot_second;
  const slot3 = slotData?.fetchUserSlot.slot_third;

  const clickPick = async () => {
    const result = await createPick({
      variables: { product_id: router.query.id }
    });
    const pick = result?.data?.createPick === "찜 되었습니다!!" ? true : false;
    setPicked(pick);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.SliderBox ImgArr={ImgArr}>
          <Slider ImgArr={ImgArr} />
        </S.SliderBox>
        <S.DetailWrap>
          <S.DetailBox>
            <S.Category>
              {
                CategoryObj[
                  data?.fetchDetailProduct?.product_category ?? "DESIGN"
                ]
              }
            </S.Category>
            <S.TitleWrap>
              <S.Title>{data?.fetchDetailProduct.product_title}</S.Title>
              <S.IconBox>
                {picked ? (
                  <S.Icon onClick={clickPick} icon={Bookmark2} />
                ) : (
                  <S.Icon onClick={clickPick} icon={faBookmark} />
                )}
                <S.Icon icon={faEllipsisVertical} />
              </S.IconBox>
            </S.TitleWrap>
            <S.TagWrap>
              <S.Tag>{data?.fetchDetailProduct.product_sub_category}</S.Tag>
              <S.Tag>{Day}</S.Tag>
            </S.TagWrap>
            <S.Remarks>{data?.fetchDetailProduct.product_summary}</S.Remarks>
          </S.DetailBox>
          <S.DetailBox>
            <S.Button ImgArr={ImgArr}>
              {slot3 ? (
                <S.EnableBtn>현재 가능한 슬롯이 없습니다.</S.EnableBtn>
              ) : writer !== LoginUser || !writer || !LoginUser ? (
                <Link href={`/${router.query.id}/request`}>
                  <a>
                    <ButtonHeight50px title="신청하기" isActive={true} />
                  </a>
                </Link>
              ) : (
                <Link href={`/${router.query.id}/edit`}>
                  <a>
                    <ButtonHeight50px title="수정하기" isYou={true} />
                  </a>
                </Link>
              )}
              <S.SlotBox>
                {writer === LoginUser ? (
                  <></>
                ) : slot3 ? (
                  <></>
                ) : (
                  <>
                    <S.SlotText>
                      현재 가능 슬롯 {!slot1 ? "3" : !slot2 ? "2" : "1"}개
                    </S.SlotText>
                    <S.SlotBg />
                  </>
                )}
              </S.SlotBox>
            </S.Button>
          </S.DetailBox>
        </S.DetailWrap>
      </S.Container>
      <S.DivideLine />
      <S.Container className="bottom">
        <S.DetailContentsWrap>
          <S.DetailTitle>상세 내용</S.DetailTitle>
          {typeof window !== "undefined" && (
            <S.DetailContents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(data?.fetchDetailProduct.product_main_text) ?? ""
                )
              }}
            />
          )}
        </S.DetailContentsWrap>
        <S.DetailUserWrap>
          <S.UserName>{data?.fetchDetailProduct.user.user_nickname}</S.UserName>
          <S.UserAvatar />
          <S.UserContainer>
            <S.UserTimeWrap>
              <S.TimeTitle>
                <S.TimeIcon icon={faClock} />
                <S.TimeText>작업 가능 시간</S.TimeText>
              </S.TimeTitle>
              <S.UserTimeBox>
                <S.UserTimeCategory>{Day}</S.UserTimeCategory>
                <S.UserTime>{`${String(
                  data?.fetchDetailProduct.product_startTime
                ).padStart(2, "0")}:00 ~ ${String(
                  data?.fetchDetailProduct.product_endTime
                ).padStart(2, "0")}:00`}</S.UserTime>
              </S.UserTimeBox>
            </S.UserTimeWrap>
            <S.UserWorkRateWrap>
              <S.UserWorkRateBox>
                <S.UserWorkRate>
                  {data?.fetchDetailProduct.user.user_workRate} 건
                </S.UserWorkRate>
                <S.UserWorkText>총 작업 수</S.UserWorkText>
              </S.UserWorkRateBox>
              <S.VerticalLine />
              <S.UserWorkRateBox>
                <S.UserLevelIcon src={imageSrc} />
                <S.UserWorkText>{userTitle}</S.UserWorkText>
              </S.UserWorkRateBox>
            </S.UserWorkRateWrap>
            <S.PortfolioTitleBox>
              <S.PortfolioIcon icon={faSeedling} />
              <S.PortfolioText>포트폴리오</S.PortfolioText>
            </S.PortfolioTitleBox>
            <S.PortfolioLink>
              {data?.fetchDetailProduct.user.user_portfolio}
            </S.PortfolioLink>
            <S.UserIntroduceTitle>소개</S.UserIntroduceTitle>
            <S.UserIntroduce>
              {data?.fetchDetailProduct.user.user_introduce}
            </S.UserIntroduce>
          </S.UserContainer>
        </S.DetailUserWrap>
      </S.Container>
      <S.DivideLine className="bottom" />
      <S.Subtitle>이런 게시글은 어떠세요?</S.Subtitle>
      <S.CardBoxWrap>
        {random?.fetchRandomProduct.map(el => (
          <CardBox data={el} />
        ))}
      </S.CardBoxWrap>
    </S.Wrapper>
  );
}
