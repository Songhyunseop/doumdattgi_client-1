import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPickUserProductArgs
} from "../../../../commons/types/generated/types";

export const FETCH_PAYMENTS = gql`
  query fetchPayments(
    $payment_status: String
    $page: Float!
    $pageSize: Float!
  ) {
    fetchPayments(
      payment_status: $payment_status
      page: $page
      pageSize: $pageSize
    ) {
      payment_id
      payment_impUid
      payment_amount
      payment_status
      payment_type
      payment_createdAt
    }
  }
`;

export const useQueryFetchUserPaymentInfo = (state: string) => {
  const Query = useQuery<
    Pick<IQuery, "fetchPayments">,
    IQueryFetchPickUserProductArgs
  >(FETCH_PAYMENTS, {
    variables: { page: 1, pageSize: 10, payment_status: state }
  });

  return Query;
};

export const useQueryFetchUserCanceldPaymentInfo = () => {
  const Query = useQuery(FETCH_PAYMENTS, {
    variables: { page: 1, pageSize: 50, payment_status: "CANCEL" }
  });

  return Query;
};
