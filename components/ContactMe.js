import { Button, Container, Typography } from "@mui/material";
import React from "react";

export default function ContactMe() {
  return (
    <Container
      id="contact"
      sx={{ pt: { xs: 16, md: 36 }, pl: 4, pr: 4 }}
    >
      <div align="center">
        <Typography
          variant="h3"
          sx={{ color: "secondary.main", fontWeight: 900 }}
        >
          Get in Touch
        </Typography>
        <Typography variant="h6" sx={{ pt: 4, width: "60%", color: "#ffffffbb" }}>
          My inbox is always open! If you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          href="mailto:rr.vishalgaur@gmail.com"
          sx={{
            textTransform: "none",
            mt: 8,
            fontSize: "1.15em",
            p: 3,
            pl: 4,
            pr: 4,
          }}
        >
          Say Hello
        </Button>
      </div>
    </Container>
  );
}
