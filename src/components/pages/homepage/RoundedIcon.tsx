import { Box, useTheme } from "@mui/material";
import React from "react";

export const RoundedIcon = ({ icon }: { icon: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        bgcolor={theme.palette.primary.main}
        sx={{
          p: 2,

          fontSize: "3rem",
          lineHeight: "0px",
          borderRadius: "100%",
          color: "white",
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};
