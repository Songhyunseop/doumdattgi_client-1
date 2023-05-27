import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined
}

export const Button = styled.button`
  width: 100%;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

export default function ButtonHeight40px(props: IButtonProps): JSX.Element {
  return (
    <Button
      onClick={props.onClick}
      style={{
        background: props.isActive ? "#111" : "white",
        color: props.isActive ? "#fff" : "#444",
        border: props.isActive ? "none" : "1px solid #888888"
      }}
      type={props.type}
      // disabled={props.isActive}
    >
      {props.title}
    </Button>
  );
}
