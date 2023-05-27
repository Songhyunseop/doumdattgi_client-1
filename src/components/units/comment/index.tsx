import { useForm } from "react-hook-form";
import { useMutationCreateComment } from "../../commons/hooks/mutations/useMutationCreateComment";
import InputHeight50px from "../../commons/inputs/InputHeight50px";
import * as S from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateComment } from "../../../commons/libraries/schema";
import { useQueryFetchLoginUser } from "../../commons/hooks/queries/useQueryFetchLoginUser";
import {
  FETCH_COMMENTS,
  useQueryFetchComments
} from "../../commons/hooks/queries/useQueryFetchComments";
import { useRouter } from "next/router";
import { getDate } from "../../../commons/libraries/getDate";
import { fallback } from "../../../commons/libraries/fallback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface ICommentProps {
  data?: string;
  text?: string;
}

export default function Comment(props: ICommentProps): JSX.Element {
  const router = useRouter();

  const [createComment] = useMutationCreateComment();
  const { data: user } = useQueryFetchLoginUser();
  const { data: comment, refetch } = useQueryFetchComments(router.query.id);

  const { register, setValue, trigger, handleSubmit, formState, resetField } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schemaCreateComment)
    });

  const onClickCreateComment = async data => {
    const request_id = props.data?.fetchOneRequest?.request_id;

    const sender_id = user?.fetchLoginUser?.user_id;

    try {
      const result = await createComment({
        variables: {
          createCommentInput: {
            request_id,
            sender_id,
            text: data.text
          }
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              request_id: router.query.id
            }
          }
        ]
      });
      resetField("text");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickRelode = () => {
    refetch({
      request_id: router.query.id
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Relode onClick={onClickRelode}>
          <S.RotateIcon icon={faRotateRight} />
        </S.Relode>
        <S.WrapperBody>
          {comment?.fetchComments?.map(el => (
            <S.SendingBox
              me={user?.fetchLoginUser?.user_id}
              comment={el?.sender_id}
            >
              {user?.fetchLoginUser?.user_id !== el?.sender_id && (
                <S.SenderIcon
                  src={
                    el?.user?.user_profileImage !== ""
                      ? el?.user?.user_profileImage
                      : fallback
                  }
                />
              )}
              <div>
                {user?.fetchLoginUser?.user_id !== el?.sender_id && (
                  <S.Sender>{el?.user?.user_nickname}</S.Sender>
                )}
                <S.ChatBox>{el.comment_text}</S.ChatBox>
              </div>
              <S.Date>{getDate(el.comment_createdAt)}</S.Date>
            </S.SendingBox>
          ))}
        </S.WrapperBody>
        <form onSubmit={handleSubmit(onClickCreateComment)}>
          <S.WrapperFooter>
            <InputHeight50px
              placeholder="메세지를 입력하세요."
              register={register("text")}
            />
            <S.SendingBtn>전송</S.SendingBtn>
          </S.WrapperFooter>
        </form>
      </S.Wrapper>
    </>
  );
}
