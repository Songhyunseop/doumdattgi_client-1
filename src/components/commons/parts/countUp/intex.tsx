import CountUp from "react-countup";

export default function countUp(props: any): JSX.Element {
  return (
    <CountUp
      end={props.isTime}
      duration={0.3}
      style={{ fontSize: " 60px", marginRight: "20px" }}
    />
  );
}
