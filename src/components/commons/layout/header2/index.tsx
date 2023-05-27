import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./style";

export default function Header2() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <S.Wrapper>
        <S.Container>
        <S.Logo onClick={onClickMoveToPage("/")}>
            <S.LogoIcon src="/logo.svg"/>
            <S.LogoTitle>도움닫기</S.LogoTitle>
          </S.Logo>
        </S.Container>
      </S.Wrapper>
      <S.DivideLine />
    </>
  );
}
