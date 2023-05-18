import { Space, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { RangeValue } from "../../../../../node_modules/rc-picker/lib/interface";
import { useState } from "react";

export default function WorkingTimePicker() {
  const [time, setTime] = useState("");
  dayjs.extend(customParseFormat);

  // 작업 시작시간, 종료 시간 연산
  const checkValue = (
    e: RangeValue<dayjs.Dayjs>,
    timeString: [string, string]
  ) => {
    if (!e || !timeString) return;

    const startTime = Number(timeString[0].slice(0, 2));
    const FinishTime = Number(timeString[1].slice(0, 2));

    const result = String(Math.abs(startTime - FinishTime));

    setTime(String(result));
  };

  console.log(time);

  return (
    <Space direction="vertical">
      <TimePicker.RangePicker
        // format="HH:mm"
        // defaultValue={[dayjs("13", "HH"), dayjs("12", "HH")]}
        showHour={true}
        showMinute={false}
        showSecond={false}
        onChange={checkValue}
        style={{ width: "230px", height: "42px" }}
      />
    </Space>
  );
}