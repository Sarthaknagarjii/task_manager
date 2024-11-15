import "../styles/global.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Select,
  MenuItem as MuiMenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("dueDate");

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "1.5rem",
            }}
          >
            Task Manager
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}></div>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} searchTerm={searchTerm} />
    </ThemeProvider>
  );
}
