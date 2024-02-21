import { useTheme } from "@emotion/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, TextField, Typography } from "@mui/material";

export const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box
      id="contactme-section"
      bgcolor={theme.palette.primary.main}
      sx={{
        display: "flex",

        flexDirection: { xs: "column", md: "row" },
        gap: theme.spacing(4),
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        p: theme.spacing(8),
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        component={"p"}
        sx={{
          typography: { xs: "h6", md: "h4" },
          fontWeight: "600",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        For previewing layouts and visual?
      </Typography>

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <TextField
          variant="outlined"
          placeholder="Your email"
          sx={{
            input: {
              color: "black",
              background: "white",
              borderRadius: 2,
              maxWidth: "250px",
              width: "100%",
            },
          }}
        />
        <KeyboardArrowRightIcon
          fontSize="large"
          sx={{
            position: "absolute",
            color: theme.palette.primary.dark,
            backgroundColor: "white",
            right: 2,
          }}
        />
      </Box>
    </Box>
  );
};
