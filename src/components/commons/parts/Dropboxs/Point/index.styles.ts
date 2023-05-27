import styled from "@emotion/styled";

// amount 타입 정의
interface IProps {
  amount: string;
  isSelect: string;
}

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 76px;
  padding-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 43px;
`;

export const OptionBox = styled.div`
  width: 100%;
  padding: 0px 125px;
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Option = styled.label`
  width: 80px;
  display: flex;
  justify-content: flex-start;
`;

export const PayMethod = styled.span`
  margin-left: 8px;
`;

export const ChargeBtn = styled.button`
  width: 384px;
  height: 51px;
  font-weight: 500;
  font-size: 16px;
  background-color: ${(props: IProps) =>
    Number(props.amount) !== 0 && props.isSelect !== "" ? "black" : "#bdbdbd"};
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`;
