import React, { FunctionComponent } from "react";

import { TextEditor } from "./components";
import { CssBaseline } from "@material-ui/core";
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
