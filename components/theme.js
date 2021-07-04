import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,245,255,0.5)',
          outline: '1px solid slategrey'
        }
      }
    }
  }
});

export default theme;
