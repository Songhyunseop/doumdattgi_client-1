import { Select } from "antd";
import { useEffect } from "react";

const option = [
  { value: "WEEKDAY", label: "주중" },
  { value: "WEEKEND", label: "주말" },
  { value: "NEGOTIATION", label: "협의가능" }
];

interface IWorkDay {
  data?: string;
  setWorkDay: any;
}

export default function WorkDay(props: IWorkDay) {
  useEffect(() => {
    props.setWorkDay(props.data);
  }, [props.data]);

  const handleChange = (value: string) => {
    props.setWorkDay(value);
  };

  return (
    <Select
      defaultValue={props.data ? `${props.data}` : "선택"}
      style={{ width: 120 }}
      onChange={handleChange}
      options={option}
      size="large"
    />
  );
}
