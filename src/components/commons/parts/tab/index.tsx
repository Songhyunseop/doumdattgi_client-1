import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

export default function Tab(): JSX.Element {
  const onChange = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`
    }
  ];
  return <Tabs items={items} onChange={onChange} />;
}
