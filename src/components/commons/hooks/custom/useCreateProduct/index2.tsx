import { SetStateAction, useEffect, useRef, useState } from "react";
import {
  EditorInstance,
  EditorInstance2,
  IFormData
} from "../../../../units/create/index.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaCreate,
  schemaUpdate
} from "../../../../../commons/libraries/schema";
import { useRouter } from "next/router";
import { UploadFile } from "antd";
import {
  FETCH_DETAIL_PRODUCT,
  useQueryFetchDetailProduct
} from "../../queries/useQueryFetchDetailProduct";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { useMutationUpdateProduct } from "../../mutations/useMutationUpdateProduct";

export const useCreateProduct2 = (isEdit: Boolean) => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct();
  const [updateProduct] = useMutationUpdateProduct();
  const [uploadFile] = useMutationUploadFile();

  const { data } = useQueryFetchDetailProduct(String(router.query.id));

  // 카테고리 state
  const [categoryArray, setCategoryArray] = useState([]);
  const [categorySelect, setCategorySelect] = useState("");
  const [optionSelect, setOptionSelect] = useState("");

  // 작업가능시간 state
  const [workDay, setWorkDay] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  // 이미지 state
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  // 주소 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  // 구해요 / 팔아요 boolean
  const [isToggle, setIsToggle] = useState(true);

  const clickEmployee = () => {
    setIsToggle(true);
    setValue("product_sellOrBuy", true);
  };

  const clickEmployer = () => {
    setIsToggle(false);
    setValue("product_sellOrBuy", false);
  };

  const editorRef = useRef<EditorInstance>(null);

  const { register, setValue, trigger, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(isEdit ? schemaUpdate : schemaCreate)
  });

  const onChangeContents = (): void => {
    const editorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = editorInstance?.getHTML();

    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣을 수 있다.
    setValue("product_main_text", value === "<p><br></p>" ? "" : value);

    // setValue로 넣은 값을 검증 요청 하는 법.
    void trigger("product_main_text");
  };

  const onCompleteAddressSearch = (data: {
    zonecode: SetStateAction<string>;
    address: SetStateAction<string>;
  }) => {
    setValue("product_postNum", data.zonecode);
    void trigger("product_postNum");
    setValue("product_roadAddress", data.address);
    void trigger("product_roadAddress");

    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen(prev => !prev);
  };

  if (isEdit) {
    useEffect(() => {
      setValue("product_title", data?.fetchDetailProduct?.product_title);
      setValue("product_summary", data?.fetchDetailProduct?.product_summary);
      setValue(
        "product_detailAddress",
        data?.fetchDetailProduct?.product_detailAddress
      );

      setValue("product_postNum", data?.fetchDetailProduct?.product_postNum);
      void trigger("product_postNum");
      setValue(
        "product_roadAddress",
        data?.fetchDetailProduct?.product_roadAddress
      );
      void trigger("product_roadAddress");

      setValue(
        "product_main_text",
        data?.fetchDetailProduct?.product_main_text === "<p><br></p>"
          ? ""
          : data?.fetchDetailProduct?.product_main_text
      );
      void trigger("product_main_text");
    }, [data]);
  }

  const onClickAddressSearch = (): void => {
    setIsModalOpen(prev => !prev);
  };

  // =============== 게시글 작성 ===============

  const onClickCreateProduct = async (data: IFormData): Promise<void> => {
    const results = await Promise.all(
      fileList.map(el => uploadFile({ variables: { files: el.originFileObj } }))
    );

    const product_thumbnailImage = results.map(el => {
      return { thumbnailImage: el.data.uploadFile[0], isMain: false };
    });

    product_thumbnailImage[0].isMain = true;

    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: data.product_sellOrBuy ?? true,
            product_title: String(data.product_title),
            product_category: categorySelect,
            product_sub_category: optionSelect,
            product_summary: String(data.product_summary),
            product_main_text: String(data.product_main_text),
            product_workDay: workDay,
            product_workTime: endTime - startTime,
            product_startTime: startTime,
            product_endTime: endTime,
            product_thumbnailImage: product_thumbnailImage,
            product_postNum: data.product_postNum,
            product_roadAddress: data.product_roadAddress,
            product_detailAddress: data.product_detailAddress
          }
        }
      });
      console.log(result);
      alert("게시글 등록이 완료되었습니다.");
      void router.push(`/${result.data?.createProduct.product_id as string}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // =============== 게시글 수정 ===============
  const onClickEditProduct = async update => {
    let updateFile = fileList.filter(el => el.originFileObj !== undefined);
    let prevFile = fileList
      .filter(el => el.originFileObj === undefined)
      .map(el => {
        return { thumbnailImage: el.url, isMain: false };
      });

    const results = await Promise.all(
      updateFile.map(el =>
        uploadFile({ variables: { files: el.originFileObj } })
      )
    );
    const product_thumbnailImage = results.map(el => {
      return { thumbnailImage: el.data.uploadFile[0], isMain: false };
    });

    const resultUrl = [...prevFile, ...product_thumbnailImage];
    resultUrl[0].isMain = true;

    try {
      const result = await updateProduct({
        variables: {
          product_id: router.query.id,
          updateProductInput: {
            product_sellOrBuy: update.product_sellOrBuy ?? true,
            product_title: update.product_title,
            product_category: categorySelect,
            product_sub_category: optionSelect,
            product_summary: update.product_summary,
            product_main_text: update.product_main_text,
            product_workDay: workDay,
            product_workTime: endTime - startTime,
            product_startTime: startTime,
            product_endTime: endTime,
            product_thumbnailImage: resultUrl,
            product_postNum: update.product_postNum,
            product_roadAddress: update.product_roadAddress,
            product_detailAddress: update.product_detailAddress
          }
        },
        refetchQueries: [
          {
            query: FETCH_DETAIL_PRODUCT,
            variables: { product_id: String(router.query.id) }
          }
        ]
      });
      alert("게시글 수정이 완료되었습니다.");
      void router.push(`/${router.query.id as string}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
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
  };
};
