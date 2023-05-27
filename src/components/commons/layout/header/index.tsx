import * as S from "./style";
import { Avatar, Dropdown, Space, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useUser } from "../../hooks/custom/useUser";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useQueryFetchLoginUser } from "../../hooks/queries/useQueryFetchLoginUser";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import { request, gql } from "graphql-request";
import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { IData } from "./index.types";

export default function Header(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<IData>();

  const { onClickLogout } = useUser();
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQueryFetchLoginUser();

  const items: MenuProps["items"] = [
    { label: <Link href={"/mypage/profile"}>내 프로필</Link> },
    { label: <Link href={"/mypage/point"}>포인트</Link> },
    {
      type: "divider"
    },
    { label: <Link href={"/mypage/progressBuyer"}>신청자</Link> },
    { label: <Link href={"/mypage/progressSeller"}>작업자</Link> },
    { label: <Link href={"/mypage/settings"}>설정</Link> },
    {
      type: "divider"
    },
    { label: <span onClick={onClickLogout}>로그아웃</span> }
  ] as ItemType[];

  const clickRandomBoard = async () => {
    const query = gql`
      query {
        fetchRandomProduct {
          product_product_id
          product_product_title
          product_product_category
          u_user_nickname
          i_image_url
        }
      }
    `;

    try {
      const data = await request<Pick<IQuery, "fetchRandomProduct">>(
        "https://doumdattgi-server.com/graphql",
        query
      );

      const num = Math.floor(Math.random() * data?.fetchRandomProduct.length);
      const MovePage = data?.fetchRandomProduct[num].product_product_id;

      router.push(`/${MovePage}`);
    } catch (error) {
      console.error(error);
    }
  };

  const getDebounce = debounce(e => {
    router.push({
      pathname: `/categoryList/all/${e}`
    });
    setValue("keyword", "");
  }, 1000);

  const searchKeyword = (data: IData) => {
    console.log(data);
    getDebounce(data.keyword);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Logo onClick={onClickMoveToPage("/")}>
            <S.LogoIcon src="/logo.svg"/>
            <S.LogoTitle>도움닫기</S.LogoTitle>
          </S.Logo>
          <S.HeaderBox>
            <form onSubmit={handleSubmit(searchKeyword)}>
              <S.SearchBox>
                <S.SearchIcon />
                <S.SearchInput {...register("keyword")} />
                <S.SearchBtn type="submit"></S.SearchBtn>
              </S.SearchBox>
            </form>
            <S.ShuffleBtn onClick={clickRandomBoard}>
              <S.ShuffleIcon src="/shuffle.png" />
            </S.ShuffleBtn>
            {!data && (
              <S.LoginBox>
                <S.LoginBtn onClick={onClickMoveToPage("/login")}>
                  로그인
                </S.LoginBtn>
                <Link href={"/signup"}>
                  <S.SignUpBtn>회원가입</S.SignUpBtn>
                </Link>
              </S.LoginBox>
            )}
            {data && (
              <S.UserBox>
                <S.ShuffleBtn>
                  <S.ShuffleIcon src="/chat.png" />
                </S.ShuffleBtn>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                  overlayClassName={"header"}
                >
                  <Space>
                    <Avatar
                      size={44}
                      style={{ cursor: "pointer", marginLeft: "14px" }}
                      icon={<UserOutlined />}
                      src={data?.fetchLoginUser?.user_profileImage}
                    />
                  </Space>
                </Dropdown>
              </S.UserBox>
            )}
          </S.HeaderBox>
        </S.Container>
      </S.Wrapper>
      <S.DivideLine />
    </>
  );
}

