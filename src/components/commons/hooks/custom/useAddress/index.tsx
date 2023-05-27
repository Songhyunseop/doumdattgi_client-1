import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

interface Address {
  isModalOpen: JSX.Element;
  setIsModalOpen: any;
  address: string;
  zonecode: string;
}

export default function AddressModal(props: any) {
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    props.setIsModalOpen(false);
  };

  // const onCompleteAddressSearch = (data: Address): void => {
  //   // props.setAddress(data.address);
  //   // props.setZipcode(data.zonecode);
  //   props.setIsModalOpen(prev => !prev);
  // };

  return (
    <>
      {props.isModalOpen && (
        <Modal open={props.isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
    </>
  );
}
