import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { LOGO_URL } from "../../constants";
import { ThemeModeButton } from "../common/ThemeModeButton";

export const Navbar = () => {
  const theme = useTheme();

  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          component={"img"}
          src={LOGO_URL}
          alt="Logo"
          sx={{
            height: { xs: 120, sm: 70 },
            width: { xs: 120, sm: 70 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            gap: theme.spacing(6),
          }}
        >
          <Link href="#" underline="none" color={"inherit"}>
            <Typography variant="subtitle1">Documentation</Typography>
          </Link>
          <Button variant="contained" size="large" sx={{ px: 4 }}>
            Sign Up
          </Button>

          <Divider
            sx={{ display: { xs: "none", sm: "block" } }}
            orientation="vertical"
            variant="fullWidth"
            flexItem
          />
          <ThemeModeButton
            sx={{
              top: 0,
              right: 0,
              position: { xs: "absolute", sm: "static" },
            }}
            currentMode={theme.palette.mode}
          />
        </Box>
      </Box>
    </nav>
  );
};
