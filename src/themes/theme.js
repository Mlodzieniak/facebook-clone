import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#378b45", // green

    },
    secondary: {
      main: "#fbb042", // orange
      contrastText: "#FFFCF9",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
export default theme;
