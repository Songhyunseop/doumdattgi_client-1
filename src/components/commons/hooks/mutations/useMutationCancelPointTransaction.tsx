import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCancelPaymentArgs
} from "../../../../commons/types/generated/types";

export const CANCEL_PAYMENT = gql`
  mutation cancelPayment($payment_impUid: String!, $payment_type: String!) {
    cancelPayment(
      payment_impUid: $payment_impUid
      payment_type: $payment_type
    ) {
      payment_id
      payment_amount
      payment_status
    }
  }
`;

export const useMutationCancelPayment = () => {
  const Mutation = useMutation<
    Pick<IMutation, "cancelPayment">,
    IMutationCancelPaymentArgs
  >(CANCEL_PAYMENT);

  return Mutation;
};
