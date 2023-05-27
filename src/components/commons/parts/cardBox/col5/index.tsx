import { Avatar, Image } from "antd";
import * as S from "./style";
import { fallback } from "../../../../../commons/libraries/fallback";
import { getDate } from "../../../../../commons/libraries/getDate";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";
import Tag from "../../../tag";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { CategoryObj } from "../../../../../commons/libraries/translate";

export default function CardBox(props) {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Wrapper onClick={onClickMoveToPage(`/${props.data?.product_product_id}`)}>
      <Image
        src={``}
        width={"100%"}
        height={200}
        fallback={fallback}
        preview={false}
      />
      <S.Container>
        <S.CategoryBox>
          <S.Category>
            {CategoryObj[props.data?.product_product_category]}
          </S.Category>
          <S.Icon icon={faBookmark} className="bookmark" />
        </S.CategoryBox>
        <S.TitleBox>
          <S.Title>{props.data?.product_product_title}</S.Title>
        </S.TitleBox>
        <S.InfoBox>
          <Tag data={props.data?.product_product_workDay} />
          <S.UserBox>
            <Avatar size={24} src={`${props.data?.i_image_url}`} />
            <S.UserName>{props.data?.u_user_nickname}</S.UserName>
          </S.UserBox>
        </S.InfoBox>
      </S.Container>
    </S.Wrapper>
  );
}
