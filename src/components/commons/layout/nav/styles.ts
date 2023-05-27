import styled from "@emotion/styled";

export const Wrapper = styled.nav`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;
export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavListBox = styled.ul`
  display: flex;
  padding: 20px 0;
`;
export const NavList = styled.li`
  margin-left: 50px;
  &:first-of-type {
    margin-left: 0;
  }
`;
export const NavItem = styled.span`
  display: block;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
`;
export const NavListRight = styled.span``;
