import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  const theme = useTheme();
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "normal" },
          flexDirection: "column",
          gap: { xs: theme.spacing(2), md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: theme.spacing(2),
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src="https://cdn.worldvectorlogo.com/logos/blue-1.svg"
            sx={{
              height: 35,
              width: 35,
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(2),
              color: theme.palette.primary.dark,
            }}
          >
            <InstagramIcon />
            <FacebookIcon />
          </Box>
        </Box>

        <Box
          sx={{
            typography: "subtitle2",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              color={theme.palette.subtext.main}
              sx={{ fontWeight: 400 }}
            >
              Made by <span style={{ fontWeight: 600 }}>3uma.</span> All rights
              reserved.
            </Typography>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "auto" } }}>
            <ul
              id="footer-menu"
              style={{
                color: theme.palette.subtext.main,
              }}
            >
              <li>Contact</li>
              <li>About us</li>
              <li>FAQ's</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
