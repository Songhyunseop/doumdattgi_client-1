import * as S from "./index.styles";
import { CategoryObj, Obj } from "../../../../../commons/libraries/translate";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Tag from "../../../tag";
import { Avatar } from "antd";

interface IProps {
  el: {
    product_product_category: string;
    product_product_title: string;
    product_product_workDay: string;
    u_user_profileImage?: string | null;
    u_user_nickname: string;
  };
}

export default function BarBox(props: IProps) {
  return (
    <S.Wrapper>
      <S.CategoryBox>
        <S.Category>
          {CategoryObj[props.el?.product_product_category]}
        </S.Category>
        <S.Icon icon={faBookmark} />
      </S.CategoryBox>

      <S.TitleBox>
        <S.Title>{props.el?.product_product_title}</S.Title>
      </S.TitleBox>
      <S.InfoBox>
        <Tag data={props.el?.product_product_workDay} />
        <S.UserInfo>
          <Avatar src={props.el?.u_user_profileImage} />
          <S.NickName>{props.el?.u_user_nickname}</S.NickName>
        </S.UserInfo>
      </S.InfoBox>
    </S.Wrapper>
  );
}
