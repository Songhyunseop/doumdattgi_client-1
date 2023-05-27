import type { DrawerProps } from "antd";
import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import Comment from "../../../units/comment";
import { Arrow } from "./index.styles";
import * as S from "./index.styles";

export default function CommentDrawer(props) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  //   const onChange = (e: RadioChangeEvent) => {
  //     setPlacement(e.target.value);
  //   };

  const CommentBtnStyle = {
    width: "60px",
    height: "150px",
    backgroundColor: "#efefef",
    borderRadius: "0px 25px 25px 0px",
    border: "1px solid #bdbdbd"
    // display: "flex",
    // textAlign: "left",
  };

  return (
    <>
      <Space
        style={{
          position: "fixed"
        }}
      >
        <S.ButtonWrap onClick={showDrawer}>
          <span>MESSAGE</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </S.ButtonWrap>
      </Space>
      <Drawer
        placement={placement}
        contentWrapperStyle={{
          width: "400px"
        }}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Comment data={props.data} />
      </Drawer>
    </>
  );
}
