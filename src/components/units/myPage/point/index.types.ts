import { IPayment } from "../../../../commons/types/generated/types";

export interface IValueArgs {
  payment_impUid: string;
  payment_type: string;
  payment_createdAt: string;
  payment_amount: number;
}

export interface IPropsfetchUserPaymentInfo {
  clickRefund: (value: IValueArgs) => () => void;
  dataArr: IPayment[];
  el: {
    payment_impUid: string;
    payment_type: string;
    payment_createdAt: string;
    payment_amount: number;
  };
}
