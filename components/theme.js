import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0f3647",
    },
    secondary: {
      main: "#651fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#185873",
    },
  },
  spacing: 6,
});

export default theme;
