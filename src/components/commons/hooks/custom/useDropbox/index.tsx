import { MenuProps } from "antd";
import { MouseEvent, useState } from "react";

interface IUseDropBox {
  amount: number;
  items: MenuProps["items"];
}

export default function UseDropBox(): IUseDropBox {
  const [amount, setAmount] = useState(0);

  const clickThis = (e: MouseEvent<HTMLAnchorElement>): void => {
    const target = e.target as HTMLAnchorElement;
    console.log(target);
    setAmount(Number(target.target));
  };

  // 드롭박스 메뉴 목록

  const MenuArr = ["1000", "5000", "10000", "30000"];

  const items: MenuProps["items"] = MenuArr.map((el, idx) => {
    return {
      label: (
        <a
          onClick={clickThis}
          target={el}
          rel="noopener noreferrer"
        >{`${el}원`}</a>
      ),
      key: String(idx)
    };
  });

  return { amount, items };
}
