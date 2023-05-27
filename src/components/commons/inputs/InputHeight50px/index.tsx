import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";
import { Maybe } from "../../../../commons/types/generated/types";

interface IInputProps {
  type?: "text" | "password" | "number";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  value?: string | number;
  onChange?: any;
  min?: any;
  defaultValue?: any
}

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
`;

export default function InputHeight50px(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      min={props.min}
      defaultValue={props.defaultValue}
      {...props.register}
    />
  );
}
