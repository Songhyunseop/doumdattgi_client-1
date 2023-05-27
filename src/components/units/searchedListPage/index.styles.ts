import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 150px 0;
`;

export const Container = styled.div`
  width: 1140px;
`

export const WrapperLeft = styled.div`
  width: 220px;
  font-size: 22px;
  margin-right: 50px;
  border: 2px solid blue;
`;

export const DivideLine = styled.div`
  border: 1px solid black;
  margin: 16px 0px;
`;

export const Ad = styled.div`
  height: 70px;
  background-color: #d9d9d9;
  border-radius: 6px;
  margin-bottom: 30px;
`;

export const LeftList = styled.div`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const WrapperRight = styled.div`
  width: 100%;
`;

export const CategoryTag = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

export const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 34px 0px 20px 0px;
`;

export const ContentsBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px 10px;
`;

export const Contents = styled.div`
  width: 221px;
  height: 300px;
  border: 1px solid #bec3c7;
  border-radius: 6px;
  margin-bottom: 50px;
  margin-left: 17px;

  cursor: pointer;
`;

export const ImageBox = styled.img`
  width: 100%;
  height: 181px;
`;

export const Body = styled.div`
  padding: 12px;
`;

export const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyCategory = styled.div`
  font-size: 12px;
  color: #333333;
`;

export const Flag = styled.img`
  width: 10px;
  height: 13px;
  cursor: pointer;
`;

export const BodyTitle = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px 0px 20px 0px;
`;

export const WorkHour = styled.div`
  font-size: 14px;
  color: #929aa0;
  text-align: center;
  background-color: #f6f7f9;
  padding: 4px 6px;
  border-radius: 12px;
  border: 1px solid #929aa0;
`;

export const UserIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin: 6px;
`;

export const UserName = styled.div`
  width: 40px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
