import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002438",
    },
    secondary: {
      main: "#00efff",
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
    fontFamily: "Oxygen, Roboto, Helvetica, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,245,255,0.5)",
          outline: "1px solid slategrey",
        },
      },
    },
  },
});

export default theme;
