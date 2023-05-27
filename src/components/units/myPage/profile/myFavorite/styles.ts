import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px; */
  display: flex;
  margin: 0px auto;
  justify-content: center;
`;

export const SubTitle = styled.div`
  width: 100px;
  height: 30px;
  font-size: 14px;
  color: #929aa0;
  border: 1px solid #929aa0;
  border-radius: 6px;
  background-color: #f6f7f9;
  padding: 0px 9px;
  text-align: center;
  line-height: 30px;
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const RightTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const RightListBox = styled.div`
  width: 730px;
  display: flex;
  margin-top: 40px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 30px;
  cursor: pointer;
`;

export const RightDetailBox = styled.div`
  margin-top: 10px;
`;

export const ListImage = styled.img`
  width: 260px;
  height: 170px;
  border: 1px solid #e0e1ea;
  border-radius: 3px;
  margin-right: 24px;
`;

export const ListCategory = styled.div`
  color: #333333;
  margin-bottom: 20px;
`;

export const ListTitle = styled.div`
  width: 440px;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 14px;
`;

export const ListDetail = styled.span`
  font-size: 14px;
  color: #929aa0;
  text-align: center;
  line-height: 26px;
  border: 1px solid #929aa0;
  border-radius: 12px;
  background-color: #f6f7f9;
  padding: 6px 8px;
  margin-right: 5px;
`;

export const DivideLine = styled.div`
  border-top: 1px solid #d9d9d9;
  margin: 17px 0px;
`;

export const Remarks = styled.div`
  width: 440px;
  /* height: 36px; */
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const None = styled.div`
  width: 730px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;
