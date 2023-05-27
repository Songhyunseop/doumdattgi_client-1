import styled from "@emotion/styled";

interface IPropsSelect {
  isSelect: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const Container = styled.div`
  width: 800px;
  min-height: 600px;
`;

export const Title = styled.h1`
  width: 800px;
  font-size: 36px;
  margin-bottom: 30px;
`;

export const SelectBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const selectOption = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props: IPropsSelect) => (props.isSelect ? "black" : "#AAAAAA")};
  border-bottom: 2px solid ${props => (props.isSelect ? "black" : "white")};
  cursor: pointer;
  margin-left: 10px;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const HoldingBox = styled.div`
  margin-bottom: 14px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f4;
  padding: 30px;
`;

export const HoldTitle = styled.span`
  font-size: 20px;
  display: block;
`;

export const CurrentHold = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
`;

export const HoldPoint = styled.span`
  font-family: "Arita-dotum4.0";
  font-size: 36px;
`;

export const ChargeBtn = styled.button`
  font-size: 18px;
  background-color: #111111;
  border-radius: 30px;
  padding: 15px 36px;
  border: none;
  color: white;
  cursor: pointer;
`;
