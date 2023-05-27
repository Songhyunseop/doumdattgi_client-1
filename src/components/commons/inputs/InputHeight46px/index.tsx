import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
`;

export default function InputHeight46px(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
