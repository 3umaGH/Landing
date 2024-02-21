import { ThemeProvider } from "@mui/material";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { Homepage } from "./components/Homepage";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeModeContext.Provider value={{ toggleThemeMode }}>
        <ThemeProvider theme={theme}>
          <Homepage />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
