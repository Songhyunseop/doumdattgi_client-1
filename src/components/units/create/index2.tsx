import dynamic from "next/dynamic";
import * as S from "./index.styles";
import ImageUpload from "../../commons/parts/imageUpload";
import Map from "../../commons/parts/map";
import InputHeight38px from "../../commons/inputs/InputHeight38px";
import ButtonHeight40px from "../../commons/buttons/ButtonHeight40px";
import Category2 from "../../commons/parts/categorySelect/index2";
import WorkDay from "../../commons/parts/workDay";
import TimePick from "../../commons/parts/Timepicker/index2";
import { useCreateProduct2 } from "../../commons/hooks/custom/useCreateProduct/index2";
import AddressModal from "../../commons/hooks/custom/useAddress";
import { useState } from "react";
import { IProps } from "./index.types";
import ButtonHeight50px from "../../commons/buttons/ButtonHeight50px";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useRouter } from "next/router";

const Editor = dynamic(async () => await import("../../commons/parts/editor"), {
  ssr: false
});

export default function CreateProduct(props: IProps) {
  const {
    data,

    isToggle,
    clickEmployee,
    clickEmployer,

    editorRef,
    register,
    handleSubmit,
    formState,
    onChangeContents,
    onClickCreateProduct,
    onClickEditProduct,

    categoryArray,
    setCategoryArray,
    categorySelect,
    setCategorySelect,
    optionSelect,
    setOptionSelect,

    workDay,
    setWorkDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,

    fileList,
    setFileList,

    isModalOpen,
    setIsModalOpen,
    onClickAddressSearch,
    onCompleteAddressSearch,

    address,
    zipcode
  } = useCreateProduct2(props.isEdit);

  const {onClickMoveToPage} = useMoveToPage()
  const router = useRouter()

  return (
    <>
      <AddressModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onCompleteAddressSearch={onCompleteAddressSearch}
      />
      <S.Wrapper>
        <S.Container>
          <form
            onSubmit={
              props.isEdit
                ? handleSubmit(onClickEditProduct)
                : handleSubmit(onClickCreateProduct)
            }
          >
            <S.Head>
              <S.Title>
                {props.isEdit ? "게시글 수정하기" : "게시글 작성하기"}
              </S.Title>
              <S.SelectToggle>
                <S.Employee onClick={clickEmployee} isToggle={isToggle}>
                  일을 구해요
                </S.Employee>
                <S.DivideLine />
                <S.Employer onClick={clickEmployer} isToggle={isToggle}>
                  사람을 구해요
                </S.Employer>
              </S.SelectToggle>
            </S.Head>
            <S.Body>
              <S.Body_Top>
                <S.InputBox>
                  <S.Theme>
                    게시글 제목
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.Input
                    {...register("product_title")}
                    defaultValue={data?.fetchDetailProduct?.product_title}
                  />
                  <S.Error>{formState.errors.product_title?.message}</S.Error>
                </S.InputBox>
                <S.InputBox>
                  <S.Theme>
                    카테고리 및 태그
                    <S.Required>*</S.Required>
                  </S.Theme>
                  {props.isEdit && data && (
                    <Category2
                      categoryArray={categoryArray}
                      setCategoryArray={setCategoryArray}
                      categorySelect={categorySelect}
                      setCategorySelect={setCategorySelect}
                      optionSelect={optionSelect}
                      setOptionSelect={setOptionSelect}
                      data={data?.fetchDetailProduct}
                    />
                  )}
                  {!props.isEdit && (
                    <Category2
                      categoryArray={categoryArray}
                      setCategoryArray={setCategoryArray}
                      categorySelect={categorySelect}
                      setCategorySelect={setCategorySelect}
                      optionSelect={optionSelect}
                      setOptionSelect={setOptionSelect}
                      data={data?.fetchDetailProduct}
                    />
                  )}
                </S.InputBox>
                <S.InputBox>
                  <S.Theme>
                    게시글 요약
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.Input
                    {...register("product_summary")}
                    defaultValue={data?.fetchDetailProduct?.product_summary}
                  />
                  <S.Error>{formState.errors.product_summary?.message}</S.Error>
                </S.InputBox>
              </S.Body_Top>
              <S.Body_Middle>
                <S.BoardContent>
                  <S.Theme>
                    게시글 내용
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.EditorBox>
                    {props.isEdit && data && (
                      <Editor
                        onChangeValue={onChangeContents}
                        editorRef={editorRef}
                        data={data?.fetchDetailProduct?.product_main_text}
                      />
                    )}
                    {!props.isEdit && (
                      <Editor
                        onChangeValue={onChangeContents}
                        editorRef={editorRef}
                        data={data?.fetchDetailProduct?.product_main_text}
                      />
                    )}
                    <S.Error>
                      {formState.errors.product_main_text?.message}
                    </S.Error>
                  </S.EditorBox>
                </S.BoardContent>
                <S.AvailableTime>
                  <S.Theme>
                    작업 가능 시간
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.SetTimeBox>
                    {props.isEdit && data && (
                      <>
                        <WorkDay
                          workDay={workDay}
                          setWorkDay={setWorkDay}
                          data={data?.fetchDetailProduct?.product_workDay}
                        />
                        <TimePick
                          startTime={startTime}
                          setStartTime={setStartTime}
                          endTime={endTime}
                          setEndTime={setEndTime}
                          data={data?.fetchDetailProduct}
                        />
                      </>
                    )}
                    {!props.isEdit && (
                      <>
                        <WorkDay
                          workDay={workDay}
                          setWorkDay={setWorkDay}
                          data={data?.fetchDetailProduct?.product_workDay}
                        />
                        <TimePick
                          startTime={startTime}
                          setStartTime={setStartTime}
                          endTime={endTime}
                          setEndTime={setEndTime}
                          data={data?.fetchDetailProduct}
                        />
                      </>
                    )}
                  </S.SetTimeBox>
                </S.AvailableTime>
                <S.AttachedImg>
                  <S.Theme>
                    이미지 첨부
                    <S.Required>*</S.Required>
                  </S.Theme>
                  <S.Image>
                    <ImageUpload
                      fileList={fileList}
                      setFileList={setFileList}
                      data={data?.fetchDetailProduct?.images}
                    />
                  </S.Image>
                </S.AttachedImg>
                <S.BoardAddress>
                  <S.Theme>주소 입력</S.Theme>
                  <S.AddressBox>
                    <S.MapBox>
                      <Map
                        address={
                          address !== ""
                            ? address
                            : data?.fetchDetailProduct?.product_roadAddress
                        }
                      />
                    </S.MapBox>
                    <S.SearchBox>
                      <S.ZipcodeWrap>
                        <S.ZipcodeBox>
                          <InputHeight38px
                            value={
                              zipcode !== ""
                                ? zipcode
                                : data?.fetchDetailProduct?.product_postNum ??
                                  ""
                            }
                            disabled
                          />
                        </S.ZipcodeBox>
                        <S.SearchBtn
                          onClick={onClickAddressSearch}
                          type="button"
                        >
                          우편번호 검색
                        </S.SearchBtn>
                      </S.ZipcodeWrap>
                      <S.AddressInput>
                        <InputHeight38px
                          value={
                            address !== ""
                              ? address
                              : data?.fetchDetailProduct?.product_roadAddress ??
                                ""
                          }
                          disabled
                        />
                      </S.AddressInput>
                      <S.AddressInput>
                        <S.Input
                          {...register("product_detailAddress")}
                          defaultValue={
                            data?.fetchDetailProduct?.product_detailAddress
                          }
                        />
                      </S.AddressInput>
                    </S.SearchBox>
                  </S.AddressBox>
                </S.BoardAddress>
              </S.Body_Middle>
              <S.Body_Bottom>
                <S.BtnBox>
                  <ButtonHeight50px title="취소하기" type="button" onClick={onClickMoveToPage(`/${router.query.id}`)}/>
                </S.BtnBox>
                <S.BtnBox>
                  <ButtonHeight50px
                    title="만들기"
                    isActive={formState.isValid}
                  />
                </S.BtnBox>
              </S.Body_Bottom>
            </S.Body>
          </form>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
