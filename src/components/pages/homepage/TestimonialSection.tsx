import { Box, useTheme } from "@mui/material";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",

        gap: theme.spacing(4),
        flexWrap: "wrap",
      }}
    >
      <TestimonialCard
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint totam modi quaerat accusantium laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint t."
        }
        author={"John Doe"}
        appName={"Company"}
      />

      <TestimonialCard
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint totam modi quaerat accusantium laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint t."
        }
        author={"John Doe"}
        appName={"Company"}
      />

      <TestimonialCard
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint totam modi quaerat accusantium laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitblanditiis voluptatum velit sint t."
        }
        author={"John Doe"}
        appName={"Company"}
      />
    </Box>
  );
};
