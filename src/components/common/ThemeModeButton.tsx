import { useContext } from "react";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { Box, IconButton, SxProps } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

type ThemeModeButtonProps = {
  currentMode: "light" | "dark";
  sx?: SxProps;
};
export const ThemeModeButton = ({ currentMode, sx }: ThemeModeButtonProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <Box sx={sx}>
      <IconButton
        style={{ lineHeight: "0px" }}
        size="large"
        onClick={() => toggleThemeMode()}
        aria-label="Toggle Theme"
      >
        {currentMode === "light" ? <NightlightIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};
