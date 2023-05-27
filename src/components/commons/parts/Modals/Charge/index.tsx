import { useEffect } from "react";
import { Modal } from "antd";
import ChargeDropBox from "../../Dropboxs/Point/index";
import { IProps } from "./index.types";
import UseModal from "../../../hooks/custom/useModal/index";
import { useRecoilState } from "recoil";
import { ModalCancelState } from "../../../../../commons/stores";

export default function ChargeModal(props: IProps): JSX.Element {
  const { openModal, setOpenModal, handleCancel } = UseModal();
  const [isCance, setIsCancel] = useRecoilState(ModalCancelState);

  useEffect(() => {
    if (props.openModal) {
      setIsCancel(true);
    }
  }, [props.openModal]);

  return (
    <Modal
      className="ChargeModal"
      open={isCance}
      footer={null}
      onCancel={handleCancel}
    >
      <ChargeDropBox />
    </Modal>
  );
}
