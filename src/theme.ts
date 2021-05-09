/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-09
 * Description:
 *     This file exports a theme object to be used by the entire app.
 *   See https://material-ui.com/customization/theming/.
 */

import { createMuiTheme } from "@material-ui/core";

// TypeScript module declarations
declare module "@material-ui/core/styles/createMuiTheme" {
  // Type used for referencing theme
  interface Theme {}

  // Type used for configuring theme
  interface ThemeOptions {}
}

export const theme = createMuiTheme({
  palette: {},
});
