import { useState } from "react";
import { useRecoilState } from "recoil";
import { ModalCancelState } from "../../../../../commons/stores";

// handleCancel 인자로 받아오는 값의 타입 지정
type SetModalType = (value: boolean) => void;

// return 타입 지정
interface IUseModalProps {
  clickModal: () => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  handleCancel: () => void;
  handleOk: () => void;
}
//

export default function UseModal(): IUseModalProps {
  const [openModal, setOpenModal] = useState(false);
  const [isCancel, setIsCancel] = useRecoilState(ModalCancelState);

  // 포인트 충전 기능
  const clickModal = (): void => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setIsCancel(false);
    setOpenModal(false);
  };

  return {
    clickModal,
    openModal,
    setOpenModal,
    handleCancel,
    handleOk
  };
}
