import React from "react";
import { Navbar } from "./Navbar";
import { Box, Container, useTheme } from "@mui/material";
import CornerSVG from "../assets/corner.svg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          zIndex: -1,
          position: "absolute",
          display: "flex",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <Box component="img" src={CornerSVG} sx={{ opacity: 0.25 }} />
      </Box>

      <Container
        maxWidth={false}
        disableGutters
        sx={{ px: theme.spacing(8), py: theme.spacing(2) }}
      >
        <header>
          <Navbar />
        </header>
        <Container maxWidth={false} sx={{ py: theme.spacing(16) }}>
          {children}
        </Container>
      </Container>
    </>
  );
};
