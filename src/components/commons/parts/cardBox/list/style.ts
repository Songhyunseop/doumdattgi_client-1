import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: calc((100% - 30px) / 4);
  background-color: #fff;
  border: 1px solid #dddfe3;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
`;
export const Container = styled.div`
  padding: 16px;
`;
export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Category = styled.span`
  display: block;
  font-size: 14px;
`;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #bec3c7;
`;
export const TitleBox = styled.div`
    height: 50px;
  margin-top: 8px;

`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;
export const InfoBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const UserBox = styled.div`
    display: flex;
    align-items: center;
`;
export const UserName = styled.span`
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin-left: 6px;
`;
