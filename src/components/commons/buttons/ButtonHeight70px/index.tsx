import styled from "@emotion/styled";

interface IButtonProps {
  isActive?: boolean;
  title?: string;
  onClick?: () => void;
}

export const Button = styled.button`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #888888;
  color: #888888;
  background-color: white;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600px;
  :hover {
    border: none;
    background-color: black;
    color: white;
  }
`;

export default function ButtonHeight70px(props: IButtonProps): JSX.Element {
  return (
    <Button
      onClick={props.onClick}
      style={{
        background: props.isActive ? "black" : "white",
        color: props.isActive ? "#fff" : "#444",
        border: props.isActive ? "none" : "1px solid #888888"
      }}
    >
      {props.title}
    </Button>
  );
}
