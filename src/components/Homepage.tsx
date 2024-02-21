import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { useTheme } from "@emotion/react";

export const Homepage = () => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  const theme = useTheme();
  return (
    <Box onClick={() => toggleThemeMode()}>
      {/*Hero*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(2),
          textAlign: "center",
        }}
      >
        <Box sx={{ typography: "h1", fontWeight: 600 }}>
          Landing template for{" "}
          <span style={{ color: theme.palette.primary.dark }}>startups</span>
        </Box>

        <Box
          sx={{
            maxWidth: "1024px",
            typography: "subtitle1",
            fontSize: "2rem",
            color: theme.palette.subtext.dark,
          }}
        >
          My landing page template works on all devices, so you only have to set
          it up once, and get beautiful results forever.
        </Box>

        <Box sx={{ display: "flex", gap: theme.spacing(2), mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5, letterSpacing: ".1rem" }}
          >
            Get started
          </Button>
          <Button
            size="large"
            variant="outlined"
            sx={{ px: 4, py: 1.5, letterSpacing: ".1rem" }}
          >
            View on Github
          </Button>
        </Box>
      </Box>

      {/*} <Button variant="contained" onClick={() => toggleThemeMode()}>
        test
  </Button>*/}
    </Box>
  );
};
