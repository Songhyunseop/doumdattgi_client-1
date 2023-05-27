import * as S from "./styles";
import Link from "next/link";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage/index";
import { useQueryFetchPickUserProduct } from "../../../../commons/hooks/queries/useQueryFetchPickUserProduct";

export default function ProfileMyFavorite(): JSX.Element {
  const { data } = useQueryFetchPickUserProduct();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.WrapperRight>
        {data?.fetchPickUserProduct === undefined ? (
          <S.None>아직 찜한 글이 없습니당</S.None>
        ) : (
          <>
            {data?.fetchPickUserProduct.map(el => (
              <S.RightListBox
                onClick={onClickMoveToPage(`/${el.p_product_id}`)}
              >
                <S.ListImage
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/noimage.png";
                  }}
                  src={el.i_image_url}
                />
                <S.RightDetailBox>
                  <S.ListCategory>
                    {el.p_product_category === "IT" ? "IT・프로그래밍" : ""}
                    {el.p_product_category === "DESIGN" ? "디자인" : ""}
                    {el.p_product_category === "TRANSLATE" ? "번역・통역" : ""}
                    {el.p_product_category === "VIDEO" ? "영상・방송" : ""}
                    {el.p_product_category === "MARKETING" ? "마케팅" : ""}
                    {el.p_product_category === "DOCUMENT" ? "문서・레포트" : ""}
                  </S.ListCategory>
                  <S.ListTitle>{el.p_product_title}</S.ListTitle>
                  <S.ListDetail>
                    #
                    {el.p_product_workDay === "NEGOTIATION"
                      ? "협의가능"
                      : el.p_product_workDay === "WEEKEND"
                      ? "주말"
                      : "주중"}
                  </S.ListDetail>
                  <S.DivideLine />
                  <S.Remarks>{el.p_product_summary}</S.Remarks>
                </S.RightDetailBox>
              </S.RightListBox>
            ))}
          </>
        )}
      </S.WrapperRight>
    </S.Wrapper>
  );
}
