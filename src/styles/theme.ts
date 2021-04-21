import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  // overrides: {
  //   MuiPaper: {
  //     root: {
  //       borderColor: "lime",
  //     },
  //   },
  // },
  palette: {
    primary: purple,
    secondary: green,
  },
  props: {
    MuiPaper: {
      elevation: 3,
    },
  },
});

export { theme as default };
