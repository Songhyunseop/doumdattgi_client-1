import { Editor } from "@toast-ui/react-editor";

export interface EditorInstance {
  getInstance: () => Editor;
}

export interface EditorInstance2 extends Editor {
  getHTML: () => string;
}

export interface IFormData {
  product_title?: string;
  product_summary?: string;
  product_main_text?: string;
  product_sellOrBuy?: boolean;
  product_postNum?: string;
  product_roadAddress?: string;
  product_detailAddress?: string;
}

export interface IProps {
  isEdit: boolean;
}
