import dynamic from "next/dynamic";
import ButtonHeight70px from "../../commons/buttons/ButtonHeight70px";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRequest } from "../../commons/hooks/custom/useSendRequest/index";
import { useForm } from "react-hook-form";
import { schemaCreateRequest } from "../../../commons/libraries/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useRef } from "react";
import { EditorInstance, EditorInstance2 } from "./index.types";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";

const CountUp = dynamic(
  async () => await import("../../commons/parts/countUp/intex"),
  {
    ssr: false
  }
);

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

interface IFormData {
  product_id: string;
  request_title: string;
  request_content: string;
  request_price: number;
}

interface IEditor {
  getInstance: any;
}

export default function Request(props: any): JSX.Element {
  const router = useRouter();
  const editorRef = useRef<EditorInstance>(null);

  const storage = globalThis?.sessionStorage;
  const link = storage?.getItem("prevPath") || "/";

  const { onClickWriteRequest, isTime, setIsTime } = useRequest();

  const minimumWage = 9620;

  // =============== 의뢰서 작성 ===============
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schemaCreateRequest),
      mode: "onChange"
    });

  const onChangeContents = (data: IEditor): void => {
    const EditorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = EditorInstance?.getHTML();

    console.log(value);
    setValue("request_content", value === "<p><br></p>" ? "" : value);
    void trigger("request_content");
  };

  // =============== 시간을 입력하면 지불 금액 계산 ===============

  const onChangeTime = (event: ChangeEvent<HTMLInputElement>): void => {
    const time = Number(event?.target.value);
    setIsTime(String(time * minimumWage));
    setValue("request_price", Number(time * minimumWage));
    trigger("request_price");
  };

  return (
    <form onSubmit={handleSubmit(onClickWriteRequest)}>
      <S.Wrapper>
        <S.Container>
          <S.Title>의뢰서 작성하기</S.Title>
          <S.DivideLine />
          <S.ContentsBox>
            <S.SubTitle>
              의뢰 제안서<S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <InputHeight50px register={register("request_title")} />
            <S.SubTitle>
              의뢰 내용
              <S.SubTitle2> *</S.SubTitle2>
            </S.SubTitle>
            <Editor onChangeValue={onChangeContents} editorRef={editorRef} />
          </S.ContentsBox>
          <S.SubTitle>
            작업 요청 시간
            <S.SubTitle2> *</S.SubTitle2>
          </S.SubTitle>
          <S.PaymentBox>
            <S.PaymentIndex1>9,620원</S.PaymentIndex1>
            <S.PaymentIndex2>X</S.PaymentIndex2>
            <div>
              <S.Time onChange={onChangeTime} />
            </div>
            <S.PaymentIndex2>시간</S.PaymentIndex2>
            <S.PaymentIndex1>=</S.PaymentIndex1>
            <S.PaymentIndex2>₩</S.PaymentIndex2>
            <CountUp isTime={isTime} setIsTime={setIsTime} />
          </S.PaymentBox>
          <S.BtnBox>
            <Link href={link}>
              <ButtonHeight50px title="취소하기" />
            </Link>
            <S.Between />
            <ButtonHeight50px title="신청하기" isActive={formState.isValid} />
          </S.BtnBox>
        </S.Container>
      </S.Wrapper>
    </form>
  );
}
