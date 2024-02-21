import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export const TextSection = ({
  title,
  subtext,
}: {
  title: string;
  subtext: string;
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
        textAlign: "center",
      }}
    >
      <Typography
        textAlign="center"
        variant="h2"
        sx={{ typography: { xs: "h4", md: "h2" } }}
        style={{ fontWeight: 500 }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          maxWidth: "750px",
          typography: "subtitle1",
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: theme.palette.subtext.main,
        }}
      >
        {subtext}
      </Typography>
    </Box>
  );
};
