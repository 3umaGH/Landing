import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";

export const Homepage = () => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Button variant="contained" onClick={() => toggleThemeMode()}>
        test
      </Button>
    </Box>
  );
};
