import { useRouter } from "next/router";
import * as S from "./index.styles";
import useMoveToSubCategory from "../../../hooks/custom/usemoveSubcategory";
import { v4 as uuidv4 } from "uuid";
import { CategoryObj } from "../../../../../commons/libraries/translate";

export default function SideCategory() {
  const router = useRouter();
  const { clickSubCategory } = useMoveToSubCategory();

  const BigCategory = Array.isArray(router.query.data)
    ? router.query.data[0]
    : router.query.data || "";

  const isAllList = router.asPath.includes("all");

  const IT = [
    "UX기획",
    "웹",
    "커머스",
    "모바일",
    "프로그램",
    "트렌드",
    "데이터",
    "기타"
  ];

  const DESIGN = [
    "로고・브랜딩",
    "인쇄・홍보물",
    "패키지・커버",
    "웹・모바일 디자인",
    "마케팅 디자인",
    "산업・제품 디자인",
    "캐릭터・일러스트",
    "게임",
    "캘리그라피・폰트",
    "공간・건축",
    "패션",
    "그래픽 디자인",
    "기타"
  ];

  const VIDEO = ["영상", "음향", "방송"];

  const TRANSLATE = ["번역", "통역"];

  const MARKETING = [
    "채널 활성화",
    "바이럴",
    "PR・행사",
    "업종・목적별",
    "최적화 노출",
    "해외 마케팅",
    "광고",
    "분석・전략",
    "AI 마케팅",
    "옥외・인쇄・방송 광고",
    "기타"
  ];

  const DOCUMENT = [
    "비즈니스 카피",
    "마케팅 글쓰기",
    "콘텐츠 글쓰기",
    "AI 글쓰기",
    "스토리텔링",
    "타이핑・첨삭",
    "기타"
  ];

  const filtering: { [key: string]: string[] } = {
    IT: IT,
    DESIGN: DESIGN,
    VIDEO: VIDEO,
    TRANSLATE: TRANSLATE,
    MARKETING: MARKETING,
    DOCUMENT: DOCUMENT
  };

  return (
    <S.Wrapper>
      <S.Title>{CategoryObj[BigCategory]}</S.Title>
      <S.DivideLine />
      <S.Ad />
      {!isAllList && (
        <S.SubCategoryBox>
          {filtering[BigCategory]?.map(el => (
            <S.SubCategory key={uuidv4()} onClick={clickSubCategory(el)}>
              {`${el}`}
            </S.SubCategory>
          ))}
        </S.SubCategoryBox>
      )}
    </S.Wrapper>
  );
}
