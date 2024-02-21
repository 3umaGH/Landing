import { useTheme } from "@emotion/react";
import { Box, Button, Link, Typography } from "@mui/material";

export const Navbar = () => {
  const theme = useTheme();

  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "start" },
          gap: 4,
        }}
      >
        <Box
          component={"img"}
          src="https://cdn.worldvectorlogo.com/logos/blue-1.svg"
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
        </Box>
      </Box>
    </nav>
  );
};
