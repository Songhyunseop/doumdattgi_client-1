import styled from "@emotion/styled";

interface IButtonProps {
  isActive: boolean;
  title: string;
}

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: black;
  margin: 20px 0px 20px 0px;
  cursor: pointer;
  font-size: 16px;
`;

export default function ButtonHeight60px(props: IButtonProps): JSX.Element {
  return (
    <Button
      style={{
        backgroundColor: props.isActive ? "steelblue" : ""
      }}
    >
      {props.title}
    </Button>
  );
}
