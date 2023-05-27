import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import * as S from "./index.styles";

export default function WorkTimeDropBox(props) {
  const handleMenuClick: MenuProps["onClick"] = e => {
    // console.log("click", e.key);
    props.setSelectedWorkDay(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "주중",
      key: "주중"
    },
    {
      label: "주말",
      key: "주말"
    },
    {
      label: "협의가능",
      key: "협의가능"
    }
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick
  };

  return (
    <Space wrap>
      <Dropdown trigger={["click"]} menu={menuProps}>
        <S.StyledButton className="setTimeBtn">
          <Space>
            {props.selectedWorkDay !== "" ? (
              <S.Selected>{props.selectedWorkDay}</S.Selected>
            ) : (
              <S.Default>선택</S.Default>
            )}
            <DownOutlined />
          </Space>
        </S.StyledButton>

        {/* </Button> */}
      </Dropdown>
    </Space>
  );
}
