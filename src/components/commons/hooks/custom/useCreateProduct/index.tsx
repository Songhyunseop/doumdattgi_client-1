import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useMutationCreateProduct } from "../../mutations/useMutationCreateProduct";
import { useMutationUploadFile } from "../../mutations/useMutationUploadFile";
import { DateObj } from "../../../../../commons/libraries/translate";
import { UploadFile } from "antd";
import {
  EditorInstance,
  EditorInstance2
} from "../../../../units/create/index.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreate } from "../../../../../commons/libraries/schema";
import { Address } from "react-daum-postcode";
import { useQueryFetchDetailProduct } from "../../queries/useQueryFetchDetailProduct";

interface IFormData {
  title?: string;
  summary?: string;
  contents?: string;
  product_sellOrBuy?: boolean;
  product_postNum?: string;
  product_roadAddress?: string;
  product_detailAddress?: string;
}

export const useCreateProduct = () => {
  const router = useRouter();

  const [createProduct] = useMutationCreateProduct();
  const [uploadFile] = useMutationUploadFile();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedWorkDay, setSelectedWorkDay] = useState("");
  const [selectedWorkTime, setSelectedWorkTime] = useState("");
  const [isToggle, setIsToggle] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const editorRef = useRef<EditorInstance>(null);

  const { register, setValue, trigger, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaCreate)
  });

  const onChangeContents = (): void => {
    const editorInstance = editorRef.current?.getInstance() as EditorInstance2;
    const value = editorInstance?.getHTML();

    // register로 등록하지 않고 강제로 값을 넣을 수 있다.
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // setValue로 넣은 값을 검증 요청 하는 법.
    void trigger("contents");
  };

  const onClickAddressSearch = (): void => {
    setIsModalOpen(prev => !prev);
  };

  const clickEmployee = () => {
    setIsToggle(true);
    setValue("product_sellOrBuy", true);
  };

  const clickEmployer = () => {
    setIsToggle(false);
    setValue("product_sellOrBuy", false);
  };

  // =============== 글작성 ===============
  const onClickWrite = async (data: IFormData): Promise<void> => {
    const results = await Promise.all(
      fileList.map(el => uploadFile({ variables: { files: el.originFileObj } }))
    );

    const product_thumbnailImage = results.map(el => {
      return { thumbnailImage: el.data.uploadFile[0], isMain: false };
    });

    product_thumbnailImage[0].isMain = true;

    const product_startTime = selectedWorkTime[0];
    const product_endTime = selectedWorkTime[1];
    const product_workTime = Math.abs(
      Number(selectedWorkTime[0]) - Number(selectedWorkTime[1])
    );

    // 카테고리 [영어 선택 로직]
    const product_category = selectedCategory.split("&")[1];
    try {
      const result = await createProduct({
        variables: {
          createProductInput: {
            product_sellOrBuy: data.product_sellOrBuy ?? true,
            product_title: data.title,
            product_category: product_category,
            product_sub_category: selectedOptions,
            product_summary: data.summary,
            product_main_text: data.contents,
            product_workDay: DateObj[selectedWorkDay],
            product_workTime: product_workTime,
            product_startTime: Number(product_startTime),
            product_endTime: Number(product_endTime),
            product_thumbnailImage: product_thumbnailImage,
            product_postNum: "data.product_postNum",
            product_roadAddress: "data.product_roadAddress",
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

  return {
    onClickWrite,
    selectedCategory,
    setSelectedCategory,
    selectedOptions,
    setSelectedOptions,
    selectedWorkDay,
    setSelectedWorkDay,
    selectedWorkTime,
    setSelectedWorkTime,
    fileList,
    setFileList,
    register,
    handleSubmit,
    formState,
    editorRef,
    onChangeContents,
    isModalOpen,
    setIsModalOpen,
    address,
    setAddress,
    zipcode,
    setZipcode,
    clickEmployee,
    clickEmployer,
    isToggle,
    onClickAddressSearch
  };
};
