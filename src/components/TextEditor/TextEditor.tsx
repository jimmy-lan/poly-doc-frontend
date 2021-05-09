/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-08
 */

import React, { FunctionComponent, useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

import "./TextEditor.style.css";

interface OwnProps {}

type Props = OwnProps;

const TextEditor: FunctionComponent<Props> = (props) => {
  // A ref to wrapper of this editor
  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (!wrapper) {
      return;
    }
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow" });
  }, []);

  return <div className="container" ref={wrapperRef} />;
};

export { TextEditor };
