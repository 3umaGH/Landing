import { Box, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Hero } from "./Hero";
import { FeaturesSection } from "./FeaturesSection";
import { TextSection } from "./TextSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";

export const Homepage = () => {
  const theme = useTheme();

  const handleClick = (anchor: "contactme") => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Box>
      {/*Hero*/}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(16),
          textAlign: "center",
        }}
      >
        <Hero onGetStartedClick={() => handleClick("contactme")} />

        <Box
          component={"img"}
          src="https://i.gyazo.com/a88cca4db086478cbf3a74d81c785942.jpg"
          alt="Office Enviroment"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "700px",
            maxWidth: "1200px",
            filter: theme.palette.mode === "light" ? "" : "brightness(0.85)",
            borderRadius: "10px",
            opacity: theme.palette.mode === "light" ? 1 : 0.5,
          }}
        />

        <TextSection
          title="Build up the whole picture"
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            blanditiis voluptatum velit sint totam modi quaerat accusantium
            laboriosam."
        />

        <FeaturesSection />

        <Divider sx={{ width: "100%" }} />

        <ContactSection />

        <Divider sx={{ width: "100%" }} />

        <TextSection
          title="Customer testimonials"
          subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            blanditiis voluptatum velit sint totam modi quaerat accusantium
            laboriosam."
        />

        <TestimonialSection />

        <ContactSection />
      </Box>
    </Box>
  );
};
