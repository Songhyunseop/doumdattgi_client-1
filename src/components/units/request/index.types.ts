import { Editor } from "@toast-ui/react-editor";

export interface EditorInstance {
  getInstance: () => Editor;
}

export interface EditorInstance2 extends Editor {
  getHTML: () => string;
}
