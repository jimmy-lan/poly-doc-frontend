/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-08
 */

import React, {
  FunctionComponent,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
import Quill, { Sources, TextChangeHandler } from "quill";
import "quill/dist/quill.snow.css";
import { io, Socket } from "socket.io-client";

import "./TextEditor.style.css";
import { backendConfig } from "../../config";

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
  const [socket, setSocket] = useState<Socket>();
  const [quill, setQuill] = useState<Quill>();

  // Set up socket on render
  useEffect(() => {
    const s = io(backendConfig.domain);
    setSocket(s);

    return () => {
      s.disconnect();
    };
  });

  // Emit event on changes
  useEffect(() => {
    if (!socket || !quill) {
      return;
    }

    const handler: TextChangeHandler = (delta, oldDelta, source: Sources) => {
      if (source !== "user") {
        return;
      }
      socket.emit("client-changes");
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  });

  // A ref to wrapper of this editor
  const wrapperRef = useCallback((wrapper: HTMLDivElement | null) => {
    if (!wrapper) {
      return;
    }
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: toolbarOptions },
    });
    setQuill(q);
  }, []);

  return <div className="container" ref={wrapperRef} {...props} />;
};

const defaultProps: Partial<OwnProps> = {
  toolbarOptions: TOOLBAR_OPTIONS,
};

TextEditor.defaultProps = defaultProps;

export { TextEditor };
