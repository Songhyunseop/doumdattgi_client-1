import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: calc(100vh - 61px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

export const Container = styled.div`
  width: 520px;
  border: none;
  padding: 80px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #efefef;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  font-weight: 600;
`;

export const SignupBox = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const IndexTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
`;

export const Error = styled.span`
  position: absolute;
  display: block;
  font-size: 14px;
  color: #E31C1C;
  top: calc(100% + 8px);
`;

export const SubmitBtn = styled.div`
  margin-top: 30px;
`;

export const FindingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
export const FindingBox = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Finding = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
`;

export const SocialLoginWrap = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialLoginTitle = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;
export const SocialLoginBox = styled.div`
  display: flex;
  margin-top: 24px;
  .kakao {
    background: #fee102 url("/kakao.png") no-repeat center;
  }
  .google {
    background: #f7f8fd url("/google.png") no-repeat center;
  }
  .naver {
    background: #1ec101 url("/naver.png") no-repeat center;
  }
`;
export const SocialLoginButton = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 16px;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`
export const JoinText = styled.span`
  display: block;
  font-size: 14px;
`

export const JoinBtn = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #111;
  margin-left: 14px;
  cursor: pointer;
`;
