import * as yup from "yup";

export const schemaLogin = yup.object({
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일을 입력해주세요.")
});

export const schemaEmail = yup.object({
  email: yup.string().required("이메일을 인증해주세요.").email("올바른 이메일을 입력해주세요.")
})
export const schemaToken = yup.object({
  email: yup.string().required("이메일을 인증해주세요."),
  token: yup.string().required("인증번호를 입력해주세요.")
})

export const schemaSignUp = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password")])
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required(),
  nickname: yup.string().required("닉네임을 입력해주세요."),
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  name: yup.string().required("성함을 입력해주세요.")
});

export const schemaCreate = yup.object({
  product_title: yup.string().required("게시글 제목을 작성해주세요."),
  product_summary: yup
    .string()
    .required("게시글에 대해 간략하게 설명해주세요."),
  product_main_text: yup.string().required("게시글 내용을 작성해주세요."),
  product_postNum: yup.string(),
  product_roadAddress: yup.string(),
  product_detailAddress: yup.string()
});

export const schemaUpdate = yup.object({
  product_title: yup.string().required("게시글 제목을 작성해주세요."),
  product_summary: yup.string().required("게시글에 대해 간략하게 설명해주세요."),
  product_main_text: yup.string().required("게시글 내용을 작성해주세요."),
  product_postNum: yup.string(),
  product_roadAddress: yup.string(),
  product_detailAddress: yup.string()
});

export const schemaCreateRequest = yup.object({
  request_title: yup.string().required("의뢰 제안서 제목을 작성해주세요."),
  request_content: yup.string().required("의뢰 내용을 작성해주세요."),
  request_price: yup.string().required("작업 예상 소요 시간을 입력해주세요")
});

export const schemaPhone = yup.object({
  user_phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    )
});

export const schemaPasswordRecover = yup.object({
  user_phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(
      /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,
      "올바른 휴대폰 번호를 입력해주세요."
    ),
  user_token: yup.string().required("인증번호를 입력해주세요.")
});

export const schemaPasswordEdit = yup.object({
  prevPassword: yup.string().required("기존 비밀번호를 입력해주세요."),
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password")])
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required()
})

export const schemaPasswordReset = yup.object({
  password: yup
    .string()
    .min(8, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .max(16, "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요.")
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .oneOf([yup.ref("password")])
    .matches(
      /^[a-zA-Z0-9]{8,16}$/,
      "영문 + 숫자 조합 8 ~ 16자리의 비밀번호를 입력해주세요."
    )
    .required()
});

export const schemaCreateComment = yup.object({
  text: yup.string().required("내용을 입력해주세요.")
});
