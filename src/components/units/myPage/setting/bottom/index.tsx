import {
  IpropsDetail,
  useSettings
} from "../../../../commons/hooks/custom/useSettings";
import { useQueryFetchLoginUser } from "../../../../commons/hooks/queries/useQueryFetchLoginUser";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMoveToPage";

export default function SettingsBottom() {
  const { data } = useQueryFetchLoginUser();
  const { register, handleSubmit } = useForm<IpropsDetail>();

  const { isDetailEdit, clickEditDetail, clickSaveDetail } = useSettings();

  const {onClickMoveToPage} = useMoveToPage()

  return (
    <S.Wrapper>
      <S.SettingBtm>
        <form onSubmit={handleSubmit(clickSaveDetail)}>
          <S.Container className="bottom">
            <S.SettingListWrap>
              <S.SettingListBox>
                <S.SettingListTop>
                  <S.SettingList>
                    <S.Categoty>이름</S.Categoty>
                    {isDetailEdit ? (
                      <S.EditDetail
                        {...register("user_name")}
                        defaultValue={data?.fetchLoginUser?.user_name}
                      />
                    ) : (
                      <S.Contents>{data?.fetchLoginUser?.user_name}</S.Contents>
                    )}
                  </S.SettingList>
                </S.SettingListTop>
                <S.SettingListBtm>
                  수익금을 출금하기 위해서는 실명인증이 필요합니다.
                </S.SettingListBtm>
              </S.SettingListBox>
              <S.SettingListBox>
                <S.SettingListTop>
                  <S.SettingList>
                    <S.Categoty>이메일 주소</S.Categoty>
                    {isDetailEdit ? (
                      <S.EditDetail
                        defaultValue={data?.fetchLoginUser?.user_email}
                        {...register("user_email")}
                      />
                    ) : (
                      <S.Contents>
                        {data?.fetchLoginUser?.user_email}
                      </S.Contents>
                    )}
                  </S.SettingList>
                </S.SettingListTop>
                <S.SettingListBtm>
                  회원 인증 또는 시스템에서 발송하는 이메일을 수신하는
                  주소입니다.
                </S.SettingListBtm>
              </S.SettingListBox>
              <S.SettingListBox>
                <S.SettingListTop>
                  <S.SettingList>
                    <S.Categoty>포트폴리오 주소</S.Categoty>
                    {isDetailEdit ? (
                      <S.EditDetail
                        defaultValue={data?.fetchLoginUser?.user_portfolio}
                        {...register("user_portfolio")}
                      />
                    ) : (
                      <S.Contents>
                        {data?.fetchLoginUser?.user_portfolio !== ""
                          ? data?.fetchLoginUser?.user_portfolio
                          : "포트폴리오 주소를 입력해주세요."}
                      </S.Contents>
                    )}
                  </S.SettingList>
                </S.SettingListTop>
                <S.SettingListBtm>
                  나를 소개할 수 있는 포트폴리오 주소입니다.
                </S.SettingListBtm>
              </S.SettingListBox>
              <S.SettingListBox>
                <S.SettingListTop>
                  <S.SettingList>
                    <S.Categoty>비밀번호</S.Categoty>
                    <S.Contents>
                      <S.PasswordEdit className="semiBold" onClick={onClickMoveToPage("/editPassword")}>
                        비밀번호 변경하기
                      </S.PasswordEdit>
                    </S.Contents>
                  </S.SettingList>
                </S.SettingListTop>
                <S.SettingListBtm>
                  비밀번호를 변경할 수 있습니다.
                </S.SettingListBtm>
              </S.SettingListBox>
              <S.SettingListBox>
                <S.SettingListTop>
                  <S.SettingList>
                    <S.Categoty>회원 탈퇴</S.Categoty>
                    <S.Contents>
                      <S.DeleteUser>회원 탈퇴</S.DeleteUser>
                    </S.Contents>
                  </S.SettingList>
                </S.SettingListTop>
                <S.SettingListBtm>
                  탈퇴 시 작성하신 게시글 및 댓글이 모두 삭제되며 복구되지
                  않습니다.
                </S.SettingListBtm>
              </S.SettingListBox>
            </S.SettingListWrap>
            {!isDetailEdit ? (
              <S.EditBtnWrap>
                <S.EditBtn type="button" onClick={clickEditDetail}>
                  수정하기
                </S.EditBtn>
              </S.EditBtnWrap>
            ) : (
              <S.EditBtnWrap>
                <S.CancelBtn type="button" onClick={clickEditDetail}>
                  취소하기
                </S.CancelBtn>
                <S.SaveBtn>저장하기</S.SaveBtn>
              </S.EditBtnWrap>
            )}
          </S.Container>
        </form>
      </S.SettingBtm>
    </S.Wrapper>
  );
}
