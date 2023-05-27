import * as S from "./style";

export default function LayoutFooter() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>도움닫기</S.Title>
        <S.Copy>© 2023 Project Doumdattgi Corp. Copy</S.Copy>
        <S.Text>서울특별시 구로구 디지털로 300 지밸리플라자 13층</S.Text>
        <S.Text className="margin">이용약관 | 개인정보처리방침</S.Text>
      </S.Container>
    </S.Wrapper>
  );
}
