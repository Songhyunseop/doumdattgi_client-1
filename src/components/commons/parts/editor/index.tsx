import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import fontSize from "tui-editor-plugin-font-size";
import "tui-editor-plugin-font-size/dist/tui-editor-plugin-font-size.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useMutationUploadFile } from "../../hooks/mutations/useMutationUploadFile";
import { useEffect } from "react";
import { useState } from "react";

function ToastEditor(props: any) {
  const [uploadFile] = useMutationUploadFile();

  // useEffect(() => {
  //   // 1. DB에서 가져온 HTML이라고 가정
  //   const htmlString = props.data

  //   // 2. Editor DOM 내용에 HTML 주입
  //   props.editorRef.current?.getInstance().setHTML(htmlString);
  // }, [props.data]);

  return (
    <>
      <Editor
        placeholder="상품을 설명해주세요."
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={props.onChangeValue}
        ref={props.editorRef}
        plugins={[colorSyntax, fontSize]}
        autofocus={false}
        language="ko-KR"
        initialValue={props.data}
        hideModeSwitch={true}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            const result = await uploadFile({ variables: { files: blob } });
            callback(`${result?.data?.uploadFile}`);
          }
        }}
      ></Editor>
    </>
  );
}
export default ToastEditor;
