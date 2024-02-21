import React from "react";
import { Navbar } from "./Navbar";
import { Box, Container, useTheme } from "@mui/material";
import CornerSVG from "../../assets/corner.svg";
import { Footer } from "./Footer";

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
        maxWidth={"xl"}
        disableGutters
        sx={{ px: theme.spacing(2), py: theme.spacing(4) }}
      >
        <header>
          <Navbar />
        </header>

        <Container
          maxWidth={false}
          disableGutters
          sx={{ py: theme.spacing(16) }}
        >
          {children}
        </Container>

        <Footer />
      </Container>
    </>
  );
};
