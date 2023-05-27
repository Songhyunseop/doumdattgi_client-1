import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

export const Text = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #dbdbdb;
  padding-left: 10px;
  resize: none;
`;

export default function TextArea (props: IInputProps): JSX.Element {
  return (
    <TextArea
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
