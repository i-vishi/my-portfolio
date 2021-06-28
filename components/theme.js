import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002438",
    },
    secondary: {
      main: "#00e5ff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#002438",
    },
  },
  spacing: 6,
});

export default theme;
