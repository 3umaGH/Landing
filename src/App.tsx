import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { createTheme } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Homepage } from "./components/pages/homepage/Homepage";
import { Layout } from "./components/layout/Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  /*Disable transitions on first render to prevent theme flickering */
  useEffect(() => {
    document.body.classList.add("no-transition");
    setTimeout(() => document.body.classList.remove("no-transition"), 200);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: "#167FE1",
          },

          ...((mode as string) === "light"
            ? {
                background: {
                  default: "#f0f0f0",
                },
                subtext: {
                  main: "#2E3134",
                },
                secondary: {
                  main: "#424242",
                },
              }
            : {
                background: {
                  default: "#111313",
                },
                subtext: {
                  main: "#8e959c",
                },
                secondary: {
                  main: "#f0f0f0",
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
