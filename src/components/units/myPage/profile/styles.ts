import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1140px;
  display: flex;
`;

export const WrapperLeft = styled.div`
width: 390px;
padding: 90px 40px;
background-color: #fff;
box-shadow: 10px 0px 10px rgba(204, 204, 204, 0.25);
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const UserIcon = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
`;

export const UserIntroduce = styled.div`
  font-size: 16px;
  color: #888888;
  line-height: 20px;
  margin-top: 24px;
`;

export const ProfileEdit = styled.span`
display: inline-block;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
margin-top: 30px;
border-bottom: 1px solid #111;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #DDDFE3;
`
export const ContentWrap = styled.div`
padding-bottom: 60px;
&.first {
  padding-top: 30px;
}
`
export const SubTitle = styled.span`
  display: inline-block;
  padding: 6px 8px;
  background-color: #F6F7F9;
  border: 1px solid #929AA0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #929AA0;
`;
export const PortfolioLink = styled.span`
display: block;
  font-size: 18px;
  margin-top: 30px;
text-decoration: underline;
  cursor: pointer;
`;
export const SlotWrap = styled.div`
  padding-bottom: 60px;
`
export const SlotBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Slot = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #888;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  padding: 8px 30px;
  border-radius: 6px;
`;

export const SlotDisable = styled.div`

  font-size: 16px;
  font-weight: 600;
  color: #888;
  background-color: #EAEAEA;
  border: 2px solid #A9A9A9;
  padding: 8px 30px;
  border-radius: 6px;
`;

export const StatisticsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatisticsNum = styled.div`
  font-size: 20px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-weight: 600;
`;

export const TierIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export const StatisticsTitle = styled.div`
  color: #666666;
  margin-top: 33px;
  text-align: center;
`;

// 오른쪽
export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 0px 90px 0px;
  background-color: white;
  margin-left: 40px;
`;

export const RightTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CreateLink = styled.div`
  width: 180px;
  height: 42px;
  color: #ffffff;
  background-color: black;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CreateIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

export const ListBtn = styled.button`
  display: inline-block;
  padding: 6px 8px;
  background-color: #F6F7F9;
  border: 1px solid #929AA0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #929AA0;
  cursor: pointer;
  &:last-of-type {
    margin-left: 6px;
  }
`;
