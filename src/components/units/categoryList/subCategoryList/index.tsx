import SideCategory from "../../../commons/parts/list/category";
import SubProductList from "../../../commons/parts/list/subCategoryList";
import * as S from "./styles";

export default function SubCategoryListUnit() {
  return (
    <S.Wrapper>
      <S.Container>
        <SideCategory />
        <SubProductList/>
      </S.Container>
    </S.Wrapper>
  );
}
