import * as S from "./styles";
import ProductList from "../../../commons/parts/list/list";
import SideCategory from "../../../commons/parts/list/category";

export default function SubCategorys() {
  return (
    <S.Wrapper>
      <S.Container>
        {/* <SideCategory /> */}
        <ProductList isAll={true}/>
      </S.Container>
    </S.Wrapper>
  );
}