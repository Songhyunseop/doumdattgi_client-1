import { useQueryFetchNewbieProduct } from "../../commons/hooks/queries/useQueryFetchNewbieProduct";
import { useQueryFetchProducts } from "../../commons/hooks/queries/useQueryFetchProducts";
import { useQueryFetchRandomProduct } from "../../commons/hooks/queries/useQueryFetchRandomProduct";
import Slider from "../../commons/parts/main/carousel";
import BarBox from "../../commons/parts/main/previewContents";
import * as S from "./main.styles";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryFetchSellProduct } from "../../commons/hooks/queries/useQueryFetchSellProduct";
import CardBox4 from "../../commons/parts/cardBox/col4";
import CardBox3 from "../../commons/parts/cardBox/col3";

export default function MainPresenter() {
  const { data } = useQueryFetchRandomProduct();
  const { data: Products } = useQueryFetchProducts();
  const { data: Newbie } = useQueryFetchNewbieProduct();
  const { data: Sellers } = useQueryFetchSellProduct();

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Wrapper>
      <S.Banner>
        <Slider />
      </S.Banner>
      <S.Container>
        <S.Section>
          <S.Title>✨ 숨은 보석같은 게시글들</S.Title>
          <S.CardboxWrap>
            {data?.fetchRandomProduct.map(el => (
              <CardBox4 data={el} />
            ))}
          </S.CardboxWrap>
        </S.Section>
        <S.AdBar></S.AdBar>
        <S.Section>
          <S.Title>✨최신 게시글</S.Title>
          <S.CardboxWrap>
            {Products?.fetchAllProducts.map(el => (
              <CardBox4 data={el} />
            ))}
          </S.CardboxWrap>
        </S.Section>
        <S.Section>
          <S.Title>지금 구하고 있는 구인글이에요</S.Title>
          <S.CardboxWrap>
            {Sellers?.fetchSellProduct.map(el => (
              <BarBox el={el} key={el.product_product_id} />
            ))}
          </S.CardboxWrap>
        </S.Section>
        <S.AdBar></S.AdBar>
        <S.Section>
          <S.Title>🌱 신규 주니어의 첫 게시글</S.Title>
          <S.CardboxWrap>
            {Newbie?.fetchNewbieProduct.map(el => (
              <CardBox3 data={el} />
            ))}
          </S.CardboxWrap>
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
}
