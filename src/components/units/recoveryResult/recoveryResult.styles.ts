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
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
  border: 1px solid #efefef;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 50px;
  font-weight: 600;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  display: block;
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

export const Email = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-right: 5px;
  display: block;
`;

export const AuthBody = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  .padding {
    margin-bottom: 3px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
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