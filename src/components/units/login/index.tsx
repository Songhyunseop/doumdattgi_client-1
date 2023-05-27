import { useForm } from "react-hook-form";
import * as S from "./login.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../commons/libraries/schema";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import InputHeight46px from "../../commons/inputs/InputHeight46px";
import { useUser } from "../../commons/hooks/custom/useUser/index";
import Link from "next/link";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface IFormData {
  email: string;
  password: string;
}

export default function Login(): JSX.Element {
  const { onClickLogin } = useUser();
  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schemaLogin),
    mode: "onChange"
  });

  return (
    <S.Wrapper>
      <S.Container>
        <form onSubmit={handleSubmit(onClickLogin)}>
          <S.Title>로그인</S.Title>
          <S.SignupBox>
            <S.IndexTitle>이메일</S.IndexTitle>
            <InputHeight46px
              placeholder="이메일을 입력해주세요."
              register={register("email")}
            />
            <S.Error>{formState.errors.email?.message}</S.Error>
          </S.SignupBox>
          <S.SignupBox>
            <S.IndexTitle>비밀번호</S.IndexTitle>
            <InputHeight46px
              placeholder="비밀번호를 입력해주세요."
              register={register("password")}
              type="password"
            />
            <S.Error>{formState.errors.password?.message}</S.Error>
          </S.SignupBox>
          <S.SubmitBtn>
            <ButtonHeight50px title="로그인" isActive={formState.isValid} />
          </S.SubmitBtn>
        </form>
        <S.FindingWrap>
          <S.FindingBox onClick={onClickMoveToPage("/accountRecovery/email")}>
            <S.Finding>이메일 찾기</S.Finding>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ fontSize: "13px", marginLeft: "5px" }}
            />
          </S.FindingBox>
          <S.FindingBox
            onClick={onClickMoveToPage("/accountRecovery/password")}
          >
            <S.Finding>비밀번호 찾기</S.Finding>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ fontSize: "13px", marginLeft: "5px" }}
            />
          </S.FindingBox>
        </S.FindingWrap>
        <S.SocialLoginWrap>
          <S.SocialLoginTitle>SNS로 간편하게 시작하기</S.SocialLoginTitle>
          <S.SocialLoginBox>
            <Link href={"https://doumdattgi-server.com/login/kakao"}>
              <S.SocialLoginButton className="kakao" />
            </Link>
            <Link href={"https://doumdattgi-server.com/login/google"}>
              <S.SocialLoginButton className="google" />
            </Link>
            <Link href={"https://doumdattgi-server.com/login/naver"}>
              <S.SocialLoginButton className="naver" />
            </Link>
          </S.SocialLoginBox>
        </S.SocialLoginWrap>
        <S.Footer>
          <S.JoinText>아직 도움닫기 회원이아니세요?</S.JoinText>
          <S.JoinBtn onClick={onClickMoveToPage("/signup")}>회원가입 하기</S.JoinBtn>
        </S.Footer>
      </S.Container>
    </S.Wrapper>
  );
}
