import SideCategory from "../../commons/parts/list/category";
import ProductList from "../../commons/parts/list/list";
import * as S from "./styles";

export default function ListUnit() {
  return (
    <S.Wrapper>
      <S.Container>
        <SideCategory />
        <ProductList />
      </S.Container>
    </S.Wrapper>
  );
}
