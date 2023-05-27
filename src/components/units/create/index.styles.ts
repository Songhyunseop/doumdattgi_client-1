import styled from "@emotion/styled";

interface IIsToggle {
  isToggle: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const Container = styled.div`
  width: 1000px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SelectToggle = styled.div`
  width: 302px;
  height: 42px;
  display: flex;
  flex-direction: row;
`;

export const Employee = styled.div`
  width: 140px;
  font-size: 24px;
  text-align: center;
  line-height: 1.7;
  border-radius: 6px 0px 0px 6px;
  border: 2px solid #333333;
  border-right: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "black" : "white"};
  color: ${props => (props.isToggle ? "white" : "black")};
  cursor: pointer;
`;

export const Employer = styled.div`
  width: calc(100% - 140px);
  font-size: 24px;
  text-align: center;
  line-height: 1.7;
  border-radius: 0px 6px 6px 0px;
  border: 2px solid #333333;
  border-left: none;
  background-color: ${(props: IIsToggle) =>
    props.isToggle ? "white" : "black"};
  color: ${props => (props.isToggle ? "black" : "white")};
  cursor: pointer;
`;

export const DivideLine = styled.div`
  border-left: 2px solid #111;
`;

export const Title = styled.span`
  font-size: 36px;
`;

export const Body = styled.div``;

export const Body_Top = styled.div`
  margin-top: 30px;
  border-top: 2px solid #88b04b;
  border-bottom: 1px solid #bbbbbb;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 40px;
  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const Theme = styled.span`
  width: 280px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 24px;
`;

export const Required = styled.span`
  margin-left: 5px;
  font-size: 20px;
  color: #ffc56d;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  font-size: 14px;
`;

export const Body_Middle = styled.div`
  /* height: 1659px; */
`;

export const BoardContent = styled.div`
  height: 504px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const EditorBox = styled.div`
  margin-top: 20px;
  height: 514px;
  position: relative;
`;

export const AvailableTime = styled.div`
  height: 86px;
  margin-top: 100px;
`;

export const SetTimeBox = styled.div`
  width: 351px;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AttachedImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Image = styled.div`
  margin-top: 20px;
`;

export const MapBox = styled.div`
  width: 380px;
  height: 220px;
`;

export const BoardAddress = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`;

export const SearchBox = styled.div`
  width: calc(100% - 380px);
  padding-left: 24px;
`;

export const ZipcodeWrap = styled.div`
  display: flex;
`;
export const ZipcodeBox = styled.div`
  width: 100px;
`;

export const SearchBtn = styled.button`
  background-color: #111;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  color: #ffffff;
  padding: 0 20px;
  margin-left: 10px;
`;
export const AddressInput = styled.div`
  margin-top: 20px;
`;

export const Body_Bottom = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnBox = styled.div`
  width: 50%;
  &:last-of-type{
    padding-left: 14px;
  }
`;

export const Error = styled.span`
  position: absolute;
  top: 100%;
  left: 230px;
  display: block;
  color: red;
  font-size: 16px;
`;
