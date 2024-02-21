import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { RoundedIcon } from "./RoundedIcon";

type FeatureItemType = {
  icon: React.ReactNode;
  title: string;
  subtext: string;
};

export const FeatureItem = ({ icon, title, subtext }: FeatureItemType) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
        maxWidth: "350px",
        mx: 2,
      }}
    >
      <RoundedIcon icon={icon} />

      <Typography
        variant="h5"
        component={"p"}
        sx={{ fontWeight: 600, marginTop: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component={"p"}
        color={theme.palette.subtext.main}
        sx={{ fontWeight: 500 }}
      >
        {subtext}
      </Typography>
    </Box>
  );
};
