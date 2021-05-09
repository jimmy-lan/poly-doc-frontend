import React, { FunctionComponent } from "react";
import { CssBaseline } from "@material-ui/core";

import { TextEditor } from "./components";
import { useStyles } from "./App.style";

const App: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <CssBaseline classes={classes}>
      <div className="App">
        <TextEditor />
      </div>
    </CssBaseline>
  );
};

export default App;
