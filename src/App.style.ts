/*
 * Created by Jimmy Lan
 * Creation Date: 2021-05-09
 * Description:
 *     Global style configuration.
 *   See https://material-ui.com/api/css-baseline/.
 *   See also https://stackoverflow.com/questions/57058299/what-does-the-cssbaseline-class-do.
 */

import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  createStyles({
    "@global": {
      body: {
        backgroundColor: "#f3f3f3",
      },
    },
  })
);
