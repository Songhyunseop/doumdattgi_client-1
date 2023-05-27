import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USER_SLOT = gql`
  query {
    fetchUserSlot {
      slot_first
      slot_second
      slot_third
    }
  }
`;

export const useQueryFetchUserSlot = () => {
  const Query = useQuery<Pick<IQuery, "fetchUserSlot">>(FETCH_USER_SLOT);

  return Query;
};
