import * as S from "./index.styles";
import { useQueryfetchSearchProduct } from "../../commons/hooks/queries/useQueryFetchSearchProduct";
import InfiniteScroll from "react-infinite-scroller";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { CategoryObj, Obj } from "../../../commons/libraries/translate";
import { useRouter } from "next/router";
import CardBox from "../../commons/parts/cardBox/col5";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SearchedPage() {
  const router = useRouter();

  const keyWord = Array.isArray(router.query.word)
    ? router.query.word[0]
    : router.query.word || "";

  const { data, fetchMore } = useQueryfetchSearchProduct(keyWord);
  const { onClickMoveToPage } = useMoveToPage();

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSearchProduct?.length ?? 10) / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchSearchProduct === undefined) {
          return {
            fetchSearchProduct: [...prev.fetchSearchProduct]
          };
        }

        return {
          fetchSearchProduct: [
            ...prev.fetchSearchProduct,
            ...fetchMoreResult.fetchSearchProduct
          ]
        };
      }
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperRight>
          <S.CategoryTag>{`${keyWord} 검색결과`}</S.CategoryTag>
          <S.RightHeader>
            <div>
              {data?.fetchSearchProduct?.length}
              개의 서비스
            </div>
            <Select
              defaultValue="최신순"
              style={{ width: 100 }}
              bordered={false}
              suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
              options={[
                { value: "최신순", label: "최신순" },
                { value: "인기순", label: "인기순" },
                { value: "과거순", label: "과거순" }
              ]}
            />
          </S.RightHeader>
          <InfiniteScroll loadMore={onLoadMore} pageStart={0} hasMore={true}>
            <S.ContentsBox>
              {data?.fetchSearchProduct.map(el => (
                <CardBox data={el} />
              ))}
            </S.ContentsBox>
          </InfiniteScroll>
        </S.WrapperRight>
      </S.Container>
    </S.Wrapper>
  );
}
