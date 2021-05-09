/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-08
 */

import React, { FunctionComponent, HTMLAttributes, useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

import "./TextEditor.style.css";

interface OwnProps extends HTMLAttributes<HTMLDivElement> {
  /** See https://quilljs.com/docs/modules/toolbar/. */
  toolbarOptions?: unknown;
}

type Props = OwnProps;

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor: FunctionComponent<Props> = (props) => {
  const { toolbarOptions } = props;

  // A ref to wrapper of this editor
  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (!wrapper) {
      return;
    }
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: toolbarOptions } });
  }, []);

  return <div className="container" ref={wrapperRef} {...props} />;
};

const defaultProps: Partial<OwnProps> = {
  toolbarOptions: TOOLBAR_OPTIONS,
};

TextEditor.defaultProps = defaultProps;

export { TextEditor };
