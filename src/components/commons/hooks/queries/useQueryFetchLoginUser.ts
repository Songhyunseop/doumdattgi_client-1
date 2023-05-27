import { gql, useQuery } from "@apollo/client";
import type { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      user_id
      user_email
      user_password
      user_name
      user_nickname
      user_phone
      user_profileImage
      user_introduce
      user_portfolio
      user_workRate
      user_point
    }
  }
`;

export const useQueryFetchLoginUser = () => {
  const Query = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER);

  return Query;
};
