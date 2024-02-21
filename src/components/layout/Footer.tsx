import { useTheme } from "@emotion/react";
import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useMemo } from "react";
import { LOGO_URL } from "../../constants";

export const Footer = () => {
  const theme = useTheme();

  const socials = useMemo(
    () => [
      { icon: <InstagramIcon />, url: "#" },
      { icon: <FacebookIcon />, url: "#" },
    ],
    []
  );

  const links = useMemo(
    () => [
      { name: "Contact", url: "#contact" },
      { name: "About us", url: "#about-us" },
      { name: "FAQ's", url: "#faq" },
    ],
    []
  );

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
            src={LOGO_URL}
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
            {socials.map((social) => (
              <Link href={social.url} color="inherit">
                {social.icon}
              </Link>
            ))}
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
              {links.map((link) => (
                <li>
                  <Link href={link.url} color="inherit" underline="none">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
