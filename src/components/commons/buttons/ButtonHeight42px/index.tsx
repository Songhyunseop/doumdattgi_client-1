import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title: string;
  type?: "button";
  onClick?: () => void;
}

export const Button = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

export default function ButtonHeight42px(props: IButtonProps): JSX.Element {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      style={{
        background: props.isActive ? "#111" : "#ccc",
        color: props.isActive ? "#fff" : "#444"
      }}
      disabled={!props.isActive}
    >
      {props.title}
    </Button>
  );
}
