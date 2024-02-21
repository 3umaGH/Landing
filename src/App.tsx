import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { Homepage } from "./components/Homepage";
import { Layout } from "./components/Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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

          ...((mode as string) === "light"
            ? {
                primary: {
                  main: "#008cd6",
                },

                background: {
                  default: "#f0f0f0",
                },
                subtext: {
                  main: "#2E3134",
                },
              }
            : {
                primary: {
                  main: "#167FE1",
                },

                background: {
                  default: "#151719",
                },
                subtext: {
                  main: "#8e959c",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeModeContext.Provider value={{ toggleThemeMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Homepage />
          </Layout>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
