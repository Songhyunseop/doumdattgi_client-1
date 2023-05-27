import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../../commons/stores/index";
import { useMutationLogin } from "../../mutations/useMutationLoginUser";
import { useEffect, useState } from "react";
import { useMutationCreateUser } from "../../mutations/useMutationCreateUser";
import { useMutationLogout } from "../../mutations/useMutationLogout";
import { useQueryFetchLoginUser } from "../../queries/useQueryFetchLoginUser";
import { useMutationSendTokenEmail } from "../../mutations/useMutationSendTokenEmail";
import { useMutationCheckEmail } from "../../mutations/useMutationCheckValidTokenEMAIL";

interface IFormData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
  name: string;
}

interface IFormLoginData {
  email: string;
  password: string;
}

// interface IUseUserReturn {
//   onClickValidation: () => void;
//   onClickSignUp: (data: IFormData) => void;
//   onClickLogin: (data: IFormLoginData) => void;
//   onClickLogout: () => void;
//   onClickEditAvatar: () => void;
//   isOn: boolean;
//   sec: number;
//   isActive: boolean;
//   isAvatarEdit: boolean;
// }

export const useUser = () => {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutationLogin();
  const [createUser] = useMutationCreateUser();
  const [sendTokenEmail] = useMutationSendTokenEmail();
  const [checkEmail] = useMutationCheckEmail();
  const [logout] = useMutationLogout();
  const [isOn, setIsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [time, setTime] = useState(0);
  const { data: fetchUser } = useQueryFetchLoginUser();

  // =============== 타이머 ===============
  useEffect(() => {
    setIsActive(true);
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    if (time === 0) {
      setIsActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  // =============== 인증번호 ===============
  const onClickSendToken = async data => {
    setIsOn(true);
    setTime(180);
    try {
      const result = await sendTokenEmail({
        variables: {
          user_email: data.email
        }
      });
      console.log(result);
    } catch (error) {
      setIsOn(false);
      setTime(0);
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickValidation = async data => {
    try {
      const result = await checkEmail({
        variables: {
          user_email: data.email,
          user_token: data.token
        }
      });
      console.log(result)
      if (result) {
        setTime(0);
        setIsChecked(true);
        setIsActive(false);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 회원가입 ===============
  const onClickSignUp = async (data: IFormData) => {
    console.log(data);
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            user_email: data.email,
            user_password: data.password,
            user_nickname: data.nickname,
            user_phone: data.phone,
            user_name: data.name
          }
        }
      });
      alert(`${data.name}님 환영합니다.`);
      void router.push("/login/");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 로그인 ===============
  const onClickLogin = async (data: IFormLoginData) => {
    try {
      const result = await login({
        variables: {
          user_email: data.email,
          user_password: data.password
        }
      });
      alert("로그인에 성공하였습니다.");

      // 받아온 액세스 토큰을 글로벌 스테이트에 저장하기
      const accessToken = result.data?.login;
      setAccessToken(accessToken ?? "");
      localStorage.setItem("accessToken", accessToken ?? "");

      if (accessToken === undefined) {
        alert("다시 시도해 주세요.");
        return;
      }

      // 로그인 성공 페이지로 이동하기
      const storage = globalThis?.sessionStorage;
      const link = storage.getItem("prevPath") || "/";

      if (link === "/signup/") {
        void router.push("/");
      } else {
        void router.push(link);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 로그아웃 ===============
  const onClickLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("accessToken");
      alert("정상적으로 로그아웃 되었습니다.");
      router.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 티어 이미지===============
  const tier = () => {
    const rate = fetchUser?.fetchLoginUser?.user_workRate;
    if (rate === undefined) {
      <></>;
    } else if (rate <= 5) {
      return "/seeds.png";
    } else if (rate > 5 && rate <= 10) {
      return "/sprout.png";
    } else if (rate > 10 && rate <= 20) {
      return "/plant.png";
    } else {
      return "/tree.png";
    }
  };
  const imageSrc = tier();

  // =============== 등급명 ===============
  const tierTitle = () => {
    const rate = fetchUser?.fetchLoginUser?.user_workRate;
    if (rate === undefined) {
      <></>;
    } else if (rate <= 5) {
      return "씨앗 주니어";
    } else if (rate > 5 && rate <= 10) {
      return "새싹 울트라";
    } else if (rate > 10 && rate <= 20) {
      return "묘목 하이퍼";
    } else {
      return "나무 얼티밋";
    }
  };

  const userTitle = tierTitle();

  return {
    onClickValidation,
    onClickSignUp,
    onClickLogin,
    onClickLogout,
    onClickSendToken,
    isOn,
    time,
    isActive,
    isChecked,
    imageSrc,
    userTitle
  };
};
