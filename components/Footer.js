import { Container, Link, Typography, Box } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Container
      id="footer"
      sx={{
        pt: { xs: 16, md: 36 },
        pl: 4,
        pr: 4,
        pb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ borderBottom: "1px solid #00efff", width: "100%" }} />
        <Box
          component="span"
          sx={{
            px: 4,
            display: "flex",
            whiteSpace: "nowrap",
            color: "#ffffffbb",
          }}
        >
          <Typography variant="subtitle1">
            <Box
              component="a"
              href="https://github.com/i-vishi/my-portfolio"
              target="_blank"
              sx={{
                color: "#ffffffbb",
                textDecoration: "none",
                fontFamily: "monospace",
                "&:hover": { color: "#00efff" },
              }}
            >
              Built by Vishal Gaur
            </Box>
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid #00efff", width: "100%" }} />
      </Box>
      <Box sx={{ m: 2 }} align="center">
        <Link
          href="https://github.com/i-vishi"
          target="_blank"
          sx={{ color: "#ffffffbb", px: 2, "&:hover": { color: "#00efff" } }}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://linkedin.com/in/i-vishi"
          target="_blank"
          sx={{ color: "#ffffffbb", px: 2, "&:hover": { color: "#00efff" } }}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://twitter.com/iamvishalgaur"
          target="_blank"
          sx={{ color: "#ffffffbb", px: 2, "&:hover": { color: "#00efff" } }}
        >
          <TwitterIcon />
        </Link>
      </Box>
    </Container>
  );
}
