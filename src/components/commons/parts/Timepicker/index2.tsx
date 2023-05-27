import { TimePicker } from "antd";
import { useEffect } from "react";
import dayjs from "dayjs";
import { IQuery } from "../../../../commons/types/generated/types";

interface ITimePicker {
  data: any;
  setStartTime: any;
  setEndTime: any;
}

export default function TimePick(props: ITimePicker) {
  useEffect(() => {
    props.setStartTime(props.data?.product_startTime);
    props.setEndTime(props.data?.product_endTime);
  }, [props.data]);

  const onChange = (_: any, timeString: (string | any[])[]) => {
    const startTime = Number(timeString[0].slice(0, 2));
    const endTime = Number(timeString[1].slice(0, 2));
    props.setStartTime(startTime);
    props.setEndTime(endTime);
  };
  return (
    <>
      <TimePicker.RangePicker
        onChange={onChange}
        showHour={true}
        showMinute={false}
        showSecond={false}
        size="large"
        style={{ marginLeft: "10px" }}
        popupStyle={{ width: "200px" }}
        defaultValue={
          props.data && [
            dayjs(`${props.data?.product_startTime}:00`, "HH:mm"),
            dayjs(`${props.data?.product_endTime}:00`, "HH:mm")
          ]
        }
      />
    </>
  );
}
