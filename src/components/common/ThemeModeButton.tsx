import { useContext } from "react";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

type ThemeModeButtonProps = {
  currentMode: "light" | "dark";
};
export const ThemeModeButton = ({ currentMode }: ThemeModeButtonProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <IconButton
      style={{ lineHeight: "0px" }}
      size="large"
      onClick={() => toggleThemeMode()}
    >
      {currentMode === "light" ? <NightlightIcon /> : <LightModeIcon />}
    </IconButton>
  );
};
