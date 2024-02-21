import { Box, Divider, Paper, Typography, useTheme } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

type TestimonialCardProps = {
  text: string;
  author: string;
  appName: string;
};

export const TestimonialCard = ({
  text,
  author,
  appName,
}: TestimonialCardProps) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        p: theme.spacing(4),
        maxWidth: "400px",
        width: "100%",
        height: "400px",

        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: theme.spacing(2),

        textAlign: "left",
      }}
    >
      <Box
        sx={{ transform: "rotate(180deg)", color: theme.palette.primary.light }}
      >
        <FormatQuoteIcon fontSize="large" />
      </Box>

      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Typography
          variant="body1"
          fontSize={"large"}
          color={theme.palette.subtext.main}
        >
          — {text}
        </Typography>
      </Box>

      <Divider sx={{ width: "100%" }} />

      <Typography variant="subtitle1" component={"p"} sx={{ fontWeight: 600 }}>
        {author} //{" "}
        <span
          style={{
            color:
              theme.palette.mode === "light"
                ? theme.palette.success.light
                : theme.palette.success.main,
          }}
        >
          {appName}
        </span>
      </Typography>
    </Paper>
  );
};
