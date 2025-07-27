import { createTheme } from "@mui/material/styles";

const themeColor = "#FFA500";

export const theme = createTheme({
  palette: {
    primary: {
      main: themeColor,
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    error: {
      main: "#f44336",
    },
  },
});
