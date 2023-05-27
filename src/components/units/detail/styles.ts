import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 1140px;
  margin: 40px auto;

  .bottom {
    margin-top: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const SliderBox = styled.div`
  width: 640px;
  padding-bottom: ${props => (props.ImgArr?.length >= 2 ? "0" : "40px") };
`;
export const DetailWrap = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DetailBox = styled.div``;
export const Category = styled.span`
  display: block;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
`;
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Title = styled.h2`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 370px;
`;

export const IconBox = styled.div``;
export const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #bec3c7;
  margin-left: 30px;
  cursor: pointer;
`;
export const TagWrap = styled.div`
  margin-top: 40px;
`;
export const Tag = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: #929aa0;
  font-weight: 600;
  padding: 4px 10px;
  background: #f6f7f9;
  border: 1px solid #929aa0;
  border-radius: 12px;
  margin-left: 8px;
  &:first-of-type {
    margin-left: 0;
  }
`;
export const Remarks = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 30px;
  word-break: break-word;
`;
export const Button = styled.div`
  position: relative;
  padding-bottom: ${props => (props.ImgArr?.length >= 2 ? "90px" : "40px") };
`;
export const SlotBox = styled.div`
  position: absolute;
  width: 168px;
  left: 50%;
  transform: translateX(-50%);
`;
export const SlotText = styled.span`
  display: block;
  width: 100%;
  position: absolute;
  z-index: 999;
  left: 25px;
  top: 10px;
  font-weight: 600;
`;
export const SlotBg = styled.div`
  width: 168px;
  height: 42px;
  background-color: #fff;
  border-radius: 21px;
  position: relative;
  box-shadow: 0px 4px 5px rgba(204, 204, 204, 0.6);
  &::after {
    border-bottom: 8px solid #fff;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 0px solid transparent;
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
`;
export const DetailContentsWrap = styled.div`
  width: 640px;
`;
export const DetailTitle = styled.h3`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
`;
export const DetailContents = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  word-break: break-word;
  margin-top: 30px;
  img {
    max-width: 100%;
  }
`;
export const DetailUserWrap = styled.div`
  width: 460px;
  border: 1px solid #e0e1ea;
  height: 100%;
`;
export const UserName = styled.span`
  display: block;
  font-weight: 700;
  padding: 26px 30px;
  background-color: #f0f1f6;
  font-size: 18px;
  line-height: 18px;
`;
export const UserAvatar = styled.div``;
export const UserContainer = styled.div`
  padding: 30px;
`;
export const UserTimeWrap = styled.div``;
export const TimeTitle = styled.div`
  display: flex;
`;
export const TimeIcon = styled(FontAwesomeIcon)`
  color: #111;
`;
export const TimeText = styled.span`
  display: block;
  margin-left: 6px;
`;
export const UserTimeBox = styled.div`
  display: flex;
  margin-top: 14px;
  padding-left: 26px;
`;
export const UserTimeCategory = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  display: block;
`;
export const UserTime = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  margin-left: 14px;
`;
export const UserWorkRateWrap = styled.div`
  background-color: #f9f9fc;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 18px;
  border-radius: 6px;
  margin-top: 30px;
`;
export const UserWorkRateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserWorkRate = styled.span`
  display: block;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  padding-bottom: 12px;
`;
export const VerticalLine = styled.div`
  width: 1px;
  height: 50px;
  background: #e0e1ea;
`;
export const UserWorkText = styled.span`
  display: block;
  font-size: 14px;
  line-height: 14px;
  color: #9495a1;
`;
export const UserLevelBox = styled.div``;
export const UserLevelIcon = styled.img`
  width: 25px;
  height: 32px;
  padding-bottom: 4px;
`;
export const UserLevelText = styled.div``;
export const PortfolioTitleBox = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const PortfolioIcon = styled(FontAwesomeIcon)`
  color: #111;
`;
export const PortfolioText = styled.span`
  display: block;
  margin-left: 6px;
`;
export const PortfolioLink = styled.span`
  display: inline-block;
  border-bottom: 1px solid #111;
  margin: 20px 0 0 26px;
`;
export const UserIntroduceTitle = styled.span`
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  display: block;
  margin-top: 40px;
`;
export const UserIntroduce = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-top: 14px;
  color: #333;
`;
export const Subtitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  margin-top: 50px;
`;
export const CardBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Preview = styled.div`
  width: 285px;
  height: 330px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #bec3c7;
  overflow: hidden;
  cursor: pointer;
`;

export const PreviewImg = styled.img`
  width: 285px;
  height: 200px;
`;

export const EnableBtn = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: none;
  color: #929aa0;
  background-color: #f6f7f9;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EnableSlotText = styled.span`
  display: block;
  width: 110%;
  position: absolute;
  z-index: 999;
  left: 35px;
  top: 15px;
  font-weight: 600;
`;
