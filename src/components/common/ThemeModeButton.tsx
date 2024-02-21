import { useContext } from "react";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { IconButton, SxProps } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

type ThemeModeButtonProps = {
  currentMode: "light" | "dark";
  sx?: SxProps
};
export const ThemeModeButton = ({ currentMode,sx}: ThemeModeButtonProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <IconButton
      style={{ lineHeight: "0px" }}
      size="large"
      onClick={() => toggleThemeMode()}
      aria-label="Toggle Theme"
      sx={sx}
    >
      {currentMode === "light" ? <NightlightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
