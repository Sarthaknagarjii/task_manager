import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f0d7f5", // Deep teal
    },
    secondary: {
      main: "#ff6f61", // Bright coral
    },
    background: {
      default: "#f9f9f9", // Soft off-white
      paper: "#ffffff", // White for paper
    },
    text: {
      primary: "#2c3e50", // Dark slate gray for primary text
      secondary: "#7f8c8d", // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      margin: "10px 0",
    },
    button: {
      textTransform: "none", // Prevent uppercase transformation
      fontWeight: 500,
    },
    h6: {
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "1.5px",
    },
  },
});

export default theme;
