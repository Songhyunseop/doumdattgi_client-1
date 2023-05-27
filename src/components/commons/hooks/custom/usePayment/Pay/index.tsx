import { ChangeEvent, useState } from "react";
import {
  ModalCancelState,
  refetchAtom
} from "../../../../../../commons/stores";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMutationcreatePayment } from "../../../mutations/useMutationCreatePointTransaction";

interface IResponseProps {
  success: boolean;
  imp_uid: string;
  paid_amount: number;
}

declare const window: typeof globalThis & {
  IMP: any;
};

interface IUsePayment {
  clickIniCis: (
    amount: number,
    isSelect: string,
    userinfo: IUserInfo
  ) => () => void;
  isSelect: string;
  SelectOption: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IUserInfo {
  email: string | undefined;
  name: string | undefined;
  phone: string | undefined;
}

export default function UsePayment(): IUsePayment {
  const [isSelect, setIsSelect] = useState("");
  const [, setIsCancel] = useRecoilState(ModalCancelState);
  const refetches = useRecoilValue(refetchAtom);

  const [createPayment] = useMutationcreatePayment();

  const SelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setIsSelect(e.target.value);
  };

  const clickIniCis =
    (amount: number, isSelect: string, userInfo: IUserInfo) =>
    async (): Promise<void> => {
      const IMP = window.IMP; // can be omitted
      IMP.init("imp70556024"); // Example: imp00000000

      try {
        const rsp: IResponseProps = await new Promise(resolve => {
          IMP.request_pay(
            {
              // param
              pg: String(isSelect),
              pay_method: "card",
              // merchant_uid: "ORD20180131-0000011", // Error if order number overlaps (randomly generated if commented)
              name: "포인트 충전",
              amount,
              buyer_email: userInfo.email,
              buyer_name: userInfo.name,
              buyer_tel: userInfo.phone,
              buyer_addr: "Sinsa-dong, Gangnam-gu, Seoul",
              buyer_postcode: "01181"
            },
            (rsp: IResponseProps) => {
              resolve(rsp);
            }
          );
        });

        if (rsp.success) {
          // 결제 성공
          console.log(rsp);

          const result = await createPayment({
            variables: {
              payment_impUid: rsp.imp_uid,
              payment_amount: amount,
              payment_type: String(isSelect)
            }
          });
          alert("결제 성공!");
          setIsCancel(false);
          refetches.payment();
          refetches.login();
        } else {
          // 결제 실패
          alert("결제 실패");
          setIsCancel(false);
        }
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return { SelectOption, isSelect, clickIniCis };
}
