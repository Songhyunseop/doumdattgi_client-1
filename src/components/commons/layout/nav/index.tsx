import Link from "next/link";
import * as S from "./styles";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const clickCategory = (data: string) => () => {
    console.log(data);
    console.log("hehe");

    router.push({
      pathname: "/categoryList",
      query: { data }
    });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.NavListBox>
          <S.NavList onClick={clickCategory("IT")}>
            <S.NavItem>IT・프로그래밍</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("DESIGN")}>
            <S.NavItem>디자인</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("TRANSLATE")}>
            <S.NavItem>번역・통역</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("VIDEO")}>
            <S.NavItem>영상・방송</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("MARKETING")}>
            <S.NavItem>마케팅</S.NavItem>
          </S.NavList>
          <S.NavList onClick={clickCategory("DOCUMENT")}>
            <S.NavItem>문서・레포트</S.NavItem>
          </S.NavList>
        </S.NavListBox>
        <Link href={"/구해요"}>
          <S.NavItem>#구해요</S.NavItem>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
