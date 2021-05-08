/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-08
 */

import React, { FunctionComponent, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.core.css";

interface OwnProps {}

type Props = OwnProps;

const TextEditor: FunctionComponent<Props> = (props) => {
  useEffect(() => {
    new Quill("#container", { theme: "core" });
  }, []);

  return <div id="container"></div>;
};

export { TextEditor };
