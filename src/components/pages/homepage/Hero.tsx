import { Typography, useTheme } from "@mui/material";
import { Box, Button } from "@mui/material";

export const Hero = () => {
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
        variant={"h1"}
        sx={{ typography: { xs: "h2", md: "h1" } }}
        style={{ fontWeight: 600 }}
      >
        Landing template for{" "}
        <span style={{ color: theme.palette.primary.dark }}>startups</span>
      </Typography>

      <Typography
        sx={{
          maxWidth: "1024px",
          typography: "body",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: theme.palette.subtext.main,
        }}
      >
        My landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: theme.spacing(2),
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, py: 1.5, letterSpacing: ".1rem", minWidth: "220px" }}
        >
          Get started
        </Button>
        <Button
          size="large"
          variant="outlined"
          sx={{ px: 4, py: 1.5, letterSpacing: ".1rem", minWidth: "220px" }}
          color="secondary"
        >
          View on Github
        </Button>
      </Box>
    </Box>
  );
};
