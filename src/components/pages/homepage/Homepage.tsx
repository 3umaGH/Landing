import { Box, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Hero } from "./Hero";
import { FeaturesSection } from "./FeaturesSection";
import { TextSection } from "./TextSection";
import { TestimonialSection } from "./TestimonialSection";
import { ContactSection } from "./ContactSection";
import { Carousel } from "./Carousel";

import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

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

        <Carousel
          maxWidth={1200}
          borderRadius={18}
          slideInterval={5000}
          nextButton={<ArrowForwardIos style={{ color: "white" }} />}
          previousButton={<ArrowBackIos style={{ color: "white" }} />}
          showTitle={true}
          showControls={true}
          titleStyles={{ color: "rgba(255,255,255,0.8)" }}
          slides={[
            {
              title: "Brainstorming",
              src: "https://i.imgur.com/zSAaKVd.jpeg",
            },
            {
              title: "Discussion",
              src: "https://i.imgur.com/dzV06Zj.jpeg",
            },
            {
              title: "Brainstorming",
              src: "https://i.imgur.com/RedGyWh.jpeg",
            },
            {
              title: "Coding",
              src: "https://i.imgur.com/khiksgO.jpeg",
            },
            {
              title: "Office Enviroment",
              src: "https://i.imgur.com/AMXutAR.jpeg",
            },
          ]}
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
