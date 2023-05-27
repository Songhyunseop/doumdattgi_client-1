import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  background-color: #fafafa;
`;

export const Container = styled.div`
  width: 1140px;
  padding: 60px 0;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
`;
export const Copy = styled.span`
  display: block;
  font-size: 18px;
  margin-top: 20px;
`;
export const Text = styled.span`
  display: block;
  font-size: 16px;
  margin-top: 20px;
  &:last-of-type {
    margin-top: 80px;
  }
`;
