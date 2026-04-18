import { Container, Typography, Box, Button } from "@mui/material";
import React from "react";

export default function LandingInfo() {
  return (
    <Container>
      <Box sx={{ mt: 14 }}>
        <Typography variant="h5">Hi, I am</Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "4.75em", md: undefined } }}
        >
          Vishal Gaur.
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "#ffffff95", fontSize: { xs: "4em", md: undefined } }}
        >
          I build android apps and web apps.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: 4,
            color: "#ffffffbb",
          }}
        >
          I am a Software Engineer specialized in Android Development with
          Kotlin / Compose and Web Development. Currently, I am SDE-2 - Android
          at Testbook Edu Solutions Pvt Ltd. and in the past I have worked at
          Paytm(One97 Communications Ltd.) as Software Engineer (Android).
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          href="mailto:rr.vishalgaur@gmail.com"
          sx={{
            textTransform: "none",
            mt: 12,
            fontSize: "1.25em",
            p: 2,
            pl: 3,
            pr: 3,
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
}
