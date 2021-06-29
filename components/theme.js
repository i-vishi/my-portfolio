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
    text: {
      primary: "#ffffff",
    },
  },
  spacing: 6,
  typography: {
    htmlFontSize: 18,
    fontSize: 16,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
});

export default theme;
