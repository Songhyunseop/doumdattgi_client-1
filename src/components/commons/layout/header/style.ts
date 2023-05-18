import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

export const Wrapper = styled.header`
    width: 100%;
    background-color: #fff;
    padding: 7px 0;
`
export const DivideLine = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e5e5e5;
`
export const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`
export const Logo = styled.h1`
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
`
export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
`
export const SearchBox = styled.div`
    width: 260px;
    position: relative;
`
export const SearchIcon = styled(SearchOutlined)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
`
export const SearchInput = styled.input`
    width: 100%;
    border: none;
    background-color: #eee;
    font-size: 16px;
    line-height: 16px;
    padding: 12px;
    padding-left: 40px;
    border-radius: 6px;
`
export const ShuffleBtn = styled.div`
    width: 36px;
    height: 36px;
    margin-left: 14px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s linear;
    &:hover {
        background-color: #f3f3f3;
    }
`
export const ShuffleIcon = styled.img`
        display: block;
`

export const LoginBox = styled.div`
    display: flex;
`
export const UserBox = styled.div`
    display: flex;
    align-items: center;
`
export const MessageBtn = styled.img`
    display: block;
    margin: 0 14px;
    cursor: pointer;

`
export const LoginBtn = styled.button`
    font-weight: 600;
    border: none;
    padding: 14px;
    background: none;
    color: #111;
    display: block;
    cursor: pointer;
`
export const SignUpBtn = styled.button`
    font-weight: 600;
    border: none;
    padding: 14px;
    border-radius: 23px;
    background-color: #111;
    color: #fff;
    display: block;
    cursor: pointer;
`