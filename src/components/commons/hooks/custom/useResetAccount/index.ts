import { useRouter } from "next/router";
import { useMutationResetPassword } from "../../mutations/useMutationResetPassword";
import { useRecoilState } from "recoil";
import { userPhoneState } from "../../../../../commons/stores";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPasswordEdit, schemaPasswordReset } from "../../../../../commons/libraries/schema";
import { useMutationResetPasswordSettingPage } from "../../mutations/useMutationResetPasswordSettingPage";

interface IDate {
  password: string;
}

export const useResetAccount = (isEditPassword) => {
  const [resetPassword] = useMutationResetPassword();
  const [resetPasswordSettingPage] = useMutationResetPasswordSettingPage()
  const router = useRouter()

  const [userPhone, setUserPhone] = useRecoilState(userPhoneState);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(isEditPassword ? schemaPasswordEdit : schemaPasswordReset)
  });

  const onClickResetPassword = async data => {
    try {
      await resetPassword({
        variables: {
          user_phone: userPhone,
          new_password: data.password
        }
      });
      console.log(data);
      alert("정상적으로 비밀번호가 변경되었습니다.");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  }

const onClickEditPassword = async data => {
  try {
    await resetPasswordSettingPage({
      variables: {
        new_password: data.password
      }
    })
    alert("비밀번호가 정상적으로 변경되었습니다.")
    router.push("/mypage/settings")
  } catch (error) {
    if (error instanceof Error) alert(error.message)
  }
}
  
  return {
    onClickResetPassword,
    onClickEditPassword,
    register,
    handleSubmit,
    formState
  };
};

