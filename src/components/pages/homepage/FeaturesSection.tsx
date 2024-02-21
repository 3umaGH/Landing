import { Box } from "@mui/material";
import { FeatureItem } from "./FeatureItem";
import { useTheme } from "@emotion/react";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(8),
        flexWrap: "wrap",
      }}
    >
      <FeatureItem
        icon={<StarBorderIcon fontSize="inherit" />}
        title={"Enhanced Collaboration"}
        subtext={
          "Improve team collaboration with our robust workflow solutions. Streamline communication and increase productivity throughout your projects."
        }
      />
      <FeatureItem
        icon={<AutoFixHighOutlinedIcon fontSize="inherit" />}
        title={"Automated Issue Resolution"}
        subtext={
          "Effortlessly resolve issues and bugs with our automated solutions. Detect and fix problems in your workflow, ensuring a seamless development process."
        }
      />
      <FeatureItem
        icon={<VerifiedOutlinedIcon fontSize="inherit" />}
        title={"Verified Security"}
        subtext={
          "Ensure the security of your data with our verified systems. We prioritize the protection of your information, providing a safe and reliable environment."
        }
      />
      <FeatureItem
        icon={<AddReactionOutlinedIcon fontSize="inherit" />}
        title={"User Engagement"}
        subtext={
          "Encourage user engagement with our feature-rich solutions. Add reactions to enhance user interactions and create a positive experience for your audience."
        }
      />
      <FeatureItem
        icon={<ThumbUpAltOutlinedIcon fontSize="inherit" />}
        title={"Positive Feedback"}
        subtext={
          "Receive positive feedback with our tools. Boost your reputation by delivering high-quality results and exceeding expectations in every project."
        }
      />
      <FeatureItem
        icon={<CheckOutlinedIcon fontSize="inherit" />}
        title={"Project Success"}
        subtext={
          "Ensure project success with our comprehensive workflow. Achieve milestones, meet deadlines, and exceed goals with our reliable and efficient features."
        }
      />
    </Box>
  );
};
