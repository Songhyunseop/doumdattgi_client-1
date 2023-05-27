import * as S from "./progress.styles";
import { useEffect, useState } from "react";
import ProgressSellerDone from "./done/index";
import ProgressSellerProgressing from "./progress/index";
import ProgressSellerWaiting from "./waiting/index";
import ProgressSellerRefuse from "./refuse/index";
import ProgressSellerAll from "./all/index";

export default function ProgressSeller(): JSX.Element {
  const [isList, setIsList] = useState(0);

  const onClickList = (index: number) => {
    setIsList(index);
    localStorage.setItem("selectedTab", index.toString());
  };

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setIsList(parseInt(storedTab));
    }
  }, []);

  const renderPage = () => {
    if (isList === 0) {
      return <ProgressSellerAll />;
    } else if (isList === 1) {
      return <ProgressSellerWaiting />;
    } else if (isList === 2) {
      return <ProgressSellerProgressing />;
    } else if (isList === 3) {
      return <ProgressSellerDone />;
    } else if (isList === 4) {
      return <ProgressSellerRefuse />;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
      <S.PageTitle>작업 진행 내역</S.PageTitle>
      <S.TabBox>
        <S.PageTab onClick={() => onClickList(0)}>전체</S.PageTab>
        <S.PageTab onClick={() => onClickList(1)}>대기중</S.PageTab>
        <S.PageTab onClick={() => onClickList(2)}>진행중</S.PageTab>
        <S.PageTab onClick={() => onClickList(3)}>종료</S.PageTab>
        <S.PageTab onClick={() => onClickList(4)}>거절</S.PageTab>
      </S.TabBox>
      {renderPage()}
      </S.Container>
    </S.Wrapper>
  );
}
