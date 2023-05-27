import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;
export const Container = styled.div`
  width: 520px;
  border: none;
  padding: 80px;
  border-radius: 20px;
  background-color: #fff;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
  border: 1px solid #efefef;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const SignupWrap = styled.div`
  margin-top: 60px;
  .first {
    margin-top: 0;
  }
`;

export const SignupBox = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
`;

export const AuthBtn = styled.button`
  width: 100%;
  height: 42px;
  font-size: 14px;
  font-weight: 600;
  color: #bec3c7;
  background-color: #f6f7f9;
  border: 1px solid #dddfe3;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`;

export const SubTitleDetail = styled.div`
  color: #818a91;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 60px;
`;

export const Login = styled.a`
  text-decoration: none;
  border-bottom: 1px solid #111;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const Error = styled.span`
  position: absolute;
  display: block;
  font-size: 14px;
  color: #E31C1C;
  top: calc(100% + 8px);
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ButtonBox = styled.div`
  width: 120px;
  margin-left: 8px;
`;

export const Timer = styled.span`
  display: block;
  color: #cf1322;
  margin-left: 8px;
`;

export const SubmitBtn = styled.div`
  margin-top: 60px;
`
