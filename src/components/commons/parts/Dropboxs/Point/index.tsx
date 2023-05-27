import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import * as S from "./index.styles";
import Head from "next/head";
import UseDropBox from "../../../hooks/custom/useDropbox/index";
import UsePayment from "../../../hooks/custom/usePayment/Pay/index";
import { useQueryFetchLoginUser } from "../../../hooks/queries/useQueryFetchLoginUser";

export default function ChargeDropBox(): JSX.Element {
  const { items, amount } = UseDropBox();
  const { clickIniCis, isSelect, SelectOption } = UsePayment();
  const { data } = useQueryFetchLoginUser();

  const userInfo = {
    email: data?.fetchLoginUser.user_email,
    name: data?.fetchLoginUser.user_name,
    phone: data?.fetchLoginUser.user_phone
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Body className="ChargeBox">
        <S.Title>충전하실 금액을 선택해주세요!</S.Title>
        <Dropdown
          overlayClassName="ChargeDrop"
          menu={{ items }}
          trigger={["click"]}
        >
          <a
            onClick={e => {
              e.preventDefault();
            }}
          >
            <Space>
              {amount !== 0 ? amount : "포인트 선택"}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <S.OptionBox>
          <S.Option>
            <input
              onChange={SelectOption}
              type="radio"
              name="payMethod"
              value="html5_inicis"
            />
            <S.PayMethod>이니시스</S.PayMethod>
          </S.Option>
          <S.Option>
            <input
              onChange={SelectOption}
              type="radio"
              name="payMethod"
              value="kakaopay"
            />
            <S.PayMethod>카카오</S.PayMethod>
          </S.Option>
        </S.OptionBox>
        <S.ChargeBtn
          disabled={amount === 0 || (!isSelect && true)}
          amount={String(amount)}
          isSelect={isSelect}
          onClick={clickIniCis(Number(amount), isSelect, { ...userInfo })}
        >
          충전하기
        </S.ChargeBtn>
      </S.Body>
    </>
  );
}
